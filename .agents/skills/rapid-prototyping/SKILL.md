---
name: rapid-prototyping
description: |-
  Build rough but working UI/app prototypes by proposing a few concrete options, implementing selected options in separate `.worktrees` git worktrees, and landing the chosen direction back in the current worktree. Use proactively for prototypes, proofs of concept, quick demos, clickable mocks, MVP slices, or design direction comparisons.

  Examples:
  - user: "Build a quick demo of a dashboard for tracking shipments" → propose options, create worktrees for the selected ones, and implement each prototype separately
  - user: "I need a clickable onboarding flow today" → offer flow options, ask whether to use subagents, then build each chosen option in its own worktree
  - user: "Scaffold an MVP slice for booking appointments" → write short option specs, hand them to subagents or implement directly, then land the selected slice in the main worktree
  - user: "Turn this rough feature idea into something I can show" → convert vague requirements into competing prototype options and help the user choose one to land
---

# Rapid Prototyping

Use this skill when speed of learning matters more than production polish and comparing a few concrete directions is more useful than debating abstractly.

## Workflow

1. Present 2-4 options

- Translate the request into a small set of distinct prototype directions.
- Keep options concrete and implementation-shaped, not abstract design language.
- Describe each option briefly so the user can choose what to prototype.

1. Let the user choose options to prototype

- Ask the user which option numbers or names to build.
- Ask whether to implement all selected options simultaneously with subagents or with the current agent.
- If a missing product decision blocks useful options, ask one short clarifying question.

1. Create one worktree per selected option

- Create a separate git worktree for each selected option under `.worktrees/`.
- Use descriptive names that map cleanly to the option labels.
- Use the directory pattern `.worktrees/prototype-<slug>` where `<slug>` is a short lowercase hyphen-case version of the option name.
- Create each worktree from the current branch with `git worktree add .worktrees/prototype-<slug> -b prototype-<slug>`.
- Keep the current worktree clean; prototype exploration happens in the option worktrees.
- Run `npm install` in each worktree

1. Write a quick spec per option

- In each selected option worktree, add `prototype-spec.md` describing the goal, happy path, assumptions, mocked data, and explicit shortcuts.
- Keep the spec short and implementation-ready.
- If subagents are used, hand the spec and worktree path to the subagent.

Use this spec template:

```md
# <Option Name>

## Goal

## Happy Path

## Assumptions

## Mocked Data / Integrations

## Explicit Shortcuts

## Deliverable
```

1. Implement prototypes

- If the user chose subagents, launch one subagent per selected option so implementation can happen in parallel.
- If the user chose the current agent, implement the selected option worktrees one at a time.
- Stay inside the repo's existing stack, file structure, components, and styling patterns.
- Prefer local state, hard-coded fixtures, placeholder copy, and mocked data unless real integration is the point of the prototype.
- Implement one happy path first and skip edge cases unless requested.

1. Report completion and wait for selection

- Once all option implementations finish, inform the user that the prototypes are ready.
- Do not merge anything yet.
- Ask the user if you should launch the dev servers of the prototypes. If yes, run the `pnpm dev` command an report back the URL where the prototype is available
- Wait for the user to manually inspect the worktrees and choose one option.

1. Land the chosen option in the current worktree

- Implement the selected option in the current worktree at the repo root (`dle.dev`).
- Rebuild the chosen direction cleanly rather than trying to preserve every prototype shortcut.
- Run the smallest relevant verification for the landed change.

1. Clean up exploration state

- Delete all temporary option worktrees under `.worktrees` after the chosen option is landed.
- Remove each worktree with `git worktree remove .worktrees/prototype-<slug>`.
- If the temporary branch is no longer needed, delete it with `git branch -D prototype-<slug>` only after the worktree has been removed.
- Inform the user that the selected option is now implemented in the main worktree.
- Ask whether they want any further changes.

## Default Choices

- Options: 2-4 distinct directions unless the user asks for more or fewer.
- Scope: one screen or one end-to-end happy path before anything broader.
- Data: static fixtures or in-memory state before real APIs or persistence.
- Components: existing primitives before new component systems.
- Architecture: inline or local code before reusable layers.
- Styling: minimal changes that support the concept, not a full design pass.
- Verification: favor quick functional verification before authoring new tests.
- Specs: one `prototype-spec.md` per selected option worktree.
- Execution: subagents for parallel option builds, current agent for sequential builds.

## When Not To Use This Skill

- The user explicitly wants production-ready architecture, migrations, or long-term maintainability.
- The core value depends on real integrations, exact performance, or exhaustive edge-case handling.
- The task is mostly cleanup, refactoring, or documentation rather than building a demonstrable slice.
- The user wants only one direct implementation with no option exploration.

## Finish Pattern

Use this structure when reporting completed prototype work:

- Options built: the completed prototype worktrees that are ready for review
- Selected option: the direction the user chose after reviewing
- Landed in main worktree: the implementation now present in `dle.dev`
- Mocked: data, services, or states that are intentionally fake or incomplete
- Assumptions: defaults chosen to keep momentum
- Next hardening steps: the smallest steps to productionize the prototype
- Once everything is complete, kill all subagents relating to the prototypes
