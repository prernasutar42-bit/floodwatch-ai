# FloodWatch — Maharashtra Flood Prediction & Early Warning Prototype

FloodWatch is an AI-based flood prediction and early warning decision-support system prototype designed for all 36 districts of Maharashtra, India. Built with a calm, trustworthy public-safety aesthetic and a modular mock data layer ready for real-time telemetry ingestion.

---

## Stack
- **Framework**: React 18 + Vite (JavaScript)
- **Styling**: Tailwind CSS with custom public-safety theme tokens
- **Routing**: React Router (declarative routes, URL search params)
- **Server State**: TanStack Query (`@tanstack/react-query`)
- **Geospatial Visualization**: Leaflet + `react-leaflet` + OpenStreetMap
- **Telemetry Charts**: Recharts
- **Iconography**: `lucide-react`
- **Typography**: IBM Plex Sans (UI) & IBM Plex Mono (metrics & timestamps) via `@fontsource`

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
npm run preview
```

---

## Seed Accounts & Authentication
Session state is stored in `localStorage` using a standard JWT shape (`header.payload.signature`):

| Role | Email | Password | Scope |
| :--- | :--- | :--- | :--- |
| **Admin Official** | `admin@floodwatch.test` | `Admin@123` | Full access: Risk ranking, manual alert broadcast, prediction refresh |
| **Citizen User** | `citizen@floodwatch.test` | `Citizen@123` | Citizen access: Home district monitor, what-if simulator, map, checklists |

---

## Key Features

1. **District Hydrology Dashboard (`/` & `/?district=:id`)**
   - 36 Maharashtra district selector with persisted "Home district" preference.
   - Prominent `RiskBadge` with AI flood probability and plain-language severity.
   - Explainable "Why this rating" `FactorList` with calibrated impact weight bars.
   - 24h, 48h, and 72h predictive forecast chart rendered via Recharts.
   - Real-time rainfall (24h vs. normal) and river stage gauge data with freeboard margins.
   - Live **What-if Simulator**: slider (+0 to +100 mm rainfall) that dynamically recalculates risk and propagates across the application and map.

2. **Interactive Risk Map (`/map`)**
   - Leaflet map centered on Maharashtra (19.7° N, 75.7° E, zoom 6).
   - All 36 districts plotted as proportional circle markers colored strictly by risk level.
   - Filterable by 5 administrative divisions (Konkan, Western Maharashtra, Marathwada, Vidarbha, North Maharashtra).
   - District name search with instant focus.
   - "Use My Location": calculates geodesic distance via Haversine formula to find and select the closest district zone.
   - District detail panel: responsive bottom sheet on mobile (<768px) and side panel on desktop.
   - Syncs selected district bidirectionally with the URL query (`/map?district=1`).

3. **Official Early Warning Bulletins (`/alerts`)**
   - Historical bulletin feed with filter by district and severity level.
   - Accessible `aria-live` region for real-time broadcast reception.

4. **Flood Safety & Emergency Directory (`/safety`)**
   - Verified emergency telephone hotlines with one-tap calling:
     - Unified National Emergency: `112`
     - Maharashtra SDMA Control Room: `1070`
     - District Disaster Helpline: `1077`
     - NDRF HQ Control Room: `011-24363260`
   - Interactive Before, During, and After flood action checklists with persistent state.

5. **Disaster Management Console (`/admin` - Admin Role)**
   - Districts ranked by risk probability descending (Top 10 vs. All 36).
   - Manual alert broadcast modal adding directly to citizen advisory feeds.
   - "Refresh Predictions" trigger perturbing telemetry and recalculating probabilities.
   - Diagnostic simulated API failure switch to test skeleton loading, empty, and retry states.

---

## Verification & Official Notice
> **Disclaimer**: Decision-support tool. Follow official IMD/CWC and local authority instructions.
