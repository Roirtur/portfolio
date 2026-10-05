"use client";

import { Box, IconButton, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import events from "@/scripts/events";
import CornerFrame from "@/components/CornerFrame";
import RotatingDiv from "@/components/Rotate";
import ProjectWheel from "@/components/works/ProjectWheel";
import { projects } from "@/components/works/projects";
import { MilkerFont, SofiaProFont } from "@/styles/theme";
import "@/styles/works/style.css";

function ResourceLink({ href, label }: { href: string; label: string }) {
  return (
    <RotatingDiv>
      <Box component="a" href={href} target="_blank" rel="noopener noreferrer" className="nav-item content-link works-link">
        <CornerFrame />
        <Typography className="text" sx={{ fontFamily: SofiaProFont.style.fontFamily }}>{label} ↗</Typography>
      </Box>
    </RotatingDiv>
  );
}

export default function Works() {
  const [changingRoute, setChangingRoute] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [turn, setTurn] = useState(0);
  const activeIndexRef = useRef(0);
  const activeProject = projects[activeIndex];
  const count = projects.length;

  const selectProject = useCallback((target: number, direction?: number) => {
    const current = activeIndexRef.current;
    if (target === current) return;
    const forward = (target - current + count) % count;
    const delta = direction ?? (forward > count / 2 ? forward - count : forward);
    activeIndexRef.current = target;
    setActiveIndex(target);
    setTurn((previous) => previous + delta);
  }, [count]);

  useEffect(() => {
    const handler = (route: string) => setChangingRoute(route !== "/works");
    events.on("routeChanged", handler);
    return () => events.off("routeChanged", handler);
  }, []);

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("project");
    const index = projects.findIndex((project) => project.id === id);
    if (index > 0) selectProject(index);
  }, [selectProject]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") selectProject((activeIndexRef.current + 1) % count, 1);
      if (event.key === "ArrowLeft") selectProject((activeIndexRef.current - 1 + count) % count, -1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [count, selectProject]);

  return (
    <motion.main className="works-page" initial={{ opacity: 0 }} animate={{ opacity: changingRoute ? 0 : 1 }} transition={{ duration: 0.5 }}>
      <section className="works-wheel-side" aria-label="Project selector">
        <Box className="works-wheel-heading">
          <Typography component="h1" sx={{ fontFamily: MilkerFont.style.fontFamily, fontSize: "clamp(3.6rem, 6vw, 7rem)", lineHeight: 1, color: "#C8C2CF" }}>Projects</Typography>
          <Typography sx={{ fontFamily: SofiaProFont.style.fontFamily, color: "#f1c2d6", fontSize: "1.15rem" }}>Pick a project on the wheel.</Typography>
        </Box>
        <ProjectWheel activeIndex={activeIndex} turn={turn} onSelect={selectProject} />

        <Box className="works-wheel-footer">
          <Typography sx={{ fontFamily: SofiaProFont.style.fontFamily, color: "#C8C2CF", fontSize: "1rem" }}>← → &nbsp; Browse projects</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <RotatingDiv><IconButton className="works-wheel-control" aria-label="Previous project" onClick={() => selectProject((activeIndexRef.current - 1 + count) % count, -1)}><ChevronLeftIcon /></IconButton></RotatingDiv>
            <RotatingDiv><IconButton className="works-wheel-control" aria-label="Next project" onClick={() => selectProject((activeIndexRef.current + 1) % count, 1)}><ChevronRightIcon /></IconButton></RotatingDiv>
          </Box>
        </Box>
      </section>

      <section className="works-detail-side" aria-label="Selected project" style={{ fontFamily: SofiaProFont.style.fontFamily }}>
        <AnimatePresence mode="wait">
          <motion.div key={activeProject.id} className="works-detail" initial={{ opacity: 0, x: 45 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -45 }} transition={{ duration: 0.35 }}>
            <Typography className="works-detail-index" sx={{ fontFamily: MilkerFont.style.fontFamily }}>{String(activeIndex + 1).padStart(2, "0")}<span> / {String(count).padStart(2, "0")}</span></Typography>
            <Typography sx={{ fontFamily: SofiaProFont.style.fontFamily, color: "#0f402b", fontSize: "1.1rem", mt: 3 }}>{activeProject.kind} · {activeProject.year}</Typography>
            <Typography component="h2" sx={{ fontFamily: MilkerFont.style.fontFamily, fontSize: "clamp(3.2rem, 5vw, 6rem)", lineHeight: 1, mt: 1, color: "#101214" }}>{activeProject.title}</Typography>
            <Typography sx={{ fontFamily: SofiaProFont.style.fontFamily, color: "#0f402b", fontSize: "1.15rem", mt: 1 }}>{activeProject.place}</Typography>
            <Typography className="works-summary" sx={{ fontFamily: SofiaProFont.style.fontFamily }}>{activeProject.summary}</Typography>
            <Box className="works-topics">{activeProject.topics.map((topic) => <span key={topic}>{topic}</span>)}</Box>
            <Box className="works-contributions">
              <Typography component="h3" sx={{ fontFamily: MilkerFont.style.fontFamily, fontSize: "1.8rem", color: "#0f402b" }}>{activeProject.contributionLabel}</Typography>
              <ul>{activeProject.contributions.map((item) => <li key={item}>{item}</li>)}</ul>
            </Box>
            <Box className="works-links">
              {activeProject.github && <ResourceLink href={activeProject.github} label="GitHub" />}
              {activeProject.slides && <ResourceLink href={activeProject.slides} label="Slides" />}
              {activeProject.report && <ResourceLink href={activeProject.report} label="Report" />}
            </Box>
          </motion.div>
        </AnimatePresence>
      </section>
    </motion.main>
  );
}
