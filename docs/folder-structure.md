# Folder Structure Guidelines

## Component Organization
- **All components go in**: `src/app/components/`
- **Each component gets its own folder**: `src/app/components/hero/`, `src/app/components/about/`, etc.
- **Component files**: `hero.component.ts`, `hero.component.html`, `hero.component.css`

## Routing Structure (Future Reference)
- **Single page app**: No routes needed for CV sections
- **If routes needed later**: Create folders inside `src/app/` for each route
- **Example**: `src/app/contact/` for contact page route
- **Route setup**: Each route folder contains its own component files

## Current Structure
```
src/app/
├── components/           # All reusable components
│   ├── hero/
│   ├── about/
│   ├── services/
│   ├── how-it-works/
│   ├── toolbox/
│   ├── tip/
│   ├── faq/
│   ├── gallery/
│   ├── contact/
│   └── footer/
├── app.ts               # Main app component
├── app.html             # Main app template
├── app.css              # Main app styles
├── app.config.ts        # App configuration
└── app.routes.ts        # Routing configuration
```

## Component Naming
- **Folder**: `kebab-case` (e.g., `how-it-works/`)
- **Files**: `kebab-case.component.ts` (e.g., `how-it-works.component.ts`)
- **Class**: `PascalCase` (e.g., `HowItWorksComponent`)

## Import Paths
- **Components**: `@/components/hero/hero.component`
- **Models**: `@/models/personal-info.model`
- **Services**: `@/services/theme.service`
