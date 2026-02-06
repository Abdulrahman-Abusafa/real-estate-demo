Role: Expert Full-Stack Developer (Next.js & Real Estate Domain Specialist)
Your Goal: Create a high-fidelity, production-grade MVP/Demo of a Saudi Real Estate Platform using Next.js 15 (App Router). Context: The client wants a website that rivals Rakez.sa and Bayut.sa in terms of UX, design quality, and feature set. It must be a "WOW" demo that feels alive, premium, and trustworthy.

Target Audience: Saudi Arabian market (requires native-feeling RTL/Arabic layouts, but support English for the demo via a toggle or separate route if easier).

1. Technical Stack & Foundation
Framework: Next.js 15 (App Router).
Language: TypeScript (Strict mode).
Styling: Tailwind CSS (with prettier-plugin-tailwindcss for sorting).
Icons: Lucide React (modern, clean).
Fonts: next/font/google -> Cairo (primary for Arabic) / Inter (primary for English).
Components: Shadcn/UI (headless, accessible components) - Assume these are available or build the necessary primitives using Radix UI logic if needed, but standard Tailwind components are fine for a demo if they look premium.
State Management: React Context or Zustand (for simple global search state).
Animations: Framer Motion (crucial for that "premium" feel - smooth fade-ins, card hovers, modal transitions).
2. Design System & Aesthetics (CRITICAL)
The design must be Premium, Clean, and Trustworthy.

Color Palette:
Primary: Deep Royal Blue (e.g., #0f2942) - conveying stability/trust.
Secondary: Vibrant Teal/Emerald (e.g., #10b981) - user for "Verified" badges and call-to-actions.
Accent: Gold/Sand (subtle usage) - referencing local luxury.
Background: White to Off-white (#fcfcfc).
UI Principles:
Mobile-First: The search bar and cards must look perfect on iPhone/Android screens.
Glassmorphism: Use subtle glass effects on the sticky search bar or map overlays.
Whitespace: Generous padding. Don't clutter the view.
Rounded Corners: rounded-xl or rounded-2xl for cards and inputs.
3. Core Features to Implement (The "Demo" Scope)
You are building the Home Page and a Search Results Page (can be simulated on the same page or separate).

A. The "Hero" Section (Above the Fold)
Background: High-quality image or video (use a placeholder constant for URL) of a modern Riyadh skyline or luxury villa. overlay a gradient to ensure text readability.
Headline: "Find Your Home, Direct & Verified" (Arabic: "ابحث عن منزلك، مباشر وموثق").
Smart Search Bar (The Central Piece):
Tabs for: Rent | Buy | Commercial.
Inputs: "City/Neighborhood", "Property Type", "Price Range", "Beds/Baths".
Action: Big, prominent "Search" button.
B. "Verified" Listings Showcase
create a section titled "Featured Properties" (عقارات مميزة).
Property Card Component (Must be high fidelity):
Image Slider: Carousel of 3-4 images per card.
Badges:
"Verified" (موقّق) - Green checkmark badge (Key feature from Bayut/Rakez).
"TruCheck™" (or similar branding) - indicating visited by team.
Info: Price (SAR), Beds, Baths, Area (m²).
Agent Info: Tiny avatar of the agent + "WhatsApp" and "Call" buttons visible on the card footer.
Interactive: "Heart" icon for saving.
C. Map View Integration (Mocked but Realistic)
A section or toggle to view properties on a Map.
Since we don't have a real map API key for this demo, create a stylized interactive placeholder:
A static map image background.
Overlay "Price Pins" (e.g., "350k") scattered on the map.
Clicking a pin opens a small "Property Preview" modal/popover (Bayut style).
D. The "Agent" & "Trust" Section
A banner highlighting "Registered Brokers Only".
"List Your Property" CTA for owners.
4. Implementation Steps & File Structure
Please generate the code following this structure. You can group components logically.

Phase 1: Setup & Constants

Define a mockData.ts file with 5-6 rich property objects (mix of Villas/Apartments in Riyadh/Jeddah) to populate the UI.
Define colors in tailwind config customization suggestions.
Phase 2: Core Components

components/ui/Badge.tsx (Variants: Verified, New, Sold)
components/PropertyCard.tsx (The most critical component)
components/SearchBar.tsx (Complex component with dropdowns)
components/Layout/Navbar.tsx (Logo, Lang Switcher En/Ar, Login)
Phase 3: Pages

app/page.tsx (Hero + Featured Listings + Marketing Banners)
app/search/page.tsx (Sidebar Filters + Grid/Map Toggle)
5. Specific "Bayut/Rakez" Mimicry Details
"TruCheck" Validation: In the demo, make sure at least 3 properties have a special "Verified" animated badge that pulses slightly to draw attention.
WhatsApp Integration: The contact buttons should use the wa.me link format (mock numbers) because this is critical for the Saudi market.
RTL Support: Ensure the layout container has dir="rtl" (or dir="ltr" based on lang). For this demo, default to Arabic (RTL) as it's the primary market, but write the code so it works in LTR too strictly using logical properties (e.g., ms-2 instead of ml-2).
Output Requirement: Provide the full code for the essential files to get this running. Focus on the page.tsx, layout.tsx, and the PropertyCard and Hero components.

