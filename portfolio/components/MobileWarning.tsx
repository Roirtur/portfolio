"use client";

import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { MilkerFont, SofiaProFont } from "@/styles/theme";
import "@/styles/mobile-warning/style.css";

export default function MobileWarning() {
  return (
    <Box
      className="mobile-warning-container"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        padding: 2,
        position: "relative",
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Box textAlign="center">
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontFamily: MilkerFont.style.fontFamily,
                fontSize: { xs: "2.5rem", sm: "3.5rem" },
                fontWeight: "bold",
                marginBottom: 3,
                background: "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Oops!
            </Typography>
            
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontFamily: SofiaProFont.style.fontFamily,
                fontSize: { xs: "1.5rem", sm: "2rem" },
                fontWeight: "600",
                marginBottom: 3,
                color: "#e0e0e0",
              }}
            >
              Mobile Version Not Available
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                fontFamily: SofiaProFont.style.fontFamily,
                fontSize: { xs: "1rem", sm: "1.2rem" },
                lineHeight: 1.6,
                marginBottom: 2,
                color: "#b0b0b0",
              }}
            >
              Sorry, but the mobile format for this portfolio is not available yet. 
              This website is currently optimized for desktop viewing only.
            </Typography>
            
            <Typography
              variant="body2"
              sx={{
                fontFamily: SofiaProFont.style.fontFamily,
                fontSize: { xs: "0.9rem", sm: "1rem" },
                color: "#888",
                marginTop: 4,
              }}
            >
              Please visit this site on a desktop or laptop computer for the best experience.
            </Typography>
            
            <motion.div
              className="floating-emoji"
              style={{ marginTop: "2rem" }}
            >
              <Typography
                sx={{
                  fontSize: "4rem",
                  filter: "grayscale(0.5)",
                }}
              >
                📱💻
              </Typography>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
