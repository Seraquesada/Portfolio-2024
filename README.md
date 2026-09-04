# Serafin Quesada — Portfolio

Personal portfolio built with Next.js (App Router), React, TypeScript and Tailwind CSS.
Live at [serafin-quesada.vercel.app](https://serafin-quesada.vercel.app).

## Stack

|           |                                    |
| --------- | ---------------------------------- |
| Framework | Next.js 16 (App Router, Turbopack) |
| UI        | React 19                           |
| Language  | TypeScript 6                       |
| Styling   | Tailwind CSS 4                     |
| Tooling   | ESLint 9 (flat config), Prettier 3 |

Requires Node.js 20.9 or newer.

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script            | Description                |
| ----------------- | -------------------------- |
| `pnpm dev`        | Start the dev server       |
| `pnpm build`      | Production build           |
| `pnpm start`      | Serve the production build |
| `pnpm lint`       | Run ESLint                 |
| `pnpm format`     | Check formatting           |
| `pnpm format:fix` | Apply formatting           |

## Structure

```
src/app         Layout, page and global styles
src/components  Page sections (about, works, skills, studies, projects, referrals, hire)
src/components/cards  Reusable cards used by those sections
public          Contact icons and the downloadable CV
```

Content lives in typed arrays at the top of each section component, so updating the
portfolio means editing data rather than markup.
