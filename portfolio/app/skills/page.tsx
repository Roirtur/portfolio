"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import events from "@/scripts/events";
import Skills from "@/components/skills/Skills";
import { MilkerFont } from "@/styles/theme";
import "@/styles/skills/style.css";

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
        <motion.div initial={{ x: "-100%" }} animate={{ x: changingRoute ? "-100%" : 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <Typography component="h1" sx={{ fontFamily: MilkerFont.style.fontFamily, fontSize: "clamp(3rem, 5vw, 6rem)", color: "#C8C2CF", lineHeight: 1 }}>Skills</Typography>
          <Typography sx={{ fontFamily: MilkerFont.style.fontFamily, fontSize: "clamp(1.25rem, 1.6vw, 1.8rem)", lineHeight: 1.4, mt: 4, color: "#f1c2d6" }}>
            These are the tools and languages I&apos;ve picked up through my jobs, internships, and studies.
          </Typography>
        </motion.div>
      </Box>
      <Box className="skills-content"><Skills pageChanging={changingRoute} /></Box>
    </motion.main>
  );
}
