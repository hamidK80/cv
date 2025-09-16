# Theme System Documentation

## CSS Architecture
- **Root Variables**: All colors, spacing, typography in CSS custom properties
- **Theme Detection**: Automatic light/dark mode based on user preference
- **Fallback**: Light mode as default, dark mode as enhancement

## CSS Structure
```
src/styles/
├── variables.css          # Root CSS custom properties (light theme default)
├── themes/
│   └── dark.css          # Dark theme via media query
├── base.css              # Reset, typography, base styles
├── components.css        # Simple component styles
└── styles.css            # Main import file
```

## Root Variables
- **Colors**: Primary, secondary, accent, background, text, border
- **Spacing**: Consistent scale (4px, 8px, 16px, 24px, 32px, 48px, 64px)
- **Typography**: Font families, sizes, weights, line heights
- **Shadows**: Elevation levels for cards, buttons
- **Transitions**: Standard timing functions

## Theme Implementation
- **Auto Detection**: `@media (prefers-color-scheme: dark)` in `dark.css`
- **Simple**: Light theme default, dark theme when system prefers dark
- **Accessibility**: Respects `prefers-reduced-motion`
- **No Complexity**: No manual switching, no services, no localStorage

## Usage in Components
```css
.component {
  background: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  padding: var(--spacing-md);
  border-radius: var(--radius-sm);
}
```
