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
    summary: "I extended adtool, a curiosity-driven exploration library, to identify interference patterns between programs on multicore systems. The work connected an IMGEP search loop to a simulator and turned the experiment into a reusable program-based exploration workflow.",
    contributionLabel: "What I worked on",
    contributions: [
      "Integrated the memory-interference experiment and compared its behavior-space coverage with the reference implementation.",
      "Generalized the experiment into reusable components for systems whose inputs are programs or structured instructions.",
      "Reworked checkpoints, analysis tools, the visual interface, documentation, and smoke tests to make the library easier for researchers to use.",
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
    summary: "With three classmates, I built a proof-of-concept agentic pipeline for in silico peptide design. A generator proposes sequences; chemistry and biology agents evaluate them; an orchestrator iterates and ranks candidates against a non-agentic baseline.",
    contributionLabel: "Project work",
    contributions: [
      "Combined VAE/CVAE-based generation, physicochemical constraints, and an embedding-based biology score.",
      "Built an iterative propose–filter–score workflow with traceable ranking across rounds.",
      "Evaluated validity, diversity, scores, and runtime; the strongest gains appeared on difficult short target lengths.",
    ],
    topics: ["Agentic pipeline", "Peptide generation", "VAE / CVAE"],
    github: "https://github.com/Roirtur/multi-expert-peptide-pipeline",
    slides: "/portfolio/docs/diapo_peptides.pdf",
    report: "/portfolio/docs/report_peptides.pdf",
  },
];
