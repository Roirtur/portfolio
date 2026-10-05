"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import events from "@/scripts/events";
import Skills from "@/components/research/Skills";
import { MilkerFont, SofiaProFont } from "@/styles/theme";
import "@/styles/research/style.css";

export default function Research() {
  const [changingRoute, setChangingRoute] = useState(false);

  useEffect(() => {
    const handler = (route: string) => setChangingRoute(route !== "/research");
    events.on("routeChanged", handler);
    return () => events.off("routeChanged", handler);
  }, []);

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: changingRoute ? 0 : 1 }} transition={{ duration: 0.5 }} className="research-page">
      <Box className="research-intro">
        <motion.div initial={{ x: "-100%" }} animate={{ x: changingRoute ? "-100%" : 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <Typography component="h1" sx={{ fontFamily: MilkerFont.style.fontFamily, fontSize: "clamp(3rem, 5vw, 6rem)", color: "#C8C2CF", lineHeight: 1 }}>Research<br />profile</Typography>
          <Typography sx={{ fontFamily: SofiaProFont.style.fontFamily, fontSize: "clamp(1.25rem, 1.6vw, 1.8rem)", lineHeight: 1.4, mt: 4, color: "#f1c2d6" }}>
            Master&apos;s graduate in Artificial Intelligence, seeking a PhD thesis in AI. My interests include machine learning, reinforcement learning, and symbolic AI.
          </Typography>
        </motion.div>
        <Typography sx={{ fontFamily: SofiaProFont.style.fontFamily, color: "#C8C2CF", fontSize: "1rem" }}>Université de Bordeaux · 2026</Typography>
      </Box>
      <Box className="research-skills"><Skills pageChanging={changingRoute} /></Box>
    </motion.main>
  );
}
