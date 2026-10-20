"""preSeTR Turnover Scheduler & Calendar Ingestion Engine.

Polls portfolio property iCal feeds, parses reservation schedules,
and generates the live turnover queue with 11:00 AM to 5:00 PM cleaning windows.
Assigns cleaners by language/market, generates personalized .ics calendar subscription feeds
with the exact property street address and entry instructions, and outputs units/LIVE_TURNOVER_QUEUE.json.
"""

from __future__ import annotations

import json
import os
import urllib.request
from dataclasses import asdict, dataclass
from datetime import datetime, timezone
from typing import Any, Dict, List, Optional

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
SCENIC_STAY_DIR = os.path.abspath(os.path.join(SCRIPT_DIR, ".."))
MANIFEST_PATH = os.path.join(SCENIC_STAY_DIR, "units", "PORTFOLIO_MASTER_MANIFEST.json")
OUTPUT_QUEUE_PATH = os.path.join(SCENIC_STAY_DIR, "units", "LIVE_TURNOVER_QUEUE.json")
CALENDARS_DIR = os.path.join(SCENIC_STAY_DIR, "units", "cleaner_calendars")

CLEANER_ROSTER: Dict[str, Dict[str, Any]] = {
    "justin": {
        "name": "Justin",
        "phone": "+1 (510) 555-0100",
        "lang": "en",
        "role": "Owner / Host Operator",
        "assigned_units": ["BKL-STU-001", "BKL-STU-002", "BKL-STU-003"],
        "rate": 0.0,
    },
    "fili": {
        "name": "Fili",
        "phone": "+1 (510) 555-0188",
        "lang": "es",
        "role": "Primary Cleaner (Avis)",
        "assigned_units": ["PIN-HOM-001"],
        "rate": 180.0,
    },
    "cicilia": {
        "name": "Cicilia Barbosa",
        "phone": "+1 (510) 555-0182",
        "lang": "pt-BR",
        "role": "Primary Cleaner (32nd St & Estates)",
        "assigned_units": ["OAK-HOM-001", "OAK-HOM-002", "OAK-HOM-003"],
        "rate": 180.0,
    },
    "maria": {
        "name": "Maria Gonzalez",
        "phone": "+1 (510) 555-0144",
        "lang": "es",
        "role": "Backup / Acton Cleaner",
        "assigned_units": ["BKL-ADU-001", "BKL-ADU-002", "BKL-ADU-003"],
        "rate": 140.0,
    },
}

