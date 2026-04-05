# OLW Web Development

A modern Next.js landing page with responsive design and Ant Design components.

## Live Link: https://olw-web-dev.vercel.app/

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** TailwindCSS v4
- **UI Library:** Ant Design v6
- **Icons:** React Icons, Ant Design Icons
- **Animation:** React Fast Marquee

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── (auth)/            # Auth routes group
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── pricing/           # Pricing page
│   ├── resources/         # Resources page
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── HomePage/          # Home page sections
│   │   ├── Faq.tsx        # FAQ accordion
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Navbar.tsx     # Navigation with drawer
│   │   ├── Pricing.tsx    # Pricing cards
│   │   ├── Review.tsx     # Customer reviews
│   │   └── ...
│   └── Shared/            # Shared components
│       ├── Navbar.tsx
│       └── Footer.tsx
└── assets/                # Images and static files
```

## Home Page Sections

1. **Hero** - Main banner with CTA
2. **Marquee** - Logo ticker
3. **Our Service** - Service cards
4. **Pricing** - Pricing plans
5. **Tools** - Tools showcase
6. **Getting Started** - Easy steps
7. **Why Choose Us** - Feature highlights
8. **Review** - Customer testimonials
9. **FAQ** - Accordion questions

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Key Features

- **Responsive Navbar** - Desktop nav + mobile drawer (Ant Design)
- **FAQ Accordion** - Expandable/collapsible questions
- **Pricing Cards** - Feature comparison tables
- **Marquee Animation** - Infinite logo scroll
- **Footer** - Multi-column links with social icons

## Styling Notes

- Primary color: `#ed3c6a` (pink/coral)
- CSS variables defined in `globals.css`
- Tailwind `container` class for responsive width
- Ant Design components styled with Tailwind
