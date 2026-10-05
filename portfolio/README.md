# Arthur Macdonald portfolio

Static Next.js portfolio with three pages:

- `/` introduces Arthur's AI thesis search, education, and contact links.
- `/research` presents research interests and skills, with other skills second.
- `/works` presents projects in a selectable wheel with details, code, slides, and reports.

## Add a project

Add an entry to the `projects` array in `components/works/projects.ts`. The wheel, detail panel, and project count on Home update from that list. Repository, slides, and report links are optional. Put PDFs in `public/docs/` and link them with the `/portfolio/docs/` prefix for GitHub Pages.

## Development

```bash
npm install
npm run dev
```

`npm run build` produces the GitHub Pages export in `out/` with the `/portfolio` base path.
