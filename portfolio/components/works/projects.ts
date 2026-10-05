export type Project = {
  id: string;
  title: string;
  shortTitle: string;
  kind: string;
  place: string;
  year: string;
  summary: string;
  contributionLabel: string;
  contributions: string[];
  topics: string[];
  github?: string;
  slides?: string;
  report?: string;
};

// Add future projects here. The wheel and detail panel use this list automatically.
export const projects: Project[] = [
  {
    id: "adtool",
    title: "adtool",
    shortTitle: "adtool",
    kind: "Research internship",
    place: "Inria Bordeaux · FLOWERS team",
    year: "2026",
    summary: "At Inria Bordeaux, I worked with the FLOWERS team on adtool. I used curiosity-driven exploration to look for interference patterns between programs running on multicore systems. The internship also led me to make adtool easier to use for other experiments.",
    contributionLabel: "What I did",
    contributions: [
      "I integrated the interference experiment and compared its coverage with the reference implementation.",
      "I made the program-based parts reusable, so other experiments can use the same exploration workflow.",
      "I also worked on checkpoints, analysis tools, the visual interface, documentation, and tests.",
    ],
    topics: ["Curiosity-driven exploration", "IMGEP", "Interference identification"],
    github: "https://github.com/flowersteam/adtool/",
    slides: "/portfolio/docs/diapo_adtool.pdf",
    report: "/portfolio/docs/report_adtool.pdf",
  },
  {
    id: "peptide",
    title: "Multi-Expert Peptide Pipeline",
    shortTitle: "Peptide",
    kind: "Final master's project",
    place: "Université de Bordeaux · group project",
    year: "2026",
    summary: "For my final master's project, I worked with three classmates on a pipeline that generates peptide candidates. One agent proposes sequences, chemistry and biology agents evaluate them, and an orchestrator decides what to try next.",
    contributionLabel: "What we did",
    contributions: [
      "We combined VAE/CVAE generation with chemistry constraints and a biology score.",
      "We made the agents work in a loop, keeping track of their decisions and the best candidates.",
      "We compared the pipeline with a non-agentic baseline. It helped most on difficult short target lengths.",
    ],
    topics: ["Agentic pipeline", "Peptide generation", "VAE / CVAE"],
    github: "https://github.com/Roirtur/multi-expert-peptide-pipeline",
    slides: "/portfolio/docs/diapo_peptides.pdf",
    report: "/portfolio/docs/report_peptides.pdf",
  },
];
