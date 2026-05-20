# Portfolio Design Spec: "The Tactile Engineer"

## 1. The Core Philosophy
**The Vibe:** An interactive indie magazine meets a raw developer terminal. 
**The Anti-AI Rule:** No glowing purple orbs. No perfectly smooth glassmorphism. No generic "innovating the future" copy. 
**The Aesthetic:** Asymmetrical bento grids, visible grid lines, grainy textures, and a mix of elegant serif typography with raw monospace code blocks.

---

## 2. Color Palette (The "Newsprint & Ink" Theme)
Abandoning the standard dark-mode-zinc, this palette feels like physical media.

*   **Base Surface (Background):** `#E8E4DF` (Oatmeal / Raw Canvas) – Warm, easy on the eyes, feels like high-quality paper.
*   **Primary Ink (Text/Borders):** `#1C1C1A` (Charcoal) – Not pure black, reducing eye strain while maintaining stark contrast.
*   **Highlight / Action:** `#E63946` (Cadmium Red) – Used incredibly sparingly. Only for the primary "Contact" button or terminal cursor blink.
*   **Secondary Accent:** `#2A9D8F` (Muted Teal) – For link underlines or active tags.
*   **Dark Mode Toggle:** Inverts strictly to `#1C1C1A` background and `#E8E4DF` text. No muddy grays.

---

## 3. Typography (The Editorial Mix)
The contrast between classic editorial and strict engineering.

*   **Headers & Display (H1, H2):** **Playfair Display** or **PP Editorial New**
    *   *Why:* A sharp, high-contrast serif font immediately breaks the "tech-bro" stereotype. It makes the portfolio feel like a curated publication.
    *   *Styling:* Huge, tight line-height, often overlapping slightly with bento box borders.
*   **Body Copy:** **Geist** or **Helvetica Neue**
    *   *Why:* Utilitarian, invisible, highly readable.
*   **Data & Tech:** **IBM Plex Mono**
    *   *Why:* Used for dates, tech stack tags (MERN, Next.js, C, Python), and small metadata. It grounds the elegant serif back into developer territory.

---

## 4. UI Textures & Micro-Interactions
*   **The SVG Noise Overlay:** A fixed, 5-10% opacity static grain applied over the entire `body`. This breaks up flat colors and makes the screen feel like physical material.
*   **Bento Borders:** Instead of soft shadows, use harsh `1px solid #1C1C1A` borders for the grid cards. 
*   **Hover States:** No "floating" shadows. When a card is hovered, translate it `-4px` on the X and Y axis, leaving a stark, solid black drop shadow behind it (Classic Neo-Brutalism).
*   **Image Treatments:** Project thumbnails (like the Amazon Clone or SwiftCart hardware) should be rendered in high-contrast black and white, snapping to full color only on mouse hover.

---

## 5. Content Architecture (The Asymmetrical Grid)

### Row 1: The Introduction
*   **Card 1 (Spans 3 columns):** Huge serif text: "Dinesh. Full-Stack Developer." Below it, a monospace timestamp of the user's local time.
*   **Card 2 (Spans 1 column, sticky):** A raw, unstyled HTML-looking `<form>` for contact. Just an email input, a text area, and a harsh red "SEND" button.

### Row 2: The Work
*   **Card 3 (Large Square):** **SwiftCart** feature. Focus on the hardware/AI aspect. Show a raw wireframe or schematic instead of a polished mockup.
*   **Card 4 (Vertical Rectangle):** **DSA & Logic**. A monospace terminal window actively running a loop that displays LeetCode stats and current language focus (C / Python).

### Row 3: The Human Element
*   **Card 5 (Wide Banner):** The "Metrics" ticker. A scrolling marquee that mixes tech with physical life. 
    *   *Example Text:* `CURRENT PHASE: BTech IT Year 3 // STACK: Next.js + Tailwind // HARDWARE: Building Smart Consoles // PHYSICAL TARGET: 80kg mass phase // CAFFEINE: High`

---

## 6. Implementation Notes
*   **CSS Strategy:** Use standard Tailwind, but extend the theme to remove all default box-shadows and replace them with solid `box-shadow: 4px 4px 0px #1C1C1A;`
*   **Animation:** Keep it minimal. Use GSAP for harsh, snappy reveal animations rather than smooth, floaty fades. Elements should "snap" into place like a typewriter.