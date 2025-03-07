"use client";

import React, { useState, useEffect } from "react";
import { ThemeProvider, Box, Typography } from "@mui/material";
import theme from "@/styles/theme";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "@/styles/navbar/style.css";
import RotatingDiv from "./Rotate";

interface NavbarProps {
  onRouteChange: (route: string) => void;
}

export default function Navbar({ onRouteChange }: NavbarProps) {
  const initialPath = usePathname();
  const [currentPath, setCurrentPath] = useState(initialPath);

  useEffect(() => {
    setCurrentPath(initialPath);
  }, [initialPath]);

  const handleRouteChange = (route: string) => {
    if (route === currentPath) return;
    setCurrentPath(route);
    onRouteChange(route);
  };

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
          zIndex: 999,
        }}
        style={{ mixBlendMode: "exclusion" }}
      >

        <RotatingDiv>
          <Box
            onClick={() => handleRouteChange("/")}
            sx={{
              position: "relative",
              px: 2,
              cursor: "pointer",
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
              className="corner-container"
            >
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
            <Typography className="text" sx={{ userSelect: "none" }}>
              Home
            </Typography>
          </Box>
        </RotatingDiv>
        <RotatingDiv>
          <Box
            onClick={() => handleRouteChange("/works")}
            sx={{
              position: "relative",
              px: 2,
              cursor: "pointer",
            }}
            className={`nav-item ${currentPath === "/works" ? "active" : ""}`}
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
              className="corner-container"
            >
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
            <Typography className="text" sx={{ userSelect: "none" }}>
              Works
            </Typography>
          </Box>

        </RotatingDiv>

        <RotatingDiv>
          <Box
            onClick={() => handleRouteChange("/contact")}
            sx={{
              position: "relative",
              px: 2,
              cursor: "pointer",
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
              className="corner-container"
            >
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
            <Typography className="text" sx={{ userSelect: "none" }}>
              Contact
            </Typography>
          </Box>
        </RotatingDiv>
      </Box>
    </ThemeProvider>
  );
}
