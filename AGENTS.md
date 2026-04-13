## Project Configuration

- **Language**: TypeScript
- **Package Manager**: pnpm
- **Add-ons**: prettier, eslint, tailwindcss, mdsvex, mcp

---

## General Instructions

- Always ask before launching the dev-server.
- Always ask before using the chrome-mcp

## Skill Loading

- Load skills dynamically based on the task instead of loading every available skill at the start of each session
- Treat `svelte-code-writer` and `svelte-core-bestpractices` as the default baseline for work in this repository because Svelte is part of the core stack
- Load `commit` when the user asks to create a commit, draft a commit message, review a staged commit, or summarize changes into a commit message that follows the repo's commit-writing standards
- Load `changeset` when the user asks to add or review a Changeset, prepare release notes, decide whether a release-visible change needs version metadata, or create a `.changeset/*.md` entry for package `dle.dev`
- Load `frontend-design` for design-heavy work such as UI design, layout polish, visual refinement, landing pages, dashboards, or other requests where the main goal is the look and feel
- Load `ui-animation` for animation-related work such as transitions, motion polish, interaction feel, choreography, or animation review/debugging
- Load the GSAP skills only when the task involves animation or motion implementation
- When loading GSAP skills, load the smallest relevant set for the task:
  - `gsap-core` for general GSAP animation work
  - `gsap-frameworks` when implementing GSAP in Svelte or other framework components
  - `gsap-scrolltrigger` for scroll-based animation
  - `gsap-timeline` for sequenced or choreographed animations
  - `gsap-plugins` when a GSAP plugin is needed
  - `gsap-performance` when optimizing animation performance
  - `gsap-utils` when GSAP utility helpers are directly relevant
- Load other skills only when their domain clearly matches the request instead of treating them as universal baseline context

## UI Component Priorities

When building or refactoring UI, prefer the smallest correct composition from existing component libraries before writing bespoke markup.

### 1. Use Existing shadcn Components First

Always first check whether the requested UI can be built from base components already available in the project or easily addable from:

- https://www.shadcn-svelte.com/
- https://www.shadcn-svelte-extras.com/

Default approach:

- Before writing any custom UI markup, first check whether an equivalent or near-equivalent shadcn component already exists locally in the repo
- If a matching local shadcn component exists, use it as the starting point instead of rebuilding the same pattern by hand
- Prefer composing from existing shadcn primitives before creating custom wrappers or one-off components
- Prefer extending a shadcn primitive with classes, slots, variants, or light composition instead of rebuilding the same behavior from scratch
- For standard UI patterns like buttons, inputs, sheets, menus, dialogs, tooltips, tabs, cards, badges, accordions, and navigation, assume a shadcn-based solution should be attempted first
- If a suitable shadcn component does not exist locally, consider whether it should be added before building a custom version

### 2. For Advanced or Showpiece Components

If the request involves premium interactions, richer visuals, animated UI, hero sections, marquee moments, or other components intended to impress, evaluate established inspiration or implementation patterns from:

- https://aceternity.sveltekit.io/
- https://animation-svelte.vercel.app/
- https://motion-core.dev/
- https://sv-animations.vercel.app/

Do not copy blindly. Adapt patterns to the project's design language and keep the implementation maintainable.

### 3. Motion Expectations

Prefer motion that feels deliberate, premium, and visually memorable.

- Use GSAP for component transitions, staged reveals, scroll-linked effects, and more polished choreography where appropriate
- Avoid defaulting to plain Svelte fly-in/fly-out transitions when the component is intended to feel premium
- Simple transitions are acceptable for utilitarian UI, but user-facing showcase sections should aim higher
- Favor layered motion, stagger, depth, masking, parallax, clip-path, blur, scale, and timing contrast when they improve the experience
- Motion should feel smooth and intentional, not noisy or ornamental for its own sake

### 4. Design Bar

Suggestions and implementations for visible UI should aim to wow and dazzle the visitor.

- Avoid generic layouts and safe, overly familiar component styling when the task allows a more expressive direction
- Prefer premium, high-contrast, well-paced interactions over bland utility styling
- Preserve usability, accessibility, and performance while still pushing toward a more striking visual result

You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

## Available Svelte MCP Tools:

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.
