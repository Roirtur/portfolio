"use client";

import React from "react";
import { ThemeProvider, Box, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import theme from "../styles/theme";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const currentPath = usePathname();

  const navItems = [
    { label: "Home", path: "/", icon: <HomeIcon sx={{ fontSize: "2.4rem" }} /> },
    { label: "About", path: "/about", icon: <InfoIcon sx={{ fontSize: "2.4rem" }} /> },
    { label: "Contact", path: "/contact", icon: <ContactMailIcon sx={{ fontSize: "2.4rem" }} /> },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "fixed",
          right: 0,
          top: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 3,
          p: 4,
        }}
      >
        {navItems.map((item) => (
          <Link key={item.path} href={item.path} passHref>
            <IconButton
              className={currentPath === item.path ? "active" : ""}
              size="large"
              sx={{
                p: 1.5,
                boxShadow: 2,
                fontSize: currentPath === item.path ? "2rem" : "1.5rem"
              }}
            >
              {item.icon}
            </IconButton>
          </Link>
        ))}
      </Box>
    </ThemeProvider>
  );
}
