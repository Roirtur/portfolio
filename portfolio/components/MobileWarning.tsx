"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { MilkerFont, SofiaProFont } from "@/styles/theme";
import "@/styles/mobile-warning/style.css";

export default function MobileWarning() {
  return (
    <Box
      className="mobile-warning-container"
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingTop: 0,
        paddingBottom: 0,
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontFamily: MilkerFont.style.fontFamily,
            fontSize: "clamp(4rem, 15vw, 8rem)",
            fontWeight: "bold",
            marginBottom: "clamp(1rem, 3vh, 2rem)",
            background: "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            lineHeight: 1.1,
          }}
        >
          Oops!
        </Typography>
        
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontFamily: SofiaProFont.style.fontFamily,
            fontSize: "clamp(2.2rem, 9vw, 4rem)",
            fontWeight: "600",
            marginBottom: "clamp(1rem, 2vh, 1.5rem)",
            color: "#e0e0e0",
            lineHeight: 1.2,
          }}
        >
          Mobile Version Not Available
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            fontFamily: SofiaProFont.style.fontFamily,
            fontSize: "clamp(1.2rem, 5vw, 1.8rem)",
            lineHeight: 1.3,
            marginBottom: "clamp(0.5rem, 1.5vh, 1rem)",
            color: "#b0b0b0",
            maxWidth: "100%",
            textAlign: "center",
          }}
        >
          Sorry, but the mobile format for this portfolio is not available yet. 
          This website is currently optimized for desktop viewing only.
        </Typography>
        
        <Typography
          variant="body2"
          sx={{
            fontFamily: SofiaProFont.style.fontFamily,
            fontSize: "clamp(1rem, 4.5vw, 1.5rem)",
            color: "#888",
            marginBottom: "clamp(1rem, 2vh, 1.5rem)",
            lineHeight: 1.3,
            textAlign: "center",
          }}
        >
          Please visit this site on a desktop or laptop computer for the best experience.
        </Typography>
        
        <motion.div
          className="floating-emoji"
          style={{ marginTop: "clamp(0.5rem, 1vh, 1rem)" }}
        >
          <Typography
            sx={{
              fontSize: "clamp(4rem, 12vw, 6rem)",
              filter: "grayscale(0.5)",
              lineHeight: 1,
            }}
          >
            📱💻
          </Typography>
        </motion.div>
      </motion.div>
    </Box>
  );
}
