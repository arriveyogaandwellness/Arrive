# Arrive Yoga & Wellness — Corporate Operations Hub & Ecosystem
**Version 0.0.1** | *Release Candidate v0.0.1*

[![Brand: Where Comfort Meets Grandeur](https://img.shields.io/badge/Brand-Where%20Comfort%20Meets%20Grandeur-EA580C.svg)](https://github.com/arriveyogaandwellness/Arrive)
[![Palette: Sunset Grandeur](https://img.shields.io/badge/Palette-Sunset%20Grandeur%20%23FAF5EB-FBAF18.svg)](https://github.com/arriveyogaandwellness/Arrive)
[![Version: 0.0.1](https://img.shields.io/badge/Version-0.0.1-78350F.svg)](https://github.com/arriveyogaandwellness/Arrive)
[![Status: Move--In%20Ready](https://img.shields.io/badge/Status-Move--In%20Ready%20(Zero%20Mock%20Data)-10B981.svg)](https://github.com/arriveyogaandwellness/Arrive)

Welcome to the central corporate back-office, governance framework, and interactive web operations suite for **Arrive Yoga & Wellness**, founded and led by **Carly Anne Kasinpila**.

---

## 🧘‍♀️ Brand Vision & Core Philosophy

> *"Where Comfort Meets Grandeur"*  
> *"Root down. Rise up. Arrive."*  
> *"Yoga For Every Body (And Every Season of Life)"*

Arrive Yoga & Wellness is built upon somatic grounding, inclusive movement, and luxury wellness experiences. The business architecture is structured into four synergistic pillars:

1. **Arrive Yoga & Wellness Center** — Core community wellness, inclusive public studio classes, breathwork, and alignment workshops.
2. **The Art of Arrival Retreats** — Flagship luxury international retreats (Costa Rica / Amanti Resort), combining bespoke accommodations, private transport, farm-to-table culinary curation, and intensive somatic deep-dives.
3. **Arrive Consulting** — Executive mindfulness, corporate wellness programs, and institutional retreat design.
4. **Yogis Give Back** — 501(c)(3) / charitable karma yoga arm dedicating a percentage of retreat proceeds to local community causes, environmental conservation, and wellness equity.

---

## 🏛️ Repository Architecture (11 Corporate Departments)

This repository contains the complete operational infrastructure of Arrive Yoga & Wellness, organized into 11 departments:

```
Arrive Yoga Corporate/
├── 00_EXECUTIVE & GOVERNANCE/
│   ├── Executive_One_Pager_Printable.html        # High-level investor & stakeholder brief (Print-ready)
│   ├── Master_Business_Entity_Information.md      # Corporate structuring & EIN/LLC register
│   └── Quarterly_OKRs_&_Executive_Scorecard.md    # Growth milestones & quarterly objectives
├── 01_FINANCE, BUDGETING & ACCOUNTING/
│   ├── Retreat_Unit_Economics_&_Budget_Model.csv  # Clean financial model with real Amanti venue benchmarks
│   ├── Vendor_Expense_&_Reimbursement_Log.csv     # Clean bookkeeping expense register
│   └── Merchant_Account_&_Banking_Setup_Checklist.md
├── 02_LEGAL, CONTRACTS & RISK MANAGEMENT/
│   ├── Guest_Participation_Agreement_&_Liability_Waiver.md
│   ├── Independent_Contractor_&_Facilitator_Agreement.md
│   └── Source Contract & Waiver Originals (.docx)
├── 03_OPERATIONS & RETREAT LOGISTICS/
│   ├── Guest_Flight_&_Arrival_Manifest_Template.csv # Clean guest flight & shuttle tracking register
│   ├── Master_Retreat_Run_Of_Show_&_Activity_Schedule.md
│   ├── Amanti_Resort_Venue_Specs_&_Rooming_Grid.md   # Amapola, Toucan, Queen & Honeymoon suites
│   └── Catering & Culinary Menus (Breakfast, Lunch, Dinner .docx)
├── 04_THE ARRIVE METHOD & CURRICULUM/
│   ├── The_Arrive_Method_Core_Curriculum_&_Philosophy.md
│   └── Founder's Philosophy Transcripts (The Art of Arrival, Carly Intro, etc.)
├── 05_GUEST EXPERIENCE & CONCIERGE/
│   ├── Guest_Intake_Digital_Portal.html          # Web UI onboarding form with instant CSV export
│   └── 03_Welcome Packets & Pre-Travel Checklists/
│       └── Costa_Rica_Guest_Welcome_Packet_Printable.html # Branded pre-travel guide
├── 06_BRAND, MARKETING & PR/
│   ├── 01_Brand Identity Guidelines & Vector Assets/
│   │   ├── Brand_Style_Governance_Intake_Portal.html # Interactive visual governance & live token editor
│   │   └── Carly_Brand_Identity_&_Style_Intake.md
│   ├── 03_Photography & Video B-Roll/            # Curated imagery & video archive records
│   └── 06_Press Kit, Media Features & Podcast Pitches/
├── 07_SALES, RETREAT ENROLLMENT & PARTNERSHIPS/
│   ├── Retreat_Application_&_Pipeline_Tracker.csv # Clean application pipeline
│   └── High-touch retreat sales cadences & scripts
├── 08_HUMAN RESOURCES & TEAM OPERATIONS/
│   └── Team_Contact_&_Contractor_Roster.csv      # Clean facilitator & contractor roster
├── 09_TECHNOLOGY, SYSTEMS & AUTOMATIONS/
│   └── Master_Software_Stack_&_Credential_Vault_Template.md
├── 10_CONNECTED ASSETS & QUICK ACCESS/
│   └── Connected_Assets_README.md
├── Arrive_Yoga_Executive_Dashboard.html           # Live Corporate Operations Hub Web UI
├── START_HERE_OFFICE_OPERATIONS_MANUAL.html       # Web UI edition of Master SOP Manual
├── START_HERE_OFFICE_OPERATIONS_MANUAL.md         # Markdown edition of Master SOP Manual
└── Open_Arrive_Yoga_Office.bat                    # One-click Windows launch script
```

---

## 🖥️ Web Applications & Portals

### 1. Corporate Office Operations Hub (`Arrive_Yoga_Executive_Dashboard.html`)
- **Move-In Ready:** Clean state initialized at `$0.00` revenue, `$0.00` expenses, and `0` guests.
- **Dynamic Unit Economics Calculator:** Calculates gross revenue, net margin, and breakeven based on actual Costa Rica retreat rates (Amapola, Toucan, Queen, and Honeymoon suites).
- **Airport Shuttle Logistics:** SJO transfer model based on actual group transportation tiers ($150 base shuttle + $25/extra guest).
- **Spa & Wellness Pricing Menu:** Real client services ($75–$125 massage therapy, $50 reflexology).
- **Persistent Move-In Checklist:** Browser-backed task tracker saving progress automatically.

### 2. Brand & Style Governance Portal (`Brand_Style_Governance_Intake_Portal.html`)
- **Interactive Style Governance:** Allows Carly Anne to customize primary accents, secondary tones, canvas backgrounds, and typography.
- **Curated Presets:** Includes *Sunset Grandeur* (default), *Montecito Linen*, *Jungle Emerald & Teak*, and *Pura Vida Terra Cotta*.
- **Live Tile Preview:** Visualizes buttons, badges, headers, and cards in real time.
- **Dynamic Governance Sync:** One-click save propagates tokens to `localStorage` and all connected apps, plus downloads `arrive-brand-tokens.json` and `Brand_Guidelines.md`.

### 3. Master Operations Manual (`START_HERE_OFFICE_OPERATIONS_MANUAL.html`)
- Complete SOP manual with sticky table of contents, 6-month launch roadmap, emergency protocols, and print stylesheet.

### 4. Digital Guest Intake Portal (`Guest_Intake_Digital_Portal.html`)
- Client-facing onboarding form capturing emergency contacts, dietary requirements, room preferences, and liability acknowledgments.
- Direct CSV export for instant importation into operations manifests.

---

## 🎨 Design System & Palette: *Sunset Grandeur*

| Token Name | Hex Code | Purpose | Preview |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | `#FAF5EB` | Warm sand parchment background | ![#FAF5EB](https://via.placeholder.com/15/FAF5EB/000000?text=+) `#FAF5EB` |
| **Primary Brand Accent** | `#EA580C` | Sunset mandarin orange for primary CTAs | ![#EA580C](https://via.placeholder.com/15/EA580C/000000?text=+) `#EA580C` |
| **Secondary Accent** | `#FBAF18` | Warm sunflower gold for badges and highlights | ![#FBAF18](https://via.placeholder.com/15/FBAF18/000000?text=+) `#FBAF18` |
| **Deep Anchor** | `#78350F` | Polished teak wood for headings & borders | ![#78350F](https://via.placeholder.com/15/78350F/000000?text=+) `#78350F` |
| **Text Primary** | `#18181B` | Deep slate for crystal-clear readability | ![#18181B](https://via.placeholder.com/15/18181B/000000?text=+) `#18181B` |

- **Display Typography:** *Cormorant Garamond* (Editorial Luxury Serif)
- **Body Typography:** *Plus Jakarta Sans* / Modern Sans-Serif

---

## 📊 Zero Mock Data Guarantee

All spreadsheet registers and tracking templates in this repository contain **zero placeholder, dummy, or imaginary data**. Every register is clean, formatted with production headers, and ready for immediate real-world use:
- `Retreat_Unit_Economics_&_Budget_Model.csv` — Blank line-item columns with pre-calibrated formulas.
- `Retreat_Application_&_Pipeline_Tracker.csv` — Clean lead pipeline ready for real applicant records.
- `Guest_Flight_&_Arrival_Manifest_Template.csv` — Clean flight tracking template.
- `Vendor_Expense_&_Reimbursement_Log.csv` — Pristine expense log.
- `Team_Contact_&_Contractor_Roster.csv` — Clean roster for staff and instructors.

---

## 🚀 Getting Started

### Local Setup:
1. Clone this repository:
   ```bash
   git clone https://github.com/arriveyogaandwellness/Arrive.git
   cd Arrive
   ```
2. Launch the Corporate Office Hub:
   - On Windows: Double-click `Open_Arrive_Yoga_Office.bat`
   - Or open `Arrive_Yoga_Executive_Dashboard.html` directly in any modern browser (Chrome, Edge, Safari, Firefox).
3. To configure or modify brand styles:
   - Open `06_BRAND, MARKETING & PR/01_Brand Identity Guidelines & Vector Assets/Brand_Style_Governance_Intake_Portal.html`.
   - Select your preferred color palette and typography.
   - Click **Save & Apply Brand Governance** to apply styles across all local web applications.

---

## ☁️ Railway Cloud Deployment

This repository is 100% pre-configured for instant zero-configuration deployment on [Railway](https://railway.app):

1. Open your [Railway Dashboard](https://railway.app/dashboard).
2. Click **+ New Project** &rarr; **Deploy from GitHub repo**.
3. Select **`arriveyogaandwellness/Arrive`**.
4. Railway automatically detects `railway.json`, `package.json`, and `server.js` (via Nixpacks or Dockerfile).
5. Under your service's **Settings &rarr; Networking**, click **Generate Domain** (e.g. `https://arrive-production.up.railway.app`).

### Clean Hosted Web Routes:
| Route | Destination Portal | Purpose |
| :--- | :--- | :--- |
| **`/`** or **`/dashboard`** | `Arrive_Yoga_Executive_Dashboard.html` | Corporate Office Operations Hub (Real metrics, Amanti specs, checklist) |
| **`/website`** | `index.html` | Public Sanctuary Hub Experience with ambient soundscape & style switchers |
| **`/manual`** | `START_HERE_OFFICE_OPERATIONS_MANUAL.html` | Master SOP Operations Manual with sticky navigation & 6-month roadmap |
| **`/brand`** | `Brand_Style_Governance_Intake_Portal.html` | Brand & Style Governance intake with live theme token sync |
| **`/guest-intake`** | `Guest_Intake_Digital_Portal.html` | Digital guest intake with automatic CSV export |
| **`/one-pager`** | `Executive_One_Pager_Printable.html` | High-impact executive pitch deck |
| **`/welcome-packet`** | `Costa_Rica_Guest_Welcome_Packet_Printable.html` | Branded guest travel guide |
| **`/investors`** | `investors.html` | Investor Deck & growth model |
| **`/review`** | `review_report.html` | Ecosystem audit and codebase review report |
| **`/bento`** | `style-app-bento-portal.html` | Bento grid mobile app experience |
| **`/spatial-map`** | `style-app-spatial-map.html` | 3D Interactive Spatial Sanctuary map |
| **`/split-studio`** | `style-app-split-studio.html` | Dual-view split studio interface |
| **`/cinematic-deck`** | `style-app-cinematic-deck.html` | Cinematic visual slide deck |
| **`/health`** | JSON Status | Automated healthcheck endpoint for Railway monitoring |

---

## 📄 License & Confidentiality

Copyright © 2026 Arrive Yoga & Wellness. All rights reserved.  
Confidential and proprietary property of **Carly Anne Kasinpila**. Unauthorized reproduction or distribution of these operational materials is strictly prohibited.
