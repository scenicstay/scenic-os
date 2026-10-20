import os

BRAND_DIR = r"c:\Users\Justin\Documents\scenic stay\assets\brand"

suite_html = '''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Enterprise Application Icon Suite  -  Scenic Stay &amp; A Better BNB</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800;900&family=Libre+Baskerville:wght@400;700&family=JetBrains+Mono:wght@600;700&display=swap');
    body {
      font-family: 'Montserrat', sans-serif;
      background-color: #070d17;
      color: #e2e8f0;
    }
    .serif { font-family: 'Libre Baskerville', Georgia, serif; }
    .mono { font-family: 'JetBrains Mono', monospace; }
    .card-glass {
      background: #00162F;
      border: 1px solid #1e2d42;
    }
    .card-cream {
      background: #FBF6EF;
      border: 1px solid #e5dccf;
      color: #00162F;
    }
    .icon-hero {
      width: 120px;
      height: 120px;
      flex-shrink: 0;
      filter: drop-shadow(0 16px 32px rgba(0, 0, 0, 0.7));
    }
    .icon-dock {
      width: 64px;
      height: 64px;
      flex-shrink: 0;
      filter: drop-shadow(0 8px 18px rgba(0, 0, 0, 0.5));
    }
    .icon-fav {
      width: 32px;
      height: 32px;
      flex-shrink: 0;
    }
  </style>
</head>
<body class="p-6 md:p-12 min-h-screen">

  <div class="max-w-6xl mx-auto space-y-12">

    <!-- Header -->
    <div class="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            Production Asset Suite v3.0
          </span>
          <span class="text-xs text-slate-500 font-mono">Full-Presence Redwood &bull; Equalized 900 Font Weights</span>
        </div>
        <h1 class="text-3xl font-bold text-white tracking-tight serif">Enterprise Application Icon Suite</h1>
        <p class="text-sm text-slate-400 mt-1">Full 75-80% authentic Redwood presence across all icons &bull; Beacon downward broadcast ripples &bull; Strict typography parity.</p>
      </div>

      <div class="flex items-center gap-3 text-xs font-mono text-slate-300">
        <a href="#dock-preview" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-500/60 transition">
          <i class="fa-solid fa-layer-group text-amber-400 mr-1.5"></i> Dock &amp; Favicon Preview
        </a>
      </div>
    </div>

    <!-- Section 1: Hero Application Icons (120px Master Display) -->
    <div>
      <div class="mb-4">
        <h2 class="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <i class="fa-solid fa-shapes text-amber-500"></i> Core Software Applications
        </h2>
        <p class="text-xs text-slate-400 mt-0.5">Every icon features the authentic Golden Redwood scaled to full presence with zero dead space, framed by its domain-specific functional metaphor.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <!-- 1. HOSt -->
        <div class="card-glass p-6 rounded-2xl flex items-center gap-6 border-l-4 border-l-[#B06B17]">
          <div class="icon-hero">
            <img src="host-app-icon.svg" alt="HOSt" class="w-full h-full object-contain">
          </div>
          <div class="space-y-1.5">
            <div class="flex items-center gap-2.5">
              <h3 class="text-3xl font-black text-white tracking-tight">HOSt</h3>
              <span class="px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">Listing Engine</span>
            </div>
            <p class="text-sm font-semibold text-slate-200">Property Forge &amp; Blueprint Engine</p>
            <p class="text-xs text-slate-400 leading-relaxed">Architectural blueprint drafting grid and stately keystone vault arch closely framing the tall Redwood. All characters in uniform heavyweight bold.</p>
            <div class="pt-2 flex items-center gap-4 text-xs font-mono">
              <a href="host-app-icon.svg" download class="text-amber-400 hover:underline"><i class="fa-solid fa-download"></i> SVG</a>
              <span class="text-slate-600">&bull;</span>
              <a href="../../host_property_forge.html" class="text-slate-400 hover:text-white transition"><i class="fa-solid fa-arrow-up-right-from-square"></i> Open Forge</a>
            </div>
          </div>
        </div>

        <!-- 2. Beacon -->
        <div class="card-glass p-6 rounded-2xl flex items-center gap-6 border-l-4 border-l-[#B06B17]">
          <div class="icon-hero">
            <img src="beacon-app-icon.svg" alt="Beacon" class="w-full h-full object-contain">
          </div>
          <div class="space-y-1.5">
            <div class="flex items-center gap-2.5">
              <h3 class="text-3xl font-black text-white tracking-tight">Beacon</h3>
              <span class="px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">Owner CRM</span>
            </div>
            <p class="text-sm font-semibold text-slate-200">Multi-Channel Owner Cadence Engine</p>
            <p class="text-xs text-slate-400 leading-relaxed">Majestic Redwood with three slender, elegant broadcast ripples curving downward from the base of the trunk. Zero chunky lines, zero clunky domes.</p>
            <div class="pt-2 flex items-center gap-4 text-xs font-mono">
              <a href="beacon-app-icon.svg" download class="text-amber-400 hover:underline"><i class="fa-solid fa-download"></i> SVG</a>
              <span class="text-slate-600">&bull;</span>
              <span class="text-slate-400">WhatsApp &bull; Phone &bull; Email</span>
            </div>
          </div>
        </div>

        <!-- 3. LeadGraph -->
        <div class="card-glass p-6 rounded-2xl flex items-center gap-6 border-l-4 border-l-[#38bdf8]">
          <div class="icon-hero">
            <img src="leadgraph-app-icon.svg" alt="LeadGraph" class="w-full h-full object-contain">
          </div>
          <div class="space-y-1.5">
            <div class="flex items-center gap-2.5">
              <h3 class="text-3xl font-black text-white tracking-tight">LeadGraph</h3>
              <span class="px-2.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-bold uppercase">Discovery Engine</span>
            </div>
            <p class="text-sm font-semibold text-slate-200">Zoning Atlas &amp; Owner Intelligence</p>
            <p class="text-xs text-slate-400 leading-relaxed">Precision intelligence network connecting the outer foliage tiers of the Redwood to glowing cyber data vertices.</p>
            <div class="pt-2 flex items-center gap-4 text-xs font-mono">
              <a href="leadgraph-app-icon.svg" download class="text-sky-400 hover:underline"><i class="fa-solid fa-download"></i> SVG</a>
              <span class="text-slate-600">&bull;</span>
              <span class="text-slate-400">125 Qualified Boutique Leads</span>
            </div>
          </div>
        </div>

        <!-- 4. reSeTR -->
        <div class="card-glass p-6 rounded-2xl flex items-center gap-6 border-l-4 border-l-[#10b981]">
          <div class="icon-hero">
            <img src="resetr-app-icon.svg" alt="reSeTR" class="w-full h-full object-contain">
          </div>
          <div class="space-y-1.5">
            <div class="flex items-center gap-2.5">
              <h3 class="text-3xl font-black tracking-tight"><span class="text-amber-400">re</span><span class="text-white">SeTR</span></h3>
              <span class="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase">Turnover QA</span>
            </div>
            <p class="text-sm font-semibold text-slate-200">Dual-Phase Turnover Chronograph</p>
            <p class="text-xs text-slate-400 leading-relaxed">Top Gold arc: preSeTR calendar lock. Bottom Emerald arc: reSeTR field turnover inspection, photo QA, and Ramp ACH release.</p>
            <div class="pt-2 flex items-center gap-4 text-xs font-mono">
              <a href="resetr-app-icon.svg" download class="text-emerald-400 hover:underline"><i class="fa-solid fa-download"></i> SVG</a>
              <span class="text-slate-600">&bull;</span>
              <a href="../../host_dispatch_resetr.html" class="text-slate-400 hover:text-white transition"><i class="fa-solid fa-arrow-up-right-from-square"></i> Open Dispatch</a>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Section 2: Typography Parity & Logotype Showcase -->
    <div class="card-glass p-8 rounded-2xl space-y-6">
      <div class="border-b border-slate-800 pb-4">
        <h2 class="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <i class="fa-solid fa-font text-amber-400"></i> Typography &amp; Font-Weight Parity
        </h2>
        <p class="text-xs text-slate-400 mt-1">
          Rule: In branded logotypes, lowercase characters are an intentional design mark, not visual demotion. Every single letter shares the exact same heavyweight bold font (<code class="text-amber-400">font-black 900</code>).
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- HOSt Comparison -->
        <div class="bg-slate-950/60 p-6 rounded-xl border border-slate-800/80 space-y-4">
          <div class="text-xs font-mono uppercase tracking-wider text-slate-400">HOSt Logotype Parity</div>
          <div class="space-y-3">
            <div class="p-4 rounded-lg bg-[#00162F] border border-slate-700/60 flex items-center justify-between">
              <div>
                <span class="text-xs text-slate-500 block mb-1">Standard White (Uniform 900 Bold)</span>
                <span class="text-4xl font-black tracking-tight text-white">HOSt</span>
              </div>
              <span class="px-2 py-1 rounded bg-emerald-950/60 border border-emerald-700/60 text-emerald-300 text-[10px] font-mono">CANON</span>
            </div>
            <div class="p-4 rounded-lg bg-[#00162F] border border-slate-700/60 flex items-center justify-between">
              <div>
                <span class="text-xs text-slate-500 block mb-1">Scenic Gold Accent (Uniform 900 Bold)</span>
                <span class="text-4xl font-black tracking-tight text-white">HOS<span class="text-amber-500">t</span></span>
              </div>
              <span class="px-2 py-1 rounded bg-slate-800 text-slate-400 text-[10px] font-mono">ACCENT</span>
            </div>
          </div>
        </div>

        <!-- reSeTR Comparison -->
        <div class="bg-slate-950/60 p-6 rounded-xl border border-slate-800/80 space-y-4">
          <div class="text-xs font-mono uppercase tracking-wider text-slate-400">reSeTR Two-Tone Treatment Options</div>
          <div class="space-y-3">
            <div class="p-4 rounded-lg bg-[#00162F] border border-slate-700/60 flex items-center justify-between">
              <div>
                <span class="text-xs text-slate-500 block mb-1">Option A: Gold / White Two-Tone (Uniform 900 Bold)</span>
                <span class="text-4xl font-black tracking-tight"><span class="text-amber-500">re</span><span class="text-white">SeTR</span></span>
              </div>
              <span class="px-2 py-1 rounded bg-emerald-950/60 border border-emerald-700/60 text-emerald-300 text-[10px] font-mono">RECOMMENDED</span>
            </div>
            <div class="p-4 rounded-lg bg-[#00162F] border border-slate-700/60 flex items-center justify-between">
              <div>
                <span class="text-xs text-slate-500 block mb-1">Option B: Emerald / White Two-Tone (Uniform 900 Bold)</span>
                <span class="text-4xl font-black tracking-tight"><span class="text-emerald-400">re</span><span class="text-white">SeTR</span></span>
              </div>
              <span class="px-2 py-1 rounded bg-slate-800 text-slate-400 text-[10px] font-mono">OPERATIONS</span>
            </div>
            <div class="p-4 rounded-lg bg-[#00162F] border border-slate-700/60 flex items-center justify-between">
              <div>
                <span class="text-xs text-slate-500 block mb-1">Option C: Solid Architectural White (Uniform 900 Bold)</span>
                <span class="text-4xl font-black tracking-tight text-white">reSeTR</span>
              </div>
              <span class="px-2 py-1 rounded bg-slate-800 text-slate-400 text-[10px] font-mono">MINIMAL</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 3: macOS Dock & Browser Scale Verification -->
    <div id="dock-preview" class="card-glass p-8 rounded-2xl space-y-6">
      <div class="border-b border-slate-800 pb-4 flex items-center justify-between">
        <div>
          <h2 class="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <i class="fa-solid fa-desktop text-amber-500"></i> macOS Dock (64px) &amp; Browser Favicon (32px)
          </h2>
          <p class="text-xs text-slate-400 mt-0.5">Testing legibility and recognition at real operating system scales.</p>
        </div>
      </div>

      <!-- Simulated macOS Dock Shelf -->
      <div class="bg-slate-950/80 p-6 rounded-2xl border border-slate-800/80 flex flex-col items-center">
        <div class="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-4">64px Dock Shelf Simulation</div>
        <div class="bg-white/5 backdrop-blur-xl border border-white/15 px-6 py-3 rounded-2xl flex items-center gap-8 shadow-2xl">
          <!-- HOSt Dock -->
          <div class="flex flex-col items-center gap-1.5 group cursor-pointer">
            <div class="icon-dock transition transform group-hover:-translate-y-2 duration-200">
              <img src="host-app-icon.svg" alt="HOSt" class="w-full h-full object-contain">
            </div>
            <span class="text-[11px] font-black text-white block">HOSt</span>
          </div>
          <!-- Beacon Dock -->
          <div class="flex flex-col items-center gap-1.5 group cursor-pointer">
            <div class="icon-dock transition transform group-hover:-translate-y-2 duration-200">
              <img src="beacon-app-icon.svg" alt="Beacon" class="w-full h-full object-contain">
            </div>
            <span class="text-[11px] font-black text-white block">Beacon</span>
          </div>
          <!-- LeadGraph Dock -->
          <div class="flex flex-col items-center gap-1.5 group cursor-pointer">
            <div class="icon-dock transition transform group-hover:-translate-y-2 duration-200">
              <img src="leadgraph-app-icon.svg" alt="LeadGraph" class="w-full h-full object-contain">
            </div>
            <span class="text-[11px] font-black text-white block">LeadGraph</span>
          </div>
          <!-- reSeTR Dock -->
          <div class="flex flex-col items-center gap-1.5 group cursor-pointer">
            <div class="icon-dock transition transform group-hover:-translate-y-2 duration-200">
              <img src="resetr-app-icon.svg" alt="reSeTR" class="w-full h-full object-contain">
            </div>
            <span class="text-[11px] font-black text-white block"><span class="text-amber-400">re</span>SeTR</span>
          </div>
        </div>
      </div>

      <!-- 32px Favicon Row -->
      <div class="bg-slate-950/60 p-6 rounded-2xl border border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div class="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">32px Browser Tab / Favicon Scale</div>
          <p class="text-xs text-slate-400">Icons remain instantly recognizable even at micro favicon scale.</p>
        </div>
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-2 bg-[#00162F] px-3 py-1.5 rounded-lg border border-slate-700">
            <div class="icon-fav"><img src="host-app-icon.svg" alt="HOSt" class="w-full h-full object-contain"></div>
            <span class="text-xs font-black text-white">HOSt</span>
          </div>
          <div class="flex items-center gap-2 bg-[#00162F] px-3 py-1.5 rounded-lg border border-slate-700">
            <div class="icon-fav"><img src="beacon-app-icon.svg" alt="Beacon" class="w-full h-full object-contain"></div>
            <span class="text-xs font-black text-white">Beacon</span>
          </div>
          <div class="flex items-center gap-2 bg-[#00162F] px-3 py-1.5 rounded-lg border border-slate-700">
            <div class="icon-fav"><img src="leadgraph-app-icon.svg" alt="LeadGraph" class="w-full h-full object-contain"></div>
            <span class="text-xs font-black text-white">LeadGraph</span>
          </div>
          <div class="flex items-center gap-2 bg-[#00162F] px-3 py-1.5 rounded-lg border border-slate-700">
            <div class="icon-fav"><img src="resetr-app-icon.svg" alt="reSeTR" class="w-full h-full object-contain"></div>
            <span class="text-xs font-black text-white"><span class="text-amber-400">re</span>SeTR</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 4: Warm Scenic Cream Surface Card Inspection -->
    <div>
      <div class="mb-4">
        <h2 class="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <i class="fa-solid fa-file-invoice text-amber-500"></i> Executive Presentation &amp; Cream Documentation Cards
        </h2>
        <p class="text-xs text-slate-400 mt-0.5">Verified contrast and luxury presentation on Scenic Cream (<code class="text-amber-400">#FBF6EF</code>) background surfaces.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <!-- Cream Card 1: HOSt -->
        <div class="card-cream p-5 rounded-xl flex flex-col items-center text-center space-y-3 shadow-md">
          <div class="w-16 h-16"><img src="host-app-icon.svg" alt="HOSt" class="w-full h-full object-contain"></div>
          <div>
            <div class="font-black text-lg text-[#00162F]">HOSt</div>
            <div class="text-[10px] text-slate-500 font-semibold uppercase mt-0.5">Listing Forge</div>
          </div>
        </div>

        <!-- Cream Card 2: Beacon -->
        <div class="card-cream p-5 rounded-xl flex flex-col items-center text-center space-y-3 shadow-md">
          <div class="w-16 h-16"><img src="beacon-app-icon.svg" alt="Beacon" class="w-full h-full object-contain"></div>
          <div>
            <div class="font-black text-lg text-[#00162F]">Beacon</div>
            <div class="text-[10px] text-slate-500 font-semibold uppercase mt-0.5">Owner CRM</div>
          </div>
        </div>

        <!-- Cream Card 3: LeadGraph -->
        <div class="card-cream p-5 rounded-xl flex flex-col items-center text-center space-y-3 shadow-md">
          <div class="w-16 h-16"><img src="leadgraph-app-icon.svg" alt="LeadGraph" class="w-full h-full object-contain"></div>
          <div>
            <div class="font-black text-lg text-[#00162F]">LeadGraph</div>
            <div class="text-[10px] text-slate-500 font-semibold uppercase mt-0.5">Zoning &amp; Radar</div>
          </div>
        </div>

        <!-- Cream Card 4: reSeTR -->
        <div class="card-cream p-5 rounded-xl flex flex-col items-center text-center space-y-3 shadow-md">
          <div class="w-16 h-16"><img src="resetr-app-icon.svg" alt="reSeTR" class="w-full h-full object-contain"></div>
          <div>
            <div class="font-black text-lg text-[#00162F]"><span class="text-amber-600">re</span>SeTR</div>
            <div class="text-[10px] text-slate-500 font-semibold uppercase mt-0.5">Field QA &amp; Dispatch</div>
          </div>
        </div>
      </div>
    </div>

  </div>

</body>
</html>
'''

with open(os.path.join(BRAND_DIR, "app_icons_suite.html"), "w", encoding="utf-8") as f:
    f.write(suite_html)

print("Updated app_icons_suite.html with clean <img> references!")
