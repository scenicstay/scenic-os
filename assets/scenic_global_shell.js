/* Scenic Stay Unified 2-Tier Macro Pillar -> Child Subset & Independent Training Header Shell */
(function () {
  "use strict";

  const params = new URLSearchParams(window.location.search);
  const isExternalOwnerMode = params.get("mode") === "owner";

  const ROLE_PROFILES = {
    ALL_ACCESS: {
      code: "ALL_ACCESS",
      tag: "@All-Access Executive & Operations",
      summary: "Full system & training access: for Founder, Operations Director, and All-Access team links",
      pillarIds: ["beacon_scout", "beacon_lead_command", "host", "balansetr"],
      trainingIds: ["train_overview", "train_voice", "train_ops", "train_sop", "train_balansetr"],
      navIds: ["launchpad", "blueprint", "rulebook", "academy", "operations", "shadow", "atlas", "beacon", "agreement", "forge", "pricing", "presetr", "resetr", "balansetr"]
    },
    SALES_AND_GROWTH: {
      code: "SALES_AND_GROWTH",
      tag: "@Sales & Growth",
      summary: "Universal Intro + Beacon Scout -> Beacon Lead Command -> Owner Contract -> HOSt Handoff",
      pillarIds: ["beacon_scout", "beacon_lead_command", "host"],
      trainingIds: ["train_overview", "train_voice", "train_sop"],
      navIds: ["launchpad", "blueprint", "rulebook", "academy", "atlas", "beacon", "agreement", "forge"]
    },
    OPERATIONS_ADMIN: {
      code: "OPERATIONS_ADMIN",
      tag: "@Operations & Admin",
      summary: "Universal Intro + From HOSt Handoff Onward: HOSt Forge, Dynamic Pricing, preSeTR, reSeTR, Field Ops Contract, Inside Ops Deck, Company SOP",
      pillarIds: ["beacon_scout", "host"],
      trainingIds: ["train_overview", "train_ops", "train_sop"],
      navIds: ["launchpad", "blueprint", "rulebook", "operations", "shadow", "atlas", "forge", "pricing", "presetr", "resetr"]
    },
    ACCOUNTING_FINANCE: {
      code: "ACCOUNTING_FINANCE",
      tag: "@Accounting & Finance",
      summary: "Universal Intro + balanSeTR Ledger, Deal Seeker, Monthly Owner Statements & EOY Tax Center",
      pillarIds: ["host", "balansetr"],
      trainingIds: ["train_overview", "train_ops", "train_sop", "train_balansetr"],
      navIds: ["launchpad", "blueprint", "operations", "forge", "balansetr"]
    },
    SOCIAL_MARKETING: {
      code: "SOCIAL_MARKETING",
      tag: "@Social Media & Marketing",
      summary: "Universal Intro + Brand Voice Academy, High-Buzz Discovery & Guest Add-On Merchandising",
      pillarIds: ["beacon_scout", "beacon_lead_command", "host"],
      trainingIds: ["train_overview", "train_voice", "train_sop"],
      navIds: ["launchpad", "blueprint", "rulebook", "academy", "atlas", "beacon", "pricing"]
    },
    PROPERTY_OWNER: {
      code: "PROPERTY_OWNER",
      tag: "@Partner Homeowner",
      summary: "Locked Property Portal (Agreement, Intake Blanks & Statements)",
      pillarIds: ["beacon_lead_command", "host", "balansetr"],
      trainingIds: ["train_overview"],
      navIds: ["agreement", "forge", "balansetr"]
    },
    FIELD_PARTNER: {
      code: "FIELD_PARTNER",
      tag: "@Field Partner (Cleaners)",
      summary: "Assigned preSeTR Schedule, reSeTR Checklist & Partner Contract",
      pillarIds: ["host"],
      trainingIds: ["train_ops", "train_sop"],
      navIds: ["presetr", "resetr"]
    }
  };

  /* 4 Overarching Macro Parent Pillars (Operational Mode Row 1) and their Interactive Subsets (Row 2) */
  const MACRO_PILLARS = [
    {
      id: "beacon_scout",
      number: "1",
      title: "1. Beacon Scout",
      caption: "Discovery Engine",
      defaultHref: "beacon_atlas_explorer.html",
      autonomousBadge: "⚡ Autonomous Seeker: Active (15m East Bay ZIP Cadence • Background)",
      subsets: [
        {
          id: "subset_atlas",
          label: "🗺️ Atlas (Interactive Map, Slippage Watchlist & Multi-Platform Seeker)",
          href: "beacon_atlas_explorer.html",
          matchFiles: ["beacon_atlas_explorer.html"],
          desc: "Interactive concentric East Bay ZIP map, longitudinal rating slippage monitor, and multi-platform discovery filter."
        }
      ]
    },
    {
      id: "beacon_lead_command",
      number: "2",
      title: "2. Beacon Lead Command",
      caption: "Sales & Closing CRM",
      defaultHref: "beacon_lead_command.html",
      autonomousBadge: null,
      subsets: [
        {
          id: "subset_beacon_pipeline",
          label: "📊 Beacon Lead Command Pipeline",
          href: "beacon_lead_command.html",
          matchFiles: ["beacon_lead_command.html"],
          desc: "Socratic 4-Tab closer workstation, Sales Team discovery call cadence, and 1-click contract handoff."
        },
        {
          id: "subset_owner_contract",
          label: "✍️ Owner Contract Generator",
          href: "owner_agreement_generator.html",
          matchFiles: ["owner_agreement_generator.html"],
          desc: "Plain-language residential co-hosting and boutique hotel distribution agreements."
        }
      ]
    },
    {
      id: "host",
      number: "3",
      title: "3. HOSt (Hospitality OS)",
      caption: "Property Vault, Pricing, Supplies & Field Ops",
      defaultHref: "host_property_forge.html",
      autonomousBadge: null,
      subsets: [
        {
          id: "subset_host_forge",
          label: "🏛️ Owner Intake & Property Vault (HOSt Forge)",
          href: "host_property_forge.html",
          matchFiles: ["host_property_forge.html", "property_walkthrough.html"],
          excludeHash: "#field-ops-contract",
          desc: "80% pre-filled property onboarding, CapEx shopping checklists, and refreshed listing copy."
        },
        {
          id: "subset_dynamic_pricing",
          label: "📈 Dynamic Pricing & Event Copy",
          href: "dynamic_pricing_command.html",
          matchFiles: ["dynamic_pricing_command.html"],
          desc: "Local event surge floors, orphan gap-night extensions, and seasonal/event copy swapper."
        },
        {
          id: "subset_presetr",
          label: "📦 preSeTR (Supply Engine)",
          href: "presetr_supply_engine.html",
          matchFiles: ["presetr_supply_engine.html"],
          desc: "3-par room-matching off-white linen inventory, supply thresholds, and 14d/7d/48h advance dispatch."
        },
        {
          id: "subset_resetr",
          label: "🧹 reSeTR (Field Turnovers)",
          href: "resetr_turnover_app.html",
          matchFiles: ["resetr_turnover_app.html", "host_dispatch_resetr.html"],
          desc: "Mobile two-phase photo verification checklist (11:00 AM to 5:00 PM window) and instant payout trigger."
        },
        {
          id: "subset_field_ops_contract",
          label: "🤝 Field Ops Partner Contract",
          href: "host_property_forge.html#field-ops-contract",
          matchFiles: ["contractor_agreement_generator.html"],
          matchHash: "#field-ops-contract",
          desc: "Printable Field Operations & Turnover Partner Agreement inside HOSt."
        }
      ]
    },
    {
      id: "balansetr",
      number: "4",
      title: "4. balanSeTR",
      caption: "Autonomous Bookkeeper & Tax",
      defaultHref: "scenic_ledger_bookkeeper.html",
      autonomousBadge: null,
      subsets: [
        {
          id: "subset_bal_ledger",
          label: "📒 Autonomous Ledger & Feed",
          href: "scenic_ledger_bookkeeper.html#tab-bookkeeper",
          matchFiles: ["scenic_ledger_bookkeeper.html"],
          matchHash: "#tab-bookkeeper",
          defaultWhenNoHash: true,
          desc: "Replaces QuickBooks Online: real-time payout reconciliation and integer-cent conservation."
        },
        {
          id: "subset_bal_deals",
          label: "🏷️ Deal Seeker & Expense Radar",
          href: "scenic_ledger_bookkeeper.html#tab-deal-seeker",
          matchFiles: ["scenic_ledger_bookkeeper.html"],
          matchHash: "#tab-deal-seeker",
          desc: "Automated vendor receipt matching, bulk supply savings radar, and CapEx ROI tracking."
        },
        {
          id: "subset_bal_statements",
          label: "📄 Monthly Owner Statements",
          href: "scenic_ledger_bookkeeper.html#tab-owner-statements",
          matchFiles: ["scenic_ledger_bookkeeper.html", "invoice_INV-1008_kris_maganti.html"],
          matchHash: "#tab-owner-statements",
          desc: "Plain-language monthly homeowner statements with transparent pass-through accounting."
        },
        {
          id: "subset_bal_tax",
          label: "🏛️ EOY Tax Center (Schedule E & CPA)",
          href: "scenic_ledger_bookkeeper.html#tab-tax-center",
          matchFiles: ["scenic_ledger_bookkeeper.html"],
          matchHash: "#tab-tax-center",
          desc: "Year-end IRS Schedule E, 1099-MISC/NEC, TOT filings, and CPA export package."
        }
      ]
    }
  ];

  /* Independent Training & Onboarding Curriculum Subheadings (Mode 2) */
  const TRAINING_SUBHEADINGS = [
    {
      id: "train_overview",
      label: "01 Universal System Overview & Architecture",
      href: "scenic_os_system_blueprint.html",
      matchFiles: ["scenic_os_system_blueprint.html"],
      desc: "Master system architecture, 2-tier navigation map, Airbnb API connection paths, and unit pricing sandbox."
    },
    {
      id: "train_voice",
      label: "02 Interactive Voice Academy (Episodes 1-6)",
      href: "scenic_academy_journey.html",
      matchFiles: ["scenic_academy_journey.html"],
      desc: "Interactive voice-guided episodes covering our hospitality story, 1,783-review proof, and Socratic sales."
    },
    {
      id: "train_ops",
      label: "03 Inside Operations Deck (Watch First)",
      href: "operations_onboarding_deck.html",
      matchFiles: ["operations_onboarding_deck.html", "scenic_operations_academy.html"],
      desc: "Step-by-step operations onboarding deck for guest messaging, preSeTR, reSeTR, and field standards."
    },
    {
      id: "train_sop",
      label: "04 Company SOP & Shadow Workbook",
      href: "scenic_company_sop_manual.html",
      matchFiles: ["scenic_company_sop_manual.html", "hospitality_communications_rulebook.html", "alyssa_shadow_playbook.html"],
      desc: "Complete company SOP manual, 3-par linen standards, and interactive Watch-First shadow workbook."
    },
    {
      id: "train_balansetr",
      label: "05 balanSeTR Finance & Tax SOP",
      href: "scenic_ledger_bookkeeper.html",
      matchFiles: [],
      desc: "Autonomous ledger reconciliation, owner statements, and Schedule E tax workflows for Accounting."
    }
  ];

  /* Full Quick-Switcher Drawer Catalog (Ctrl+K) */
  const NAV_ITEMS = [
    {
      id: "launchpad",
      href: "index.html",
      label: "00. Scenic OS Team Launchpad & Role Portal",
      stage: "Front Door & Discord Role Scope",
      desc: "Active Discord role session banner and role-scoped training and operational workspace flow."
    },
    {
      id: "atlas",
      href: "beacon_atlas_explorer.html",
      label: "1A. Beacon Scout -> Atlas Explorer",
      stage: "Pillar 1: Discovery Engine",
      desc: "Concentric East Bay ZIP map, longitudinal rating slippage monitor, and multi-platform seeker."
    },
    {
      id: "beacon",
      href: "beacon_lead_command.html",
      label: "2A. Beacon Lead Command -> Lead Command Pipeline",
      stage: "Pillar 2: Sales & Closing CRM",
      desc: "Dual-source lead graph, Sales Team call cadence, and 4-tab Socratic closer workstation."
    },
    {
      id: "agreement",
      href: "owner_agreement_generator.html",
      label: "2B. Beacon Lead Command -> Owner Contract Generator",
      stage: "Pillar 2: Plain-Language Contract",
      desc: "Generates co-hosting and boutique agreements with 1-click transition to HOSt Forge."
    },
    {
      id: "forge",
      href: "host_property_forge.html",
      label: "3A. HOSt -> Property Vault (HOSt Forge)",
      stage: "Pillar 3: Pre-Filled Onboarding & CapEx Lab",
      desc: "80% pre-filled property intake, CapEx shopping lists (32nd St, Estates), and Avis Way copy lab."
    },
    {
      id: "pricing",
      href: "dynamic_pricing_command.html",
      label: "3B. HOSt -> Dynamic Pricing & Event Copy",
      stage: "Pillar 3: Yield & Event Merchandising",
      desc: "Event compression floors, orphan gap-night extensions, and 1-click event copy swapper."
    },
    {
      id: "presetr",
      href: "presetr_supply_engine.html",
      label: "3C. HOSt -> preSeTR (Supply Engine)",
      stage: "Pillar 3: Advance Radar & 3-Par Linen",
      desc: "14d/7d/48h advance cleaner dispatch and off-white room-matching linen inventory engine."
    },
    {
      id: "resetr",
      href: "resetr_turnover_app.html",
      label: "3D. HOSt -> reSeTR (Field Turnovers)",
      stage: "Pillar 3: Mobile Photo QA (/slug)",
      desc: "Two-phase mobile turnover checklist (11:00 AM to 5:00 PM) and instant partner payout trigger."
    },
    {
      id: "balansetr",
      href: "scenic_ledger_bookkeeper.html",
      label: "4. balanSeTR Autonomous Bookkeeper",
      stage: "Pillar 4: Ledger, Statements & Tax",
      desc: "Replaces QuickBooks Online: auto-reconciliation, Deal Seeker, owner statements & EOY Tax Center."
    },
    {
      id: "blueprint",
      href: "scenic_os_system_blueprint.html",
      label: "Training 01: Universal System Overview",
      stage: "Independent Training Hub",
      desc: "2-Tier architecture blueprint, Airbnb API integration guide, and unit pricing sandbox."
    },
    {
      id: "academy",
      href: "scenic_academy_journey.html",
      label: "Training 02: Interactive Voice Academy",
      stage: "Independent Training Hub",
      desc: "Episodes 1-6 voice-guided training covering our story, review proof, and Socratic CRM."
    },
    {
      id: "operations",
      href: "operations_onboarding_deck.html",
      label: "Training 03: Inside Operations Deck",
      stage: "Independent Training Hub",
      desc: "Watch-First operations onboarding deck for guest comms, preSeTR, reSeTR, and balanSeTR."
    },
    {
      id: "rulebook",
      href: "scenic_company_sop_manual.html",
      label: "Training 04: Company SOP & Shadow Workbook",
      stage: "Independent Training Hub",
      desc: "Guest communications rulebook, 3-par linen rules, and interactive shadow scenarios."
    }
  ];

  const TRAINING_FILES = [
    "scenic_os_system_blueprint.html",
    "scenic_academy_journey.html",
    "operations_onboarding_deck.html",
    "scenic_operations_academy.html",
    "scenic_company_sop_manual.html",
    "hospitality_communications_rulebook.html",
    "alyssa_shadow_playbook.html"
  ];

  function resolveRoleCode(rawCode) {
    const clean = String(rawCode || "").trim().toUpperCase();
    const aliasMap = {
      ALL_ACCESS: "ALL_ACCESS",
      EXECUTIVE: "ALL_ACCESS",
      DIRECTOR: "ALL_ACCESS",
      FOUNDER: "ALL_ACCESS",
      FOUNDER_JUSTIN: "ALL_ACCESS",
      JUSTIN: "ALL_ACCESS",
      SALES: "SALES_AND_GROWTH",
      SALES_TEAM: "SALES_AND_GROWTH",
      SALES_AND_GROWTH: "SALES_AND_GROWTH",
      OPS: "OPERATIONS_ADMIN",
      OPS_AND_ADMIN: "OPERATIONS_ADMIN",
      OPERATIONS_ADMIN: "OPERATIONS_ADMIN",
      ACCOUNTING: "ACCOUNTING_FINANCE",
      FINANCE: "ACCOUNTING_FINANCE",
      ACCOUNTING_FINANCE: "ACCOUNTING_FINANCE",
      SOCIAL: "SOCIAL_MARKETING",
      SOCIAL_MARKETING: "SOCIAL_MARKETING",
      SOCIAL_AND_MARKETING: "SOCIAL_MARKETING",
      OWNER: "PROPERTY_OWNER",
      PROPERTY_OWNER: "PROPERTY_OWNER",
      CLEANER: "FIELD_PARTNER",
      FIELD_PARTNER: "FIELD_PARTNER"
    };
    return aliasMap[clean] || clean;
  }

  function getActiveRoleCode() {
    const urlRole = resolveRoleCode(params.get("role") || "");
    if (urlRole && ROLE_PROFILES[urlRole]) {
      try { localStorage.setItem("scenic_active_discord_role", urlRole); } catch (_) {}
      return urlRole;
    }
    try {
      const saved = resolveRoleCode(localStorage.getItem("scenic_active_discord_role") || "");
      if (saved && ROLE_PROFILES[saved]) return saved;
    } catch (_) {}
    return "ALL_ACCESS";
  }

  let activeRoleCode = getActiveRoleCode();
  const pathName = window.location.pathname.split("/").pop() || "index.html";

  function detectDefaultHeaderMode() {
    const modeOverride = (params.get("header_mode") || "").toUpperCase();
    if (modeOverride === "TRAINING" || modeOverride === "OPERATIONAL") {
      return modeOverride;
    }
    for (let i = 0; i < TRAINING_FILES.length; i++) {
      if (pathName.indexOf(TRAINING_FILES[i]) !== -1) {
        return "TRAINING";
      }
    }
    return "OPERATIONAL";
  }

  function detectCurrentPillarId() {
    for (let i = 0; i < MACRO_PILLARS.length; i++) {
      const pillar = MACRO_PILLARS[i];
      for (let j = 0; j < pillar.subsets.length; j++) {
        const sub = pillar.subsets[j];
        for (let k = 0; k < sub.matchFiles.length; k++) {
          if (pathName.indexOf(sub.matchFiles[k]) !== -1) {
            return pillar.id;
          }
        }
      }
    }
    return "beacon_lead_command";
  }

  let activeHeaderMode = detectDefaultHeaderMode();
  const currentPagePillarId = detectCurrentPillarId();
  let selectedPillarId = currentPagePillarId;

  function getVisibleNavItems() {
    const profile = ROLE_PROFILES[activeRoleCode] || ROLE_PROFILES.ALL_ACCESS;
    return NAV_ITEMS.filter(item => profile.navIds.indexOf(item.id) !== -1);
  }

  function getVisiblePillars() {
    const profile = ROLE_PROFILES[activeRoleCode] || ROLE_PROFILES.ALL_ACCESS;
    const filtered = MACRO_PILLARS.filter(p => profile.pillarIds.indexOf(p.id) !== -1);
    return filtered.length > 0 ? filtered : MACRO_PILLARS;
  }

  function getVisibleTrainingSubheadings() {
    const profile = ROLE_PROFILES[activeRoleCode] || ROLE_PROFILES.ALL_ACCESS;
    const filtered = TRAINING_SUBHEADINGS.filter(t => profile.trainingIds.indexOf(t.id) !== -1);
    return filtered.length > 0 ? filtered : TRAINING_SUBHEADINGS.slice(0, 4);
  }

  function isSubsetActive(sub) {
    const hashNow = window.location.hash || "";
    const fileMatched = sub.matchFiles.some(f => pathName.indexOf(f) !== -1);
    if (sub.matchHash && pathName.indexOf("host_property_forge.html") !== -1 && sub.matchHash === "#field-ops-contract") {
      return hashNow === "#field-ops-contract";
    }
    if (sub.excludeHash && hashNow === sub.excludeHash) {
      return false;
    }
    if (!fileMatched) return false;
    if (sub.matchHash) {
      if (hashNow === sub.matchHash) return true;
      if (!hashNow && sub.defaultWhenNoHash) return true;
      return false;
    }
    return true;
  }

  function buildTier2SubsetInnerHTML(activePillar) {
    const autoBadgeHTML = activePillar.autonomousBadge
      ? `<span class="scenic-auto-seeker-badge" title="Runs autonomously in the background every 15 minutes across East Bay ZIP rings">${activePillar.autonomousBadge}</span>`
      : "";

    const subsetPillsHTML = activePillar.subsets.map(sub => {
      const active = isSubsetActive(sub);
      return `
        <a class="scenic-nav-pill ${active ? "active-subset" : ""}"
           href="${sub.href}"
           aria-label="${sub.label}"
           ${active ? 'aria-current="page"' : ""}
           onclick="window.handleScenicSubsetClick(event, '${sub.href}')"
           title="${sub.desc}">
          ${sub.label}
        </a>
      `;
    }).join("");

    return `
      <div class="scenic-subset-group">
        <span class="scenic-subset-label">Active Pillar Subsets (${activePillar.title}):</span>
        ${autoBadgeHTML}
        ${subsetPillsHTML}
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <button type="button" class="scenic-nav-pill" aria-label="Open All Tools and Quick Switcher (Ctrl+K)" style="min-height:30px !important; padding:4px 10px !important; font-size:0.68rem !important;" onclick="window.toggleScenicCommandDrawer()" title="Open All Tools & Property Checklists (Ctrl+K)">
          All Tools (Ctrl+K)
        </button>
      </div>
    `;
  }

  function buildOperationalHeaderHTML(roleProfile, roleOptions) {
    const visiblePillars = getVisiblePillars();
    let activePillar = visiblePillars.find(p => p.id === selectedPillarId) || visiblePillars[0];

    const pillarButtonsHTML = visiblePillars.map(p => {
      const isPagePillar = p.id === currentPagePillarId && pathName !== "index.html";
      const isPreviewing = p.id === activePillar.id && !isPagePillar;
      const btnCls = isPagePillar ? "active-pillar" : (isPreviewing ? "previewing-pillar" : "");
      return `
        <button type="button"
          class="scenic-pillar-btn ${btnCls}"
          data-pillar-id="${p.id}"
          aria-label="${p.title}: ${p.caption}. Click to open ${p.defaultHref} or hover to preview subsets in Row 2"
          ${isPagePillar ? 'aria-current="page"' : ""}
          onmouseenter="window.handleScenicPillarHover('${p.id}')"
          onclick="window.handleScenicPillarClick(event, '${p.id}', '${p.defaultHref}')"
          title="Click to open ${p.title} (${p.defaultHref}) • Hover or click ▾ to preview subsets in Row 2">
          <span class="scenic-pillar-title">
            <span>${p.title}</span>
            <span class="scenic-pillar-caret" data-caret-toggle="true" title="Preview ${p.title} subsets in Row 2">&#9662;</span>
          </span>
          <span class="scenic-pillar-caption">${p.caption}</span>
        </button>
      `;
    }).join("");

    return `
      <header class="scenic-unified-header" role="banner" data-header-mode="OPERATIONAL">
        <div class="scenic-header-tier1">
          <a class="scenic-brand-cluster" href="index.html" aria-label="Scenic OS Team Launchpad Home" title="Return to Scenic OS Team Launchpad (index.html)">
            <img src="assets/brand/scenic_stay_canonical_redwood_icon.png" alt="Scenic Stay Redwood Icon">
            <div>
              <div class="scenic-brand-title">Scenic Stay: A Better BNB &amp; A Better Boutique</div>
              <div class="scenic-brand-sub">
                <span class="scenic-scout-live-dot" aria-hidden="true"></span>
                <span>Active Discord Session: ${roleProfile.tag} (Auto-Detected from Discord Invite Link)</span>
              </div>
            </div>
          </a>

          <nav class="scenic-macro-pillars" aria-label="Scenic OS Overarching Macro Pillars (Row 1)">
            ${pillarButtonsHTML}
          </nav>

          <div class="scenic-global-utility">
            <a class="scenic-nav-pill scenic-launchpad-pill" href="index.html" aria-label="Open Team Launchpad" title="Open Scenic OS Team Launchpad">
              🏠 Launchpad
            </a>
            <select class="scenic-role-select" aria-label="Switch View Scope" title="Switch View Scope (Admin Role Preview)" onchange="window.setScenicDiscordRole(this.value)" style="background:#2e123d; color:#ffbe3b; border:1.5px solid #ffbe3b; border-radius:999px; padding:6px 11px; font-size:0.73rem; font-weight:800; cursor:pointer; min-height:36px;">
              ${roleOptions}
            </select>
            <button type="button" class="scenic-nav-pill scenic-nav-Launcher-btn" aria-label="Submit or Review L1, L2, L3 Feedback and Tickets" onclick="window.toggleScenicTicketModal(true)" title="Submit or Review L1/L2/L3 Feedback & Tickets">
              + Feedback / Tickets
            </button>
            <a class="scenic-nav-pill scenic-training-pill" href="scenic_os_system_blueprint.html" aria-label="Open Independent Training and SOP Hub" title="Switch to Independent Training & SOP Curriculum Header">
              🎓 Training &amp; SOP Hub &#8599;
            </a>
          </div>
        </div>

        <div class="scenic-header-tier2" id="scenic-tier2-bar" role="navigation" aria-label="Active Pillar Interactive Subsets (Row 2)">
          ${buildTier2SubsetInnerHTML(activePillar)}
        </div>
      </header>
    `;
  }

  function buildTrainingHeaderHTML(roleProfile, roleOptions) {
    const visibleTraining = getVisibleTrainingSubheadings();
    const trainingPillsHTML = visibleTraining.map(item => {
      const isCurrent = item.matchFiles.some(f => pathName.indexOf(f) !== -1);
      return `
        <a class="scenic-nav-pill ${isCurrent ? "active-subset" : ""}"
           href="${item.href}"
           aria-label="${item.label}"
           ${isCurrent ? 'aria-current="page"' : ""}
           title="${item.desc}">
          ${item.label}
        </a>
      `;
    }).join("");

    return `
      <header class="scenic-unified-header" role="banner" data-header-mode="TRAINING">
        <div class="scenic-header-tier1 training-mode-tier1">
          <a class="scenic-brand-cluster" href="index.html" aria-label="Scenic OS Team Launchpad Home" title="Return to Scenic OS Team Launchpad">
            <img src="assets/brand/scenic_stay_canonical_redwood_icon.png" alt="Scenic Stay Redwood Icon">
            <div>
              <div class="scenic-brand-title">🎓 Scenic Academy &amp; Training Curriculum</div>
              <div class="scenic-brand-sub" style="color:#38bdf8 !important;">
                <span class="scenic-scout-live-dot" style="background:#38bdf8 !important; box-shadow:0 0 8px #38bdf8 !important;" aria-hidden="true"></span>
                <span>Active Discord Session: ${roleProfile.tag} (Auto-Detected from Discord Invite Link)</span>
              </div>
            </div>
          </a>

          <div class="scenic-global-utility">
            <a class="scenic-nav-pill scenic-launchpad-pill" href="index.html" aria-label="Open Team Launchpad" title="Open Scenic OS Team Launchpad">
              🏠 Launchpad
            </a>
            <select class="scenic-role-select" aria-label="Switch View Scope" title="Switch View Scope (Admin Role Preview)" onchange="window.setScenicDiscordRole(this.value)" style="background:#0f172a; color:#38bdf8; border:1.5px solid #38bdf8; border-radius:999px; padding:6px 11px; font-size:0.73rem; font-weight:800; cursor:pointer; min-height:36px;">
              ${roleOptions}
            </select>
            <button type="button" class="scenic-nav-pill scenic-nav-Launcher-btn" aria-label="Submit or Review L1, L2, L3 Feedback and Tickets" onclick="window.toggleScenicTicketModal(true)" title="Submit or Review L1/L2/L3 Feedback & Tickets">
              + Feedback / Tickets
            </button>
            <a class="scenic-nav-pill scenic-workspace-launch-pill" href="beacon_lead_command.html" aria-label="Exit Training Hub and Launch Operational Scenic OS Workspace" title="Exit Training Hub and Launch Daily Operational Scenic OS Workspace">
              🚀 Launch Scenic OS Live Workspace &#8599;
            </a>
          </div>
        </div>

        <div class="scenic-header-tier2 training-mode-tier2" role="navigation" aria-label="Scenic Academy Dedicated Training Subheadings">
          <div class="scenic-subset-group">
            <span class="scenic-subset-label" style="color:#38bdf8 !important;">Training Modules (${roleProfile.tag}) &#9656;</span>
            ${trainingPillsHTML}
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <button type="button" class="scenic-nav-pill" aria-label="Preview 4-Pillar Operational OS Header Bar" style="min-height:30px !important; padding:4px 10px !important; font-size:0.68rem !important;" onclick="window.setScenicHeaderMode('OPERATIONAL')" title="Preview Operational 4-Pillar Header on this page">
              Preview 4-Pillar OS Bar
            </button>
          </div>
        </div>
      </header>
    `;
  }

  function buildHeaderHTML() {
    if (isExternalOwnerMode) {
      return `
        <header class="scenic-unified-header" role="banner">
          <div class="scenic-header-tier1">
            <div class="scenic-brand-cluster">
              <img src="assets/brand/scenic_stay_canonical_redwood_icon.png" alt="Scenic Stay Redwood Icon">
              <div>
                <div class="scenic-brand-title">Scenic Stay: A Better BNB &amp; A Better Boutique</div>
                <div class="scenic-brand-sub">Partner Homeowner Portal (Locked Property View)</div>
              </div>
            </div>
          </div>
        </header>
      `;
    }

    const roleProfile = ROLE_PROFILES[activeRoleCode] || ROLE_PROFILES.ALL_ACCESS;
    const roleOptions = Object.keys(ROLE_PROFILES).map(code => {
      const rp = ROLE_PROFILES[code];
      return `<option value="${code}" ${code === activeRoleCode ? "selected" : ""}>Switch View Scope: ${rp.tag}</option>`;
    }).join("");

    if (activeHeaderMode === "TRAINING") {
      return buildTrainingHeaderHTML(roleProfile, roleOptions);
    }
    return buildOperationalHeaderHTML(roleProfile, roleOptions);
  }

  function buildFooterHTML() {
    if (isExternalOwnerMode) {
      return `
        <footer class="scenic-unified-footer" role="contentinfo">
          <div class="scenic-footer-bottom" style="margin-top:0; border-top:none; padding-top:0;">
            <span>Scenic Stay: A Better BNB &amp; A Better Boutique (abetterbnb.com)</span>
            <span>Always Put Adding Value in Front &bull; Answer the Question Beyond the Question</span>
          </div>
        </footer>
      `;
    }

    const roleProfile = ROLE_PROFILES[activeRoleCode] || ROLE_PROFILES.ALL_ACCESS;
    const visibleItems = getVisibleNavItems();

    return `
      <footer class="scenic-unified-footer" role="contentinfo">
        <div class="scenic-footer-inner">
          <div class="scenic-footer-col">
            <h4>Scenic Stay Operating System</h4>
            <p style="font-size:0.82rem; color:#d6d3d1; line-height:1.6; margin-bottom:10px;">
              Always put adding value in front. Answer the question beyond the question before it is asked. Active Discord Session: <strong style="color:#ffbe3b;">${roleProfile.tag}</strong>.
            </p>
            <div style="font-size:0.76rem; color:#86efac; font-weight:700;">
              &bull; Beacon Scout Autonomous Seeker: 15m East Bay ZIP Cadence + Atlas Live
            </div>
          </div>

          <div class="scenic-footer-col">
            <h4>4 Operational Parent Pillars</h4>
            <ul class="scenic-footer-links">
              <li><a class="scenic-footer-link" href="index.html">0. Team Launchpad &amp; Role Portal</a></li>
              <li><a class="scenic-footer-link" href="beacon_atlas_explorer.html">1. Beacon Scout &rarr; Atlas Explorer</a></li>
              <li><a class="scenic-footer-link" href="beacon_lead_command.html">2. Beacon Lead Command &rarr; Lead Command &amp; Contracts</a></li>
              <li><a class="scenic-footer-link" href="host_property_forge.html">3. HOSt &rarr; Forge, Pricing, preSeTR &amp; reSeTR</a></li>
              <li><a class="scenic-footer-link" href="scenic_ledger_bookkeeper.html">4. balanSeTR &rarr; Ledger, Statements &amp; Tax</a></li>
            </ul>
          </div>

          <div class="scenic-footer-col">
            <h4>Independent Training &amp; SOP Hub</h4>
            <ul class="scenic-footer-links">
              <li><a class="scenic-footer-link" href="scenic_os_system_blueprint.html">01 Universal System Overview &amp; Architecture</a></li>
              <li><a class="scenic-footer-link" href="scenic_academy_journey.html">02 Interactive Voice Academy (Episodes 1-6)</a></li>
              <li><a class="scenic-footer-link" href="operations_onboarding_deck.html">03 Inside Operations Deck (Watch First)</a></li>
              <li><a class="scenic-footer-link" href="scenic_company_sop_manual.html">04 Company SOP &amp; Shadow Workbook</a></li>
            </ul>
          </div>

          <div class="scenic-footer-col">
            <h4>East Bay Ring 1 reSeTR Checklists</h4>
            <ul class="scenic-footer-links">
              <li><a class="scenic-footer-link" href="resetr_turnover_app.html?unit=scenic-north&view=checklist">resetr.abetterbnb.com/scenic-north</a></li>
              <li><a class="scenic-footer-link" href="resetr_turnover_app.html?unit=scenic-south&view=checklist">resetr.abetterbnb.com/scenic-south</a></li>
              <li><a class="scenic-footer-link" href="resetr_turnover_app.html?unit=acton&view=checklist">resetr.abetterbnb.com/acton</a></li>
              <li><a class="scenic-footer-link" href="resetr_turnover_app.html?unit=32ndstreet&view=checklist">resetr.abetterbnb.com/32ndstreet</a></li>
              <li><a class="scenic-footer-link" href="resetr_turnover_app.html?unit=estates&view=checklist">resetr.abetterbnb.com/estates</a></li>
              <li><a class="scenic-footer-link" href="resetr_turnover_app.html?unit=avis&view=checklist">resetr.abetterbnb.com/avis</a></li>
              <li><a class="scenic-footer-link" href="resetr_turnover_app.html?unit=walsh&view=checklist">resetr.abetterbnb.com/walsh</a></li>
            </ul>
          </div>
        </div>

        <div class="scenic-footer-bottom">
          <span>Scenic Stay: A Better BNB &amp; A Better Boutique &bull; 2-Tier Macro Pillar &amp; Role-Scoped Operating System</span>
          <span>Press <strong>Ctrl+K</strong> for Quick Switcher &bull; Click <strong>+ Feedback / Tickets</strong> to submit L1/L2/L3 issues with AI-proposed solutions</span>
        </div>
      </footer>

      <div id="scenic-command-drawer" role="dialog" aria-modal="true" aria-label="Scenic OS All Tools and Units Launcher">
        <div class="scenic-drawer-panel">
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.14); padding-bottom:14px;">
            <div>
              <div style="color:#ffbe3b; font-size:0.75rem; font-weight:800; text-transform:uppercase; letter-spacing:0.07em;">Scenic OS Quick Switcher (Ctrl+K) &bull; Active Role: ${roleProfile.tag}</div>
              <h3 style="font-size:1.3rem; font-weight:800; color:#ffffff; margin-top:2px;">Jump to Any Parent Pillar, Child Subset, or Training Module</h3>
            </div>
            <button type="button" class="scenic-nav-pill scenic-drawer-close" onclick="window.toggleScenicCommandDrawer(false)">Close (Esc)</button>
          </div>
          <div class="scenic-drawer-grid">
            ${visibleItems.map(item => `
              <a class="scenic-drawer-item" href="${item.href}">
                <span style="color:#ffbe3b; font-size:0.72rem; font-weight:800; text-transform:uppercase;">${item.stage}</span>
                <strong style="font-size:0.98rem; color:#ffffff;">${item.label}</strong>
                <span style="font-size:0.8rem; color:#d6d3d1;">${item.desc}</span>
              </a>
            `).join("")}
          </div>
        </div>
      </div>

      <div id="scenic-ticket-modal" role="dialog" aria-modal="true" aria-label="Scenic OS 3-Level Feedback and Ticket Triage" style="position:fixed; inset:0; background:rgba(24,8,32,0.76); backdrop-filter:blur(4px); z-index:9999; display:none; align-items:center; justify-content:center; padding:20px; font-family:'Plus Jakarta Sans',sans-serif;">
        <div class="scenic-drawer-panel" style="max-width:780px;">
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.14); padding-bottom:14px;">
            <div>
              <div style="color:#ffbe3b; font-size:0.75rem; font-weight:800; text-transform:uppercase; letter-spacing:0.07em;">3-Level AI Feedback &amp; Ticket Triage</div>
              <h3 style="font-size:1.25rem; font-weight:800; color:#ffffff; margin-top:2px;">Submit Feedback or Operational Ticket (Auto-Parsed With Solution)</h3>
            </div>
            <button type="button" class="scenic-nav-pill scenic-drawer-close" onclick="window.toggleScenicTicketModal(false)">Close (Esc)</button>
          </div>
          <div style="margin-top:16px; display:flex; flex-direction:column; gap:12px;">
            <p style="font-size:0.84rem; color:#d6d3d1;">
              Every ticket is automatically classified into <strong>Level 1 (Immediate Auto-Fix)</strong>, <strong>Level 2 (@Operations &amp; Admin Lead for Ops / @Accounting &amp; Finance Lead for Finance)</strong>, or <strong>Level 3 (@All-Access Executive &amp; Operations Sign-Off)</strong> and paired with a concrete proposed solution ready for sign-off.
            </p>
            <textarea id="scenic-global-ticket-input" rows="3" aria-label="Describe what needs fixing, updating, or escalating" placeholder="Describe what needs fixing, updating, or escalating (e.g., 'Need bathroom supplies restocked at 1023 32nd St', 'Reconcile hardware receipt on 5540 Estates statement', or 'Owner asking for custom 18% fee tier')..." style="width:100%; border-radius:12px; padding:12px; font-family:inherit; font-size:0.88rem; border:1px solid rgba(255,190,59,0.5); background:#250e30; color:#ffffff;"></textarea>
            <div style="display:flex; justify-content:flex-end; gap:10px;">
              <button type="button" class="scenic-nav-pill" style="background:#ffbe3b !important; color:#180820 !important; font-weight:800 !important;" onclick="window.parseScenicGlobalTicket()">
                Parse Ticket &amp; Propose Solution &rarr;
              </button>
            </div>
            <div id="scenic-global-ticket-result" style="display:none; background:rgba(255,255,255,0.07); border:1.5px solid #ffbe3b; border-radius:14px; padding:16px; margin-top:4px;">
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /* Update Row 2 subsets dynamically on hover or caret toggle without losing focus */
  window.handleScenicPillarHover = function (pillarId) {
    if (selectedPillarId === pillarId) return;
    selectedPillarId = pillarId;
    const visiblePillars = getVisiblePillars();
    const targetPillar = visiblePillars.find(p => p.id === pillarId);
    if (!targetPillar) return;

    const tier2Bar = document.getElementById("scenic-tier2-bar");
    if (tier2Bar) {
      tier2Bar.innerHTML = buildTier2SubsetInnerHTML(targetPillar);
    }

    document.querySelectorAll(".scenic-pillar-btn[data-pillar-id]").forEach(btn => {
      const pid = btn.getAttribute("data-pillar-id");
      const isPagePillar = pid === currentPagePillarId && pathName !== "index.html";
      btn.classList.toggle("active-pillar", isPagePillar);
      btn.classList.toggle("previewing-pillar", pid === pillarId && !isPagePillar);
    });
  };

  /* Clicking a Parent Pillar in Row 1 navigates directly to its primary workspace (unless clicking the ▾ caret toggle) */
  window.handleScenicPillarClick = function (ev, pillarId, defaultHref) {
    if (ev && ev.target && ev.target.closest("[data-caret-toggle]")) {
      ev.preventDefault();
      ev.stopPropagation();
      window.handleScenicPillarHover(pillarId);
      return;
    }
    selectedPillarId = pillarId;
    if (defaultHref && pathName.indexOf(defaultHref) === -1) {
      window.location.href = defaultHref;
      return;
    }
    window.handleScenicPillarHover(pillarId);
  };

  window.handleScenicSubsetClick = function (ev, href) {
    if (!href || href.indexOf("#") === -1) return;
    const parts = href.split("#");
    const targetFile = parts[0];
    const targetHash = "#" + parts[1];
    if (pathName.indexOf(targetFile) !== -1) {
      ev.preventDefault();
      window.location.hash = targetHash;
      const el = document.querySelector(targetHash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (typeof window.onScenicSubsetHashChanged === "function") {
        window.onScenicSubsetHashChanged(targetHash);
      }
      mountUnifiedShell();
    }
  };

  window.setScenicHeaderMode = function (mode) {
    if (mode !== "OPERATIONAL" && mode !== "TRAINING") return;
    activeHeaderMode = mode;
    mountUnifiedShell();
  };

  window.setScenicDiscordRole = function (roleCode) {
    const resolved = resolveRoleCode(roleCode);
    if (!ROLE_PROFILES[resolved]) return;
    activeRoleCode = resolved;
    try { localStorage.setItem("scenic_active_discord_role", resolved); } catch (_) {}
    const visiblePillars = getVisiblePillars();
    if (!visiblePillars.some(p => p.id === selectedPillarId)) {
      selectedPillarId = visiblePillars[0].id;
    }
    mountUnifiedShell();
    if (typeof window.onScenicRoleChanged === "function") {
      window.onScenicRoleChanged(resolved);
    }
  };

  window.toggleScenicCommandDrawer = function (forceState) {
    const drawer = document.getElementById("scenic-command-drawer");
    if (!drawer) return;
    const shouldOpen = typeof forceState === "boolean" ? forceState : !drawer.classList.contains("open");
    drawer.classList.toggle("open", shouldOpen);
  };

  window.toggleScenicTicketModal = function (forceState) {
    const modal = document.getElementById("scenic-ticket-modal");
    if (!modal) return;
    const isNowOpen = typeof forceState === "boolean" ? forceState : modal.style.display !== "flex";
    modal.style.display = isNowOpen ? "flex" : "none";
  };

  window.parseScenicGlobalTicket = function () {
    const inputEl = document.getElementById("scenic-global-ticket-input");
    const resultEl = document.getElementById("scenic-global-ticket-result");
    if (!inputEl || !resultEl) return;
    const text = (inputEl.value || "").trim();
    if (!text) return;
    const lower = text.toLowerCase();

    let level = "LEVEL 1: IMMEDIATE AUTO-FIX";
    let badgeColor = "#16a34a";
    let assignee = "Immediate System / Template Fix (Ready for 1-Click Sign-Off)";
    let solution = "Apply the requested copy, checklist, or guide update directly to ScenicCloudSync and propagate to HOSt Forge and reSeTR.";

    if (lower.match(/contract|commission|fee tier|cancel|legal|ordinance|permit|major repair|water heater|roof|override price|new market/)) {
      level = "LEVEL 3: EXECUTIVE SIGN-OFF (@ALL-ACCESS EXECUTIVE & OPERATIONS)";
      badgeColor = "#dc2626";
      assignee = "@All-Access Executive & Operations (Executive Sign-Off Required)";
      solution = "Hold automated execution; prepare side-by-side unit economics or repair quote with transparent +20% out-of-scope coordination calculation for Executive 1-click sign-off.";
    } else if (lower.match(/invoice|statement|reconcile|payout|balansetr|ledger|tax|receipt|expense/)) {
      level = "LEVEL 2: FINANCE LEAD (@ACCOUNTING & FINANCE)";
      badgeColor = "#2563eb";
      assignee = "@Accounting & Finance Lead";
      solution = "Match transaction in balanSeTR Tab 1 against the property's approved turnover or repair log, verify integer-cent conservation, and attach to the monthly owner statement.";
    } else if (lower.match(/cleaner|turnover|presetr|resetr|early check|late check|supplies|linen|handyman|guest|parking pass/)) {
      level = "LEVEL 2: OPERATIONS LEAD (@OPERATIONS & ADMIN)";
      badgeColor = "#d97706";
      assignee = "@Operations & Admin Lead";
      solution = "Update the unit's preSeTR / reSeTR schedule or draft a crisp 3-tier guest reply following the Company SOP, then click Sign Off to dispatch.";
    }

    resultEl.style.display = "block";
    resultEl.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:8px;">
        <span style="background:${badgeColor}; color:#ffffff; font-size:0.72rem; font-weight:800; padding:4px 10px; border-radius:999px;">${level}</span>
        <span style="font-size:0.78rem; color:#ffbe3b; font-weight:700;">Assigned To: ${assignee}</span>
      </div>
      <div style="font-size:0.85rem; color:#ffffff; margin-bottom:6px;"><strong>Parsed Issue:</strong> ${text}</div>
      <div style="font-size:0.85rem; color:#86efac; margin-bottom:12px;"><strong>Proposed Solution:</strong> ${solution}</div>
      <div style="display:flex; gap:10px; flex-wrap:wrap;">
        <button type="button" class="scenic-nav-pill" style="background:#22c55e !important; color:#052e16 !important; font-weight:800 !important;" onclick="this.textContent='Signed Off & Queued!';">
          &#10003; Sign Off &amp; Execute Proposed Solution
        </button>
        <button type="button" class="scenic-nav-pill" onclick="this.textContent='Flagged for Custom Collaboration in Discord';">
          &#9998; Work Through a New / Custom Solution
        </button>
      </div>
    `;
  };

  function scrubLegacyCrossAppNavs() {
    const legacyNavBar = document.getElementById("scenic-os-nav-bar");
    if (legacyNavBar) {
      legacyNavBar.classList.add("scenic-legacy-crossnav-hidden");
    }
    document.querySelectorAll("header:not(.scenic-unified-header) a[href]").forEach(link => {
      const href = (link.getAttribute("href") || "").trim();
      if (
        href === "scenic_ledger_bookkeeper.html" ||
        href === "scenic_academy_journey.html" ||
        href === "beacon_lead_command.html" ||
        href === "owner_agreement_generator.html" ||
        href === "host_property_forge.html"
      ) {
        link.classList.add("scenic-legacy-crossnav-hidden");
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      window.toggleScenicCommandDrawer();
    } else if (e.key === "Escape") {
      window.toggleScenicCommandDrawer(false);
      window.toggleScenicTicketModal(false);
    }
  });

  window.addEventListener("hashchange", function () {
    mountUnifiedShell();
  });

  function mountUnifiedShell() {
    const existingTopBar = document.querySelector("header.top-bar, header.scenic-unified-header");
    const wrapper = document.createElement("div");
    wrapper.innerHTML = buildHeaderHTML().trim();
    const newHeader = wrapper.firstElementChild;

    if (existingTopBar && existingTopBar.parentNode) {
      existingTopBar.parentNode.replaceChild(newHeader, existingTopBar);
    } else if (document.body.firstChild) {
      document.body.insertBefore(newHeader, document.body.firstChild);
    } else {
      document.body.appendChild(newHeader);
    }

    scrubLegacyCrossAppNavs();

    const existingFooter = document.querySelector("footer.scenic-unified-footer");
    if (existingFooter && existingFooter.parentNode) {
      existingFooter.parentNode.removeChild(existingFooter);
    }
    const existingDrawer = document.getElementById("scenic-command-drawer");
    if (existingDrawer && existingDrawer.parentNode) {
      existingDrawer.parentNode.removeChild(existingDrawer);
    }
    const existingTicketModal = document.getElementById("scenic-ticket-modal");
    if (existingTicketModal && existingTicketModal.parentNode) {
      existingTicketModal.parentNode.removeChild(existingTicketModal);
    }

    const footerWrap = document.createElement("div");
    footerWrap.innerHTML = buildFooterHTML().trim();
    while (footerWrap.firstElementChild) {
      document.body.appendChild(footerWrap.firstElementChild);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountUnifiedShell);
  } else {
    mountUnifiedShell();
  }
})();