UNIT_METADATA: Dict[str, Dict[str, str]] = {
    "BKL-STU-001": {
        "display_name": "North Studio (1545 Scenic Ave)",
        "street_address": "1545 Scenic Ave (North Studio), Berkeley, CA 94708",
        "entry_en": "Side garden path to North Studio entrance. Enter cleaner master code on the North Studio smart keypad (lockbox key backup on site).",
        "entry_es": "Camino lateral del jardin hacia la entrada del North Studio. Ingresa el codigo maestro en el teclado inteligente (caja de llaves de respaldo en sitio).",
        "entry_pt": "Caminho lateral do jardim ate a entrada do North Studio. Digite a senha mestre no teclado inteligente (cofre de chave reserva no local).",
    },
    "BKL-STU-002": {
        "display_name": "South Garden Studio (1545 Scenic Ave)",
        "street_address": "1545 Scenic Ave (South Studio), Berkeley, CA 94708",
        "entry_en": "South side garden gate to South Studio entrance. Enter cleaner master code on the South Studio smart keypad (confirm garden gate is latched on departure).",
        "entry_es": "Puerta lateral sur del jardin hacia la entrada del South Studio. Ingresa el codigo maestro en el teclado inteligente (verifica que la puerta del jardin quede cerrada al salir).",
        "entry_pt": "Portao lateral sul do jardim ate a entrada do South Studio. Digite a senha mestre no teclado inteligente (confirme que o portao do jardim fique fechado ao sair).",
    },
    "BKL-STU-003": {
        "display_name": "Both Studios: North & South (1545 Scenic Ave)",
        "street_address": "1545 Scenic Ave (North & South Studios), Berkeley, CA 94708",
        "entry_en": "Side garden path to both North Studio and South Studio entrances. Enter cleaner master code on both North and South Studio smart keypads.",
        "entry_es": "Camino lateral del jardin hacia las entradas de North Studio y South Studio. Ingresa el codigo maestro en ambos teclados inteligentes.",
        "entry_pt": "Caminho lateral do jardim ate as entradas do North Studio e South Studio. Digite a senha mestre nos dois teclados inteligentes.",
    },
    "BKL-ADU-001": {
        "display_name": "3007 Acton St (Downstairs Suite)",
        "street_address": "3007 Acton St (Downstairs Unit), Berkeley, CA 94702",
        "entry_en": "Front path to downstairs garden suite entrance. Enter cleaner code on the downstairs door smart keypad.",
        "entry_es": "Camino frontal hacia la entrada de la suite de abajo. Ingresa el codigo de limpieza en el teclado de la puerta inferior.",
        "entry_pt": "Caminho frontal ate a entrada da suite terrea. Digite a senha de limpeza no teclado da porta inferior.",
    },
    "BKL-ADU-002": {
        "display_name": "3007 Acton St (Upstairs Suite)",
        "street_address": "3007 Acton St (Upstairs Unit), Berkeley, CA 94702",
        "entry_en": "Exterior stairs to upstairs suite entrance. Enter cleaner code on the upstairs door smart keypad.",
        "entry_es": "Escaleras exteriores hacia la entrada de la suite de arriba. Ingresa el codigo de limpieza en el teclado de la puerta superior.",
        "entry_pt": "Escada externa ate a entrada da suite superior. Digite a senha de limpeza no teclado da porta superior.",
    },
    "BKL-ADU-003": {
        "display_name": "3007 Acton St (Both Units)",
        "street_address": "3007 Acton St (Both Downstairs & Upstairs Units), Berkeley, CA 94702",
        "entry_en": "Access both Downstairs garden entrance and Upstairs exterior stair entrance using the cleaner code on both door smart keypads.",
        "entry_es": "Acceso a ambas unidades (planta baja y planta alta por las escaleras exteriores) usando el codigo de limpieza en ambos teclados.",
        "entry_pt": "Acesso a ambas as unidades (terreo e andar superior pela escada externa) usando a senha de limpeza nos dois teclados.",
    },
    "OAK-HOM-001": {
        "display_name": "1023 32nd St (Private Level)",
        "street_address": "1023 32nd St, Oakland, CA 94608",
        "entry_en": "Dedicated private level entrance. Enter cleaner master code on the front door smart keypad.",
        "entry_es": "Entrada del nivel privado. Ingresa el codigo maestro de limpieza en el teclado inteligente de la puerta principal.",
        "entry_pt": "Entrada do andar privado. Digite a senha mestre de limpeza no teclado inteligente da porta da frente.",
    },
    "OAK-HOM-002": {
        "display_name": "5540 Estates Dr (5-BR Entire Home)",
        "street_address": "5540 Estates Dr (5-BR Entire Home), Oakland, CA 94618",
        "entry_en": "Driveway to main front entry door and lower level. Enter cleaner master code on the main front door smart keypad.",
        "entry_es": "Entrada principal por la rampa vehicular y nivel inferior. Ingresa el codigo de limpieza en el teclado inteligente de la puerta principal.",
        "entry_pt": "Entrada principal pela garagem e nivel inferior. Digite a senha de limpeza no teclado inteligente da porta da frente.",
    },
    "OAK-HOM-003": {
        "display_name": "5540 Estates Dr (3-BR Upstairs Unit)",
        "street_address": "5540 Estates Dr (3-BR Upstairs Unit), Oakland, CA 94618",
        "entry_en": "Front steps to main upper entry door. Enter cleaner master code on the upper entry smart keypad.",
        "entry_es": "Escaleras frontales hacia la puerta principal superior. Ingresa el codigo de limpieza en el teclado inteligente superior.",
        "entry_pt": "Escada frontal ate a porta de entrada principal superior. Digite a senha de limpeza no teclado inteligente da porta superior.",
    },
    "PIN-HOM-001": {
        "display_name": "3146 Avis Way (Pinole Home)",
        "street_address": "3146 Avis Way, Pinole, CA 94564",
        "entry_en": "Main front door Schlage smart deadbolt plus interior bedroom Yale levers. Enter cleaner master code on the front door keypad.",
        "entry_es": "Puerta principal con cerradura inteligente Schlage y puertas interiores Yale. Ingresa el codigo de limpieza en el teclado de la puerta principal.",
        "entry_pt": "Porta principal com fechadura inteligente Schlage e portas internas Yale. Digite a senha de limpeza no teclado da porta principal.",
    },
    "DEN-ADU-001": {
        "display_name": "3270 W Walsh Pl (Denver ADU Suite)",
        "street_address": "3270 W Walsh Pl (ADU Suite), Denver, CO 80219",
        "entry_en": "Private ADU suite entrance. Enter cleaner master code on the ADU door smart keypad.",
        "entry_es": "Entrada privada de la suite ADU. Ingresa el codigo de limpieza en el teclado inteligente de la puerta.",
        "entry_pt": "Entrada privada da suite ADU. Digite a senha de limpeza no teclado inteligente da porta.",
    },
}


