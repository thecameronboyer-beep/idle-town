# Idle Town Agent Handoff

Use one planning agent to coordinate shared files, then assign worker agents by ownership area. Workers should only edit their assigned files. If they need a shared/core file changed, they should stop and explain why.

## Shared/Core Files

- `src/types.ts` - shared IDs and `GameState`; coordinate all edits.
- `src/state/createInitialState.ts` - default state and new save slices.
- `src/systems/persistence.ts` - save/load and migrations.
- `src/main.ts` - app boot, ticking, rendering, save cadence.
- `src/ui/render.ts` and `src/style.css` - currently broad UI surfaces; avoid multiple UI agents here at once.

## Current Ownership Areas

- Action runtime: `src/systems/actions.ts`
- Action loop storage/editing: `src/systems/actionLoops.ts`
- Action routing/travel/location helpers: `src/systems/actionRouting.ts`
- Action rewards/completion/tool wear: `src/systems/actionRewards.ts`
- Current action state helpers: `src/systems/actionState.ts`
- Skills/XP/prestige: `src/systems/skills.ts`
- Inventory/resources: `src/data/resources.ts`, `src/systems/inventory.ts`
- Tools/buildings/camp/crafting: `src/data/craftables.ts`, `src/systems/tools.ts`, `src/systems/buildings.ts`, `src/systems/camp.ts`, `src/systems/crafting.ts`
- Unlocks/progression: `src/systems/progression.ts`
- Logs: `src/systems/log.ts`
- Character creator: `character-creator.html`, `src/characterCreator.ts`, `src/ui/characterCreator.css`
- Static action definitions: `src/data/actions.ts`

## Worker Rules

- Only edit assigned files.
- Do not rename shared IDs or `GameState` fields without approval.
- Do not change save format unless assigned persistence work.
- Do not refactor unrelated systems.
- Run `npm run build` before handing work back.
- Mention any files you needed but were not assigned.

## Starter Prompt

```text
You are working on Idle Town, a Vite + TypeScript idle survival game.

Before changing code:
1. Read AGENTS.md.
2. Check git status.
3. Identify the files assigned to you.
4. Do not edit outside your assigned ownership area.
5. If a shared/core file must change, stop and explain the exact change needed.

My assigned area is:
- [put files or ownership area here]

Task:
- [put the task here]

Please implement the task, keep changes scoped, run npm run build, and summarize changed files.
```
