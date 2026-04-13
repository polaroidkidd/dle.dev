---
name: changeset
description: |-
  Draft and create Changesets entries for release notes and versioning. Use for changeset authoring,
  release-note drafting, bump selection, or when the user asks to add a changeset for code changes.
  Use proactively when a pull request needs a `.changeset/*.md` file, when CI verifies changesets,
  or when changes should be summarized into a human-readable release note for package `dle.dev`.

  Examples:
  - user: "Add a changeset for this feature" → choose the bump level and write a `.changeset/*.md` entry
  - user: "Do I need a changeset?" → inspect the diff and decide whether release-visible changes require one
  - user: "Write release notes for this PR" → draft a concise summary in Changesets format
  - user: "Prepare this for release" → add or review the changeset, then verify it with the local workflow
---

# Changeset

Use this skill to create repo-accurate Changesets entries that support clean release notes and pass this repository's PR checks.

## Repo Context

- This repository uses `@changesets/cli`.
- Changeset files live in `.changeset/`.
- The package name in this repo is `dle.dev`.
- Existing entries use this format:

```md
---
'dle.dev': patch
---

Summarize the release-visible change in one concise paragraph.
```

- CI verifies changesets with `pnpm exec changeset status --since=origin/master`.
- `.changeset/config.json` sets `commit: false`, so creating the file does not auto-create a git commit.

## When To Create One

- Create a changeset when the work changes shipped behavior, user-facing functionality, content worth calling out in release notes, or package versioning impact.
- Typical examples:
  - new features
  - bug fixes that affect users or consumers
  - UX changes with visible behavior differences
  - removals or deprecations
  - security-relevant fixes
- Skip the changeset only when the work is clearly release-irrelevant, such as:
  - local refactors with no behavior change
  - formatting-only changes
  - internal docs with no shipped impact
  - test-only updates
- If the impact is ambiguous, ask one short question before creating the file.

## Bump Selection

- `patch`:
  - bug fixes
  - polish
  - small UX improvements
  - low-risk behavioral adjustments
- `minor`:
  - new features
  - meaningful new capabilities
  - notable additions users should discover in release notes
- `major`:
  - breaking changes
  - removals that require consumer action
  - incompatible behavior changes

When choosing the bump, optimize for the user-facing release impact rather than the implementation size.

## Writing Rules

- Write for humans, not for raw diff reconstruction.
- Summarize the shipped outcome, not a file list.
- Prefer one short paragraph or 1-2 sentences.
- Make the note stand alone in release notes.
- Explain what changed and why it matters.
- Avoid implementation trivia unless it affects consumers.
- Match the tone of existing files in `.changeset/`.

## Workflow

1. Inspect the changes intended for release.
2. Decide whether a changeset is required.
3. Choose the bump level: `patch`, `minor`, or `major`.
4. Create a new `.changeset/<slug>.md` file.
5. Use the frontmatter exactly:

```md
---
'dle.dev': <patch|minor|major>
---
```

6. Write a concise release note paragraph below the frontmatter.
7. Verify the file is valid and specific enough to appear in release notes.
8. If asked to verify locally, run `pnpm exec changeset status --since=origin/master`.

## Filename Guidance

- Use a short, descriptive hyphen-case slug.
- Prefer names tied to the shipped behavior, not internal implementation details.
- Good examples:
  - `.changeset/floating-navbar.md`
  - `.changeset/hero-avatar-refresh.md`
- Avoid opaque names like `.changeset/update.md` or `.changeset/fixes.md`.

## Template

```md
---
'dle.dev': patch
---

Summarize the release-visible change and why it matters.
```

## Review Checklist

- The work truly needs a changeset.
- The package key is exactly `'dle.dev'`.
- The bump level matches the release impact.
- The filename is descriptive and hyphen-case.
- The summary is concise, user-facing, and readable in release notes.
- The summary explains what changed and why it matters.
- The file matches the existing `.changeset/*.md` style in this repo.

## Examples

```md
---
'dle.dev': patch
---

Improve article card image fallbacks so broken thumbnails no longer leave
empty visual gaps in content listings.
```

```md
---
'dle.dev': minor
---

Add a floating navigation bar that hides while scrolling down and returns
when scrolling up for faster access to site navigation.
```

```md
---
'dle.dev': major
---

Remove the legacy theme toggle in favor of the new theme system, which
changes how users switch appearance settings.
```

## When Not To Use This Skill

- The task is only to explain Changesets conceptually.
- The repository does not use Changesets.
- The user explicitly says not to add release metadata.
- The change is clearly not release-visible and does not affect versioning.