@dataclass
class TurnoverJob:
    job_id: str
    unit_id: str
    property_name: str
    market: str
    turnover_date: str
    window_start: str
    window_end: str
    is_back_to_back: bool
    status: str = "SCHEDULED"
    assigned_cleaner: Optional[str] = None
    cleaner_phone: Optional[str] = None
    cleaner_lang: str = "en"
    rate: float = 160.00
    street_address: str = ""
    entry_instructions: str = ""
    dispatch_msg: str = ""


def get_cleaner_for_unit(unit_id: str) -> Dict[str, Any]:
    for _key, c in CLEANER_ROSTER.items():
        if unit_id in c["assigned_units"]:
            return c
    return CLEANER_ROSTER["maria"]


def get_unit_meta(unit_id: str, fallback_name: str, fallback_market: str) -> Dict[str, str]:
    meta = UNIT_METADATA.get(unit_id.upper())
    if meta:
        return meta
    return {
        "display_name": fallback_name,
        "street_address": fallback_market,
        "entry_en": "Enter cleaner master code on the main entry smart keypad.",
        "entry_es": "Ingresa el codigo maestro de limpieza en el teclado inteligente de la entrada.",
        "entry_pt": "Digite a senha mestre de limpeza no teclado inteligente da entrada.",
    }


def generate_trilingual_dispatch_message(
    cleaner_name: str,
    cleaner_lang: str,
    property_name: str,
    turnover_date: str,
    unit_id: str,
    is_back_to_back: bool,
    fallback_market: str = "",
) -> str:
    """Generates a clean announcement for a cleaning at the exact address and how to get in."""
    meta = get_unit_meta(unit_id, property_name, fallback_market)
    display_name = meta["display_name"]
    street_address = meta["street_address"]

    priority_en = " (Back-to-Back Guest Check-in Today at 5:00 PM)" if is_back_to_back else ""
    priority_es = " (Entrada de nuevo huesped hoy mismo a las 5:00 PM)" if is_back_to_back else ""
    priority_pt = " (Novo hospede entra hoje mesmo as 5:00 PM)" if is_back_to_back else ""

    if cleaner_lang == "es":
        return (
            f"Aviso de Limpieza: Hola {cleaner_name}, limpieza programada para {display_name} "
            f"el {turnover_date}{priority_es}. Horario: 11:00 AM a 5:00 PM. "
            f"Direccion: {street_address}. Como entrar: {meta['entry_es']}"
        )
    if cleaner_lang == "pt-BR":
        return (
            f"Aviso de Limpeza: Ola {cleaner_name}, limpeza agendada para {display_name} "
            f"em {turnover_date}{priority_pt}. Horario: 11:00 AM as 5:00 PM. "
            f"Endereco: {street_address}. Como entrar: {meta['entry_pt']}"
        )
    return (
        f"Cleaning Announcement: Hi {cleaner_name}, turnover cleaning scheduled for {display_name} "
        f"on {turnover_date}{priority_en}. Window: 11:00 AM to 5:00 PM. "
        f"Address: {street_address}. How to get in: {meta['entry_en']}"
    )


def parse_ics_date(val: str) -> datetime:
    val = val.strip()
    if "T" in val:
        raw = val.split("T")[0]
        return datetime.strptime(raw, "%Y%m%d")
    return datetime.strptime(val[:8], "%Y%m%d")


def fetch_and_parse_ical(feed_url: str) -> List[Dict[str, Any]]:
    req = urllib.request.Request(feed_url, headers={"User-Agent": "A-Better-BNB-preSeTR/1.1"})
    with urllib.request.urlopen(req, timeout=10) as resp:
        content = resp.read().decode("utf-8", errors="ignore")

    events: List[Dict[str, Any]] = []
    blocks = content.split("BEGIN:VEVENT")
    for block in blocks[1:]:
        dtstart = None
        dtend = None
        summary = "Reserved"

        for line in block.splitlines():
            line = line.strip()
            if line.startswith("DTSTART"):
                parts = line.split(":")
                if len(parts) > 1:
                    dtstart = parse_ics_date(parts[-1])
            elif line.startswith("DTEND"):
                parts = line.split(":")
                if len(parts) > 1:
                    dtend = parse_ics_date(parts[-1])
            elif line.startswith("SUMMARY:"):
                summary = line.split(":", 1)[1].strip()

        if dtstart and dtend:
            events.append({"start": dtstart, "end": dtend, "summary": summary})

    return sorted(events, key=lambda x: x["start"])


def build_turnover_schedule(manifest_path: str = MANIFEST_PATH) -> List[TurnoverJob]:
    if not os.path.exists(manifest_path):
        raise FileNotFoundError(f"Manifest not found at {manifest_path}")

    with open(manifest_path, "r", encoding="utf-8") as f:
        manifest = json.load(f)

    turnovers: List[TurnoverJob] = []

    for prop in manifest.get("properties", []):
        unit_id = prop["unit_id"]
        internal_name = prop["internal_name"]
        market = prop["market"]
        feed_url = prop.get("ical_feed")

        if not feed_url:
            continue

        try:
            events = fetch_and_parse_ical(feed_url)
        except Exception:
            continue

        cleaner = get_cleaner_for_unit(unit_id)
        meta = get_unit_meta(unit_id, internal_name, market)

        for i, ev in enumerate(events):
            checkout_dt = ev["end"]
            date_str = checkout_dt.strftime("%Y-%m-%d")

            is_back_to_back = False
            if i + 1 < len(events):
                next_ev = events[i + 1]
                if next_ev["start"].date() == checkout_dt.date():
                    is_back_to_back = True

            msg = generate_trilingual_dispatch_message(
                cleaner_name=cleaner["name"],
                cleaner_lang=cleaner["lang"],
                property_name=internal_name,
                turnover_date=date_str,
                unit_id=unit_id,
                is_back_to_back=is_back_to_back,
                fallback_market=market,
            )

            entry_field = (
                meta["entry_es"]
                if cleaner["lang"] == "es"
                else (meta["entry_pt"] if cleaner["lang"] == "pt-BR" else meta["entry_en"])
            )

            job = TurnoverJob(
                job_id=f"turn_{unit_id}_{date_str}",
                unit_id=unit_id,
                property_name=internal_name,
                market=market,
                turnover_date=date_str,
                window_start=f"{date_str} 11:00 AM",
                window_end=f"{date_str} 05:00 PM",
                is_back_to_back=is_back_to_back,
                assigned_cleaner=cleaner["name"],
                cleaner_phone=cleaner["phone"],
                cleaner_lang=cleaner["lang"],
                rate=cleaner["rate"],
                street_address=meta["street_address"],
                entry_instructions=entry_field,
                dispatch_msg=msg,
            )
            turnovers.append(job)

    if not turnovers and os.path.exists(OUTPUT_QUEUE_PATH):
        with open(OUTPUT_QUEUE_PATH, "r", encoding="utf-8") as f:
            existing_raw = json.load(f)
        for item in existing_raw:
            unit_id = item["unit_id"]
            internal_name = item["property_name"]
            market = item["market"]
            date_str = item["turnover_date"]
            is_b2b = bool(item.get("is_back_to_back", False))
            cleaner = get_cleaner_for_unit(unit_id)
            meta = get_unit_meta(unit_id, internal_name, market)
            msg = generate_trilingual_dispatch_message(
                cleaner_name=cleaner["name"],
                cleaner_lang=cleaner["lang"],
                property_name=internal_name,
                turnover_date=date_str,
                unit_id=unit_id,
                is_back_to_back=is_b2b,
                fallback_market=market,
            )
            entry_field = (
                meta["entry_es"]
                if cleaner["lang"] == "es"
                else (meta["entry_pt"] if cleaner["lang"] == "pt-BR" else meta["entry_en"])
            )
            turnovers.append(
                TurnoverJob(
                    job_id=item["job_id"],
                    unit_id=unit_id,
                    property_name=internal_name,
                    market=market,
                    turnover_date=date_str,
                    window_start=item["window_start"],
                    window_end=item["window_end"],
                    is_back_to_back=is_b2b,
                    status=item.get("status", "SCHEDULED"),
                    assigned_cleaner=cleaner["name"],
                    cleaner_phone=cleaner["phone"],
                    cleaner_lang=cleaner["lang"],
                    rate=cleaner["rate"],
                    street_address=meta["street_address"],
                    entry_instructions=entry_field,
                    dispatch_msg=msg,
                )
            )

    turnovers.sort(key=lambda x: x.turnover_date)
    return turnovers


