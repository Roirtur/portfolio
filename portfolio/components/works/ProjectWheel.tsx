"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import RotatingDiv from "@/components/Rotate";
import { projects } from "@/components/works/projects";
import { MilkerFont } from "@/styles/theme";
import "@/styles/works/style.css";

export default function ProjectWheel({ activeIndex, turn, onSelect, compact = false }: { activeIndex: number; turn: number; onSelect: (index: number) => void; compact?: boolean }) {
  const [stageSize, setStageSize] = useState(550);
  const stageRef = useRef<HTMLDivElement>(null);
  const count = projects.length;
  const radius = Math.min(stageSize * 0.31, compact ? 120 : 225);
  const step = 360 / Math.min(count, 5);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new ResizeObserver(() => setStageSize(Math.min(stage.clientWidth, stage.clientHeight)));
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`works-wheel-stage ${compact ? "is-compact" : ""}`} ref={stageRef} aria-label={compact ? "Projects" : "Choose a project"}>
      <motion.div className="works-wheel-ring" style={{ width: radius * 2, height: radius * 2, marginLeft: -radius, marginTop: -radius }} animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 75, ease: "linear" }} aria-hidden="true" />
      <div className="works-wheel-inner" style={{ fontFamily: MilkerFont.style.fontFamily }} aria-hidden="true">
        {compact ? String(count).padStart(2, "0") : String(activeIndex + 1).padStart(2, "0")}
        {!compact && <span> / {String(count).padStart(2, "0")}</span>}
      </div>
      <motion.div className="works-wheel-rotor" animate={{ rotate: -turn * step }} transition={{ type: "spring", stiffness: 85, damping: 18 }}>
        {projects.map((project, index) => {
          const forward = (index - activeIndex + count) % count;
          const relative = forward > count / 2 ? forward - count : forward;
          const visible = count <= 5 || Math.abs(relative) <= 2;
          return (
            <div key={project.id} className="works-wheel-position" aria-hidden={!visible} style={{ transform: `rotate(${index * step}deg) translateX(${radius}px)`, zIndex: index === activeIndex ? 2 : 1 }}>
              <motion.div className="works-wheel-upright" animate={{ rotate: turn * step - index * step, opacity: visible ? 1 : 0, scale: index === activeIndex && !compact ? 1.08 : 0.88 }} transition={{ type: "spring", stiffness: 85, damping: 18 }} style={{ pointerEvents: visible ? "auto" : "none" }}>
                <RotatingDiv>
                  <button type="button" className={`works-wheel-item ${index === activeIndex && !compact ? "is-active" : ""}`} style={{ fontFamily: MilkerFont.style.fontFamily }} onClick={() => onSelect(index)} aria-label={compact ? `Open ${project.title}` : `View ${project.title}`} aria-pressed={compact ? undefined : index === activeIndex} tabIndex={visible ? 0 : -1}>
                    <span className="works-wheel-item-number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="works-wheel-item-title">{project.shortTitle}</span>
                  </button>
                </RotatingDiv>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
