"use client";

import events from "@/scripts/events";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "@/styles/home/style.css"
import { MilkerFont } from "@/styles/theme";
import RotatingDiv from "@/components/Rotate";

export default function Home() {
  const [changingRoute, setChangingRoute] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const handler = (data: string) => {
      setChangingRoute(data !== "/");
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

  const nameAnimation = {
    hidden: { y: -200, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
    exit: { y: -200, opacity: 0, transition: { duration: 0.5, ease: "easeIn"} },
  };
  const name2Animation = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
    exit: { x: -200, opacity: 0, transition: { duration: 0.5, ease: "easeIn"} },
  };

  const headerAnimation = {
    hidden: { y: -200, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { y: -200, opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
  };


  return (
    <Box sx={{ display: "flex", justifyContent: "start", width: "100vw", flexDirection: "column", alignItems: "start" }}
      className={`main-box-home`}>

      <motion.div
        key="name"
        initial="hidden"
        animate={changingRoute ? "exit" : "visible"}
        variants={headerAnimation}
      >
        <Box sx={{
          textAlign: "end",
          fontWeight: "fontWeightRegular",
          fontFamily: `${MilkerFont.style.fontFamily}, Arial, sans-serif`,
          display: "flex",
          alignItems: "flex-end",
          gap: 2,
          height: "20vh",
          width: "100vw",
          pb: 1,
          backgroundColor: "#101214",
          pl: 5,
        }}>
          <motion.div
            key="name"
            initial="hidden"
            animate={changingRoute ? "exit" : "visible"}
            variants={nameAnimation}
            style={{ mixBlendMode: "difference", color: "#E8E2F6" }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: `${MilkerFont.style.fontFamily}, Arial, sans-serif`,
                lineHeight: 0.6,
                zIndex: 1,
                fontSize: "8rem",
              }}
              className={`home-title`}
            >
              Macdonald
            </Typography>
          </motion.div>
        </Box>
      </motion.div>
      <Box>
        <motion.div
          key="fname"
          initial="hidden"
          animate={changingRoute ? "exit" : "visible"}
          variants={name2Animation}
          style={{ mixBlendMode: "difference", color: "#E8E2F6", writingMode: "vertical-rl", textOrientation: "upright" }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: `${MilkerFont.style.fontFamily}, Arial, sans-serif`,
              lineHeight: 1,
              zIndex: 1,
              fontSize: "8rem",
              ml: 18,
              mt: -0.5,
              letterSpacing: "-0.2em", // Adjust the letter spacing to make the gap smaller
            }}
            className={`home-title`}
          >
            rthur
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
}