def export_cleaner_calendars(turnovers: List[TurnoverJob], output_dir: str = CALENDARS_DIR) -> Dict[str, str]:
    """Generates personalized .ics calendar files with exact street address and entry instructions."""
    os.makedirs(output_dir, exist_ok=True)
    generated: Dict[str, str] = {}
    stamp = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")

    for cleaner_id, cleaner_info in CLEANER_ROSTER.items():
        name = cleaner_info["name"]
        cleaner_jobs = [j for j in turnovers if j.assigned_cleaner == name]

        ics_lines = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            f"PRODID:A Better BNB reSeTR Turnover Calendar {name} EN",
            f"X-WR-CALNAME:reSeTR Turns ({name})",
            "X-WR-TIMEZONE:America/Los_Angeles",
        ]

        for job in cleaner_jobs:
            dt_clean = job.turnover_date.replace("-", "")
            start_str = f"{dt_clean}T180000Z"
            end_str = f"{dt_clean}T240000Z"
            meta = get_unit_meta(job.unit_id, job.property_name, job.market)
            display_name = meta["display_name"]
            street_address = job.street_address or meta["street_address"]
            priority = "Back-to-Back Cleaning: " if job.is_back_to_back else "Cleaning: "

            ics_lines.extend([
                "BEGIN:VEVENT",
                f"UID:{job.job_id}@abetterbnb.com",
                f"DTSTAMP:{stamp}",
                "SEQUENCE:5",
                f"DTSTART:{start_str}",
                f"DTEND:{end_str}",
                f"SUMMARY:{priority}{display_name}",
                f"DESCRIPTION:{job.dispatch_msg}",
                f"LOCATION:{street_address}",
                "BEGIN:VALARM",
                "TRIGGER:-PT2H",
                "ACTION:DISPLAY",
                f"DESCRIPTION:Upcoming Cleaning at 11:00 AM at {street_address}",
                "END:VALARM",
                "END:VEVENT",
            ])

        ics_lines.append("END:VCALENDAR")
        file_path = os.path.join(output_dir, f"{cleaner_id}_turns.ics")
        with open(file_path, "w", encoding="utf-8") as f:
            f.write("\n".join(ics_lines))
        generated[cleaner_id] = file_path

    return generated


def main() -> None:
    print("=" * 75)
    print("  preSeTR: AUTOMATED TURNOVER SCHEDULER & CALENDAR DISPATCH")
    print("=" * 75)

    try:
        jobs = build_turnover_schedule()
        print(f"Successfully processed portfolio manifest. Identified {len(jobs)} turnovers.")

        cal_files = export_cleaner_calendars(jobs)
        print(f"\nGenerated {len(cal_files)} cleaner-subscribed calendar feeds (.ics with address & entry info):")
        for cid, p in cal_files.items():
            print(f"  [{cid.upper()}] -> {p}")

        now_str = datetime.now().strftime("%Y-%m-%d")
        upcoming = [j for j in jobs if j.turnover_date >= now_str][:8]

        print("\nUpcoming Scheduled Turnovers (11:00 AM to 5:00 PM Window):")
        for j in upcoming:
            turn_type = "BACK-TO-BACK" if j.is_back_to_back else "Standard"
            print(f"  {j.turnover_date} | {j.unit_id} | {j.street_address} | {j.assigned_cleaner} ({turn_type})")

        print("\nSample Cleaning Announcements (Exact Address + How to Get In):")
        for j in upcoming[:3]:
            print(f"\n[To {j.assigned_cleaner} ({j.cleaner_lang}) for {j.unit_id} on {j.turnover_date}]:")
            print(f"  \"{j.dispatch_msg}\"")

        os.makedirs(os.path.dirname(OUTPUT_QUEUE_PATH), exist_ok=True)
        with open(OUTPUT_QUEUE_PATH, "w", encoding="utf-8") as f:
            json.dump([asdict(j) for j in jobs], f, indent=2)
        print(f"\nLive queue written to: {OUTPUT_QUEUE_PATH}")

    except Exception as ex:
        print(f"Error building schedule: {ex}")

    print("=" * 75)


if __name__ == "__main__":
    main()
