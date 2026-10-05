"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import events from "@/scripts/events";
import Skills from "@/components/skills/Skills";
import { MilkerFont, SofiaProFont } from "@/styles/theme";
import "@/styles/skills/style.css";

type Experience = {
  role: string;
  roleHref?: string;
  roleExternal?: boolean;
  employer: string;
  employerHref: string;
  dates: string;
  duration: string;
};

const experience: Experience[] = [
  { role: "Research Intern in Artificial Intelligence", roleHref: "/works?project=adtool", roleExternal: false, employer: "Inria - FLOWERS team", employerHref: "https://flowers.inria.fr/", dates: "Apr - Sep 2026", duration: "6 months" },
  { role: "Teaching Assistant and Tutoring", roleHref: "https://lstinfo.emi.u-bordeaux.fr/wiki/doku.php?id=tutorat", roleExternal: true, employer: "Université de Bordeaux", employerHref: "https://sciences-et-technologies.u-bordeaux.fr/", dates: "Sep 2023 - Jun 2025", duration: "2 years" },
  { role: "Part-time Developer", employer: "AJ-Innov", employerHref: "https://www.aj-innov.fr/", dates: "Oct 2024 - Sep 2025", duration: "1 year" },
  { role: "Web Development Intern", employer: "AJ-Innov", employerHref: "https://www.aj-innov.fr/", dates: "Jun - Sep 2024", duration: "3 months" },
  { role: "Web Development Intern", employer: "Web Stratégie", employerHref: "https://www.webstrategies.fr/", dates: "Jul - Sep 2023", duration: "2 months" },
];

export default function SkillsPage() {
  const [changingRoute, setChangingRoute] = useState(false);

  useEffect(() => {
    const handler = (route: string) => setChangingRoute(route !== "/skills");
    events.on("routeChanged", handler);
    return () => events.off("routeChanged", handler);
  }, []);

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: changingRoute ? 0 : 1 }} transition={{ duration: 0.5 }} className="skills-page">
      <Box className="skills-intro">
        <motion.div className="skills-intro-inner" initial={{ x: "-100%" }} animate={{ x: changingRoute ? "-100%" : 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <Typography component="h1" sx={{ fontFamily: MilkerFont.style.fontFamily, fontSize: "clamp(3rem, 5vw, 6rem)", color: "#C8C2CF", lineHeight: 1 }}>Skills</Typography>
          <Typography className="skills-intro-copy" sx={{ fontFamily: MilkerFont.style.fontFamily, fontSize: "clamp(1.25rem, 1.6vw, 1.8rem)", lineHeight: 1.4, color: "#f1c2d6" }}>
            These are the tools and languages I&apos;ve picked up through my jobs, internships, and studies.
          </Typography>
          <Box component="section" className="skills-experience" aria-labelledby="skills-experience-heading">
            <Typography component="h2" id="skills-experience-heading" sx={{ fontFamily: MilkerFont.style.fontFamily, mt: 3 }}>Experience</Typography>
            <Box component="ul" className="skills-experience-list">
              {experience.map((job) => (
                <Box component="li" key={`${job.employer}-${job.role}`} sx={{ fontFamily: SofiaProFont.style.fontFamily }}>
                  <Typography component="h3" sx={{ fontFamily: SofiaProFont.style.fontFamily }}>
                    {job.roleHref ? (
                      <Link href={job.roleHref} target={job.roleExternal ? "_blank" : undefined} rel={job.roleExternal ? "noopener noreferrer" : undefined} aria-label={`${job.role}, ${job.roleExternal ? "opens in a new tab" : "view project"}`}>
                        {job.role}<span className="skills-link-icon" aria-hidden="true">↗</span>
                      </Link>
                    ) : job.role}
                  </Typography>
                  <Typography component="p" className="skills-job-employer" sx={{ fontFamily: SofiaProFont.style.fontFamily }}>
                    <a href={job.employerHref} target="_blank" rel="noopener noreferrer" aria-label={`${job.employer}, opens in a new tab`}>
                      {job.employer}<span className="skills-link-icon" aria-hidden="true">↗</span>
                    </a>
                  </Typography>
                  <Typography component="p" className="skills-job-dates" sx={{ fontFamily: SofiaProFont.style.fontFamily }}>{job.dates} - {job.duration}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Box>
      <Box className="skills-content"><Skills pageChanging={changingRoute} /></Box>
    </motion.main>
  );
}
