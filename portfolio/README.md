# Arthur Macdonald portfolio

Static Next.js portfolio with three pages:

- `/` introduces Arthur's AI thesis search, education, and contact links.
- `/skills` presents research and AI skills first, with other skills second.
- `/works` presents projects in a selectable wheel with details, code, slides, and reports.

## Add a project

To add another project:

1. Open `components/works/projects.ts` and add an object to the `projects` array. Copy an existing object as a starting point. Give it a unique, URL-friendly `id` and a short `shortTitle` that fits on the wheel.
2. Fill in the title, project type (`kind`), place, year, summary paragraphs, contributions, and topics in your own words. `summary` is an array, so you can use one paragraph for a short project or several for a larger one. `github`, `slides`, and `report` are optional; remove any you do not have yet.
3. If you have PDFs, put them in `public/docs/` and set their paths to `/portfolio/docs/your-file.pdf`.

The Home wheel and the Projects page read that same list, so the new project appears in both places automatically. Its order in the array sets its number on the wheel.

## Development

```bash
npm install
npm run dev
```

`npm run build` produces the GitHub Pages export in `out/` with the `/portfolio` base path.
