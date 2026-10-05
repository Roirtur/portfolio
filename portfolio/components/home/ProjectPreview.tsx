import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { SofiaProFont } from "@/styles/theme";
import CornerLink from "@/components/CornerLink";
import OutlinedHeading from "@/components/OutlinedHeading";
import { projects } from "@/components/works/projects";

export default function ProjectPreview({ pageChanging }: { pageChanging: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={pageChanging ? { opacity: 0, x: 60 } : { opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: pageChanging ? 0 : 0.7 }}
      style={{ width: "100%", height: "100%" }}
    >
      <Box sx={{ height: "100%", p: 4, display: "flex", flexDirection: "column", justifyContent: "center", gap: 2 }}>
        <OutlinedHeading>Selected projects</OutlinedHeading>
        <Typography sx={{ fontFamily: SofiaProFont.style.fontFamily, fontSize: "clamp(1rem, 1.35vw, 1.4rem)", lineHeight: 1.4 }}>
          Explore {projects.length} projects, including curiosity-driven discovery and agentic peptide design.
        </Typography>
        <Box sx={{ alignSelf: "flex-start" }}><CornerLink href="/works">Explore projects</CornerLink></Box>
      </Box>
    </motion.div>
  );
}
