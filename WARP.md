# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is Fahad's personal portfolio website - a Vue 3 application showcasing data analyst skills through an interactive terminal interface. The project features multiple views including a traditional homepage, an interactive terminal, and a GraphQL API explorer.

## Development Commands

### Essential Commands
```bash
npm run dev                    # Start development server (Vite)
npm run build                  # Production build for GitHub Pages
npm run build:local            # Local production build (without GitHub Pages base)
npm run preview               # Preview production build
npm run type-check            # TypeScript type checking
npm run lint                  # ESLint with auto-fix
npm run format               # Prettier formatting
```

### Testing & Quality
- No dedicated test framework is configured
- Use `npm run type-check` to verify TypeScript compilation
- Use `npm run lint` for code quality checks

## Architecture Overview

### Core Structure
- **Vue 3** with Composition API and TypeScript
- **Vue Router** for client-side routing with GitHub Pages support
- **Tailwind CSS** for styling with dark mode support
- **Vite** for build tooling and development server

### Key Application Views
1. **HomeView** (`/`) - Landing page with hero, tech stack, and adventure sections
2. **TerminalView** (`/terminal`) - Interactive terminal emulator with custom command system
3. **ApiView** (`/api`) - GraphQL explorer interface
4. **TestView** (`/test`) - Development testing page

### Terminal System Architecture
The terminal is the centerpiece feature with sophisticated command processing:

**Core Components:**
- `src/terminal/executor.ts` - Main command execution engine
- `src/terminal/dataManager.ts` - Data fetching and parsing logic  
- `src/terminal/config.ts` - Configuration, themes, and types
- `src/components/terminal/` - UI components (Header, Body, Footer, etc.)

**Data Flow:**
1. User input → `TerminalView` → `executeCommand()`
2. Command parsing → `dataManager.parseQuery()`
3. Execution → `executeTerminalQuery()` in executor
4. Results → Terminal history and display

**Command Types:**
- Category queries: `about[]`, `skills[]`, `experience[]`
- Field queries: `name`, `email`, `name age location`
- Special commands: `help`, `clear`, `theme [name]`, `fields`

### Data Architecture
- `src/data/` - Static data files (about.ts, education.ts, experience.ts, etc.)
- `src/api/` - GraphQL execution and data service interfaces
- `src/composables/` - Reusable Vue composition functions

### Theming System
- Multiple terminal themes: matrix, dracula, monokai, cyberpunk, minimal
- Theme switching via terminal commands
- CSS custom properties for theme variables
- Dark/light mode support throughout application

## Development Guidelines

### File Organization
- Views: Main page components in `src/views/`
- Components: Organized by feature area (`terminal/`, `home/`, `api/`, etc.)
- Composables: Reusable logic in `src/composables/`
- Data: Static content in `src/data/`
- Assets: Stylesheets and static files in `src/assets/`

### TypeScript Patterns
- Strict TypeScript configuration with project references
- Interface definitions in relevant modules (terminal/config.ts, api/types.ts)
- Composition API with `<script setup lang="ts">`
- Proper typing for Vue Router meta and component props

### State Management
- No external state management (Vuex/Pinia)
- Local component state with Vue's reactivity system
- Composables for shared state logic
- localStorage for persistent data (themes, preferences)

### GitHub Pages Deployment
- Base URL configuration in vite.config.ts and router
- Dual build scripts: `build` (with `/portfolio/` base) and `build:local`
- 404.html fallback for client-side routing
- Custom `_headers` file for deployment

### Performance Considerations
- Lazy loading for route components where applicable
- Manual chunk splitting in Vite configuration
- Component-level loading states and error boundaries
- Responsive design with mobile-first approach

## Special Features

### Terminal Auto-completion
- Tab completion for commands and field names
- Similar name matching (e.g., "bio" matches "biography")
- Command history with up/down arrow navigation

### GraphQL Integration
- Custom execution engine without external GraphQL client
- Type-safe query execution with error handling
- Composable pattern for GraphQL operations

### Animation System
- Theme-based background animations
- Smooth page transitions
- Loading states with consistent UX patterns

### Accessibility
- Skip navigation links
- Semantic HTML structure
- Screen reader considerations in component design

## Development Tips

- Terminal commands are case-insensitive
- Use browser dev tools for debugging terminal command execution
- Theme changes persist in localStorage
- Router includes detailed logging for debugging navigation issues
- All async operations include proper error handling
