## Project Configuration

- **Language**: TypeScript
- **Package Manager**: pnpm
- **Add-ons**: prettier, eslint, tailwindcss, mdsvex, mcp

---

## General Instructions

- Always ask before launching the dev-server.
- Always ask before using the chrome-mcp

## Skill Loading

- Always load every available skill at the start of each task/session
- Do not wait for a skill-specific trigger; treat all listed skills as required baseline context for all work in this repository
- If skill loading requires explicit tool calls, invoke the `skill` tool for every available skill before doing substantive work

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
