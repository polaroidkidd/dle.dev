---
name: commit
description: |-
  Draft and create git commits that support human-readable changelogs. Use for commit-message authoring,
  commit reviews, staged-change summarization, or when the user asks to commit work. Use proactively when
  changes should map cleanly to Keep a Changelog categories (`Added`, `Changed`, `Deprecated`, `Removed`,
  `Fixed`, `Security`) and the commit message should follow the seven rules for great commit messages.

  Examples:
  - user: "Commit these changes" → inspect the diff, classify the change, and write a compliant commit message
  - user: "Write a commit message for this" → draft a subject/body that follows the seven rules
  - user: "Review my staged commit" → check whether the message and scope support a clear changelog entry
---

# Commit

Use this skill to turn code changes into commit messages that are easy for humans to read and easy to roll up into a real changelog later.

## Standards

- Treat the commit as a curated note for humans, not a raw diff summary.
- Choose language that could be grouped later under one Keep a Changelog section:
  - `Added` for new features
  - `Changed` for behavior or implementation changes in existing functionality
  - `Deprecated` for features that are being phased out
  - `Removed` for removed functionality
  - `Fixed` for bug fixes
  - `Security` for vulnerability or hardening work
- Prefer one coherent change per commit. If the staged work mixes unrelated categories, ask whether to split it.
- Emphasize user-visible or maintainer-relevant impact, not file-by-file mechanics.

## Seven Rules

Apply these rules to every authored commit message:

1. Separate subject from body with a blank line.
2. Limit the subject line to 50 characters.
3. Capitalize the subject line.
4. Do not end the subject line with a period.
5. Use the imperative mood in the subject line.
6. Wrap the body at 72 characters.
7. Use the body to explain what and why, not how.

## Workflow

1. Inspect the staged and unstaged changes that are intended for the commit.
2. Decide the primary changelog category from the list above.
3. Decide whether the work should be a single commit:

- If the change is cohesive, continue.
- If it mixes unrelated concerns, ask the user whether to split it before committing.

4. Draft the subject line:

- Start with a strong imperative verb such as `Add`, `Change`, `Deprecate`, `Remove`, `Fix`, or `Harden`.
- Keep it under 50 characters.
- Make the subject specific enough to stand alone in `git log --oneline`.
- Do not include a trailing period.

5. Draft the body when it adds value:

- First line explains the main effect or scope.
- Second line explains why the change was needed or what problem it solves.
- Wrap at 72 characters.
- Do not narrate implementation trivia unless it materially affects reviewers.

6. Check the message against the seven rules before committing.

## Subject Guidance

- Good subjects usually fit one of these patterns:
  - `Add <feature>`
  - `Change <existing behavior>`
  - `Deprecate <old behavior>`
  - `Remove <obsolete thing>`
  - `Fix <bug or regression>`
  - `Harden <security-sensitive area>`
- Avoid vague subjects such as `Update stuff`, `WIP`, `misc fixes`, or file lists.
- Avoid subjects that merely restate tools used, such as `Refactor component` unless the refactor is the user-relevant change.

## Body Template

Use this template when a body is warranted:

```text
<Subject under 50 chars>

Explain the primary behavior change or scope.
Explain why the change matters, what it fixes, or what it enables.
```

## Review Checklist

- The message maps to one primary Keep a Changelog category.
- The subject is imperative, capitalized, <= 50 characters, and has no period.
- There is a blank line between subject and body.
- The body is wrapped at 72 characters.
- The body explains what changed and why it matters.
- The message avoids raw diff noise and can support a future changelog entry.

## Examples

```text
Add image fallback for article cards

Show a predictable placeholder when article thumbnails fail to load.
This prevents broken card layouts and keeps the feed readable.
```

```text
Fix newsletter signup validation

Reject malformed email input before the request is submitted.
This reduces noisy API errors and gives users faster feedback.
```

```text
Remove unused legacy theme toggle

Delete the dead toggle path left behind after the new theme system.
This reduces confusion and removes an unsupported setting.
```

## When Not To Use This Skill

- The user wants a repository-specific commit convention that conflicts with these rules.
- The task is only to explain git concepts without drafting or reviewing a real commit.
- The work is still exploratory and should not be committed yet.
