"use client";

import React from "react";
import { ThemeProvider, Box, Typography } from "@mui/material";
import theme from "@/styles/theme";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "@/styles/navbar/style.css";

export default function Navbar() {
  const currentPath = usePathname();

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "fixed",
          right: 0,
          top: 0,
          display: "flex",
          flexDirection: "row",
          gap: 6,
          alignItems: "flex-end",
          p: 2,
          pr: 4,
        }}
      >
        <Link href={"/"}>
          <Box
            sx={{
              position: "relative",
              px: 2,
              py: 0.5,
              pointerEvents: currentPath === "/" ? "none" : "auto",
            }}
            className={`nav-item ${currentPath === "/" ? "active" : ""}`}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
              }}
              className="corner-container">
              <Box className="tr corner horizontal" />
              <Box className="rt corner vertical" />
              <Box className="tl corner horizontal" />
              <Box className="lt corner vertical" />
              <Box className="br corner horizontal" />
              <Box className="rb corner vertical" />
              <Box className="bl corner horizontal" />
              <Box className="lb corner vertical" />
            </Box>
            <Box className="revert-colors" />
            <Typography className="text">Works</Typography>
          </Box>
        </Link>

        <Link href={"/contact"}>
          <Box
            sx={{
              position: "relative",
              px: 2,
              py: 0.5,
              // pointerEvents: currentPath === "/contact" ? "none" : "auto",
            }}
            className={`nav-item ${currentPath === "/contact" ? "active" : ""}`}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
              }}
              className="corner-container">
              <Box className="tr corner horizontal" />
              <Box className="rt corner vertical" />
              <Box className="tl corner horizontal" />
              <Box className="lt corner vertical" />
              <Box className="br corner horizontal" />
              <Box className="rb corner vertical" />
              <Box className="bl corner horizontal" />
              <Box className="lb corner vertical" />
            </Box>
            <Box className="revert-colors" />
            <Typography className="text">Contact</Typography>
          </Box>
        </Link>
      </Box>
    </ThemeProvider>
  );
}
