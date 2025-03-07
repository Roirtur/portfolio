"use client";

import events from "@/scripts/events";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "@/styles/contact/style.css"

export default function Contact() {
  const [changingRoute, setChangingRoute] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const handler = (data: string) => {
      setChangingRoute(data !== "/contact");
    };

    events.on("routeChanged", handler);

    return () => {
      events.off("routeChanged", handler);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", height: "100vh", width: "100vw"}}
      className={`main-box-contact ${loaded && !changingRoute ? "loaded" : ""}`}>
      <Typography variant="h1" sx={{ fontSize: "2rem" }}>
        Contact
      </Typography>
    </Box>
  );
}