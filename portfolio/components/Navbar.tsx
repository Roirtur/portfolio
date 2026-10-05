"use client";

import { Box, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import RotatingDiv from "./Rotate";
import CornerFrame from "./CornerFrame";
import "@/styles/navbar/style.css";

const links = [
  { label: "Home", route: "/" },
  { label: "Skills", route: "/skills" },
  { label: "Projects", route: "/works" },
];

export default function Navbar({ onRouteChange }: { onRouteChange: (route: string) => void }) {
  const pathname = usePathname();
  const currentRoute = pathname.replace(/\/+$/, "") || "/";
  const [pendingRoute, setPendingRoute] = useState<string | null>(null);
  const activeRoute = pendingRoute ?? currentRoute;

  useEffect(() => {
    setPendingRoute(null);
  }, [currentRoute]);

  return (
    <Box component="nav" aria-label="Main navigation" sx={{ position: "fixed", right: 0, top: 0, display: "flex", flexDirection: "row", gap: 6, alignItems: "flex-end", p: 2, pr: 4, zIndex: 999, mixBlendMode: "exclusion" }}>
      {links.map(({ label, route }) => {
        const isActive = activeRoute === route;
        return <RotatingDiv key={route}>
          <Box
            component="button"
            type="button"
            onClick={() => {
              if (isActive) return;
              setPendingRoute(route);
              onRouteChange(route);
            }}
            className={`nav-item ${isActive ? "active" : ""}`}
            aria-current={isActive ? "page" : undefined}
            sx={{ position: "relative", px: 2, cursor: "pointer", border: 0, background: "transparent", font: "inherit" }}
          >
            <CornerFrame />
            <Typography className="text" sx={{ userSelect: "none" }}>{label}</Typography>
          </Box>
        </RotatingDiv>;
      })}
    </Box>
  );
}
