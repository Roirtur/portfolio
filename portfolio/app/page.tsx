"use client";

import events from "@/scripts/events";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "@/styles/home/style.css"
import { MilkerFont, SofiaProFont } from "@/styles/theme";
import HomeBackground from "@/components/home/HomeBackground";
import { ReactTyped } from "react-typed";
import Socials from "@/components/home/Socials";
import AboutMe from "@/components/home/AboutMe";
import Skills from "@/components/home/Skills";

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
    exit: { y: -200, opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
  };
  const name2Animation = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
    exit: { x: -200, opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
  };

  const headerAnimation = {
    hidden: { y: -200, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { y: -200, opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "start", width: "100vw", flexDirection: "column", alignItems: "start", overflow: "hidden" }}
      className={`main-box-home`}>
      <HomeBackground changingRoute={changingRoute} />
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
          flexDirection: "row",
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
            style={{ mixBlendMode: "difference", color: "#E8E2F6", userSelect: "none" }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: `${MilkerFont.style.fontFamily}, Arial, sans-serif`,
                lineHeight: 0.6,
                fontSize: "8rem",
                userSelect: "none",
              }}
              className={`home-title`}
            >
              M<span style={{
                color: "#0f402b",
                textShadow: "2px 2px 0 #f1c2d6, 2px 2px 0 #f1c2d6, 2px -2px 0 #f1c2d6, -2px 2px 0 #f1c2d6, -2px -2px 0 #f1c2d6, 2px 0px 0 #f1c2d6, 0px 2px 0 #f1c2d6, -2px 0px 0 #f1c2d6, 0px -2px 0 #f1c2d6",
                userSelect: "none",
              }}>a</span>cdonald
            </Typography>
          </motion.div>
        </Box>
      </motion.div>
      <Box sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        "& > *": {
          flex: "0 0 auto",
        },
        "& > :nth-of-type(1), & > :nth-of-type(2), & > :nth-of-type(3), & > :nth-of-type(4)": {
          height: "54.1vh",
        },
        "& > :nth-of-type(5), & > :nth-of-type(6), & > :nth-of-type(7), & > :nth-of-type(8)": {
          height: "calc(100vh - 54.1vh - 20vh)",
        },
        "& > :nth-of-type(1), & > :nth-of-type(5)": {
          width: "140px",
        },
        "& > :nth-of-type(2), & > :nth-of-type(6)": {
          width: "133px",
        },
        "& > :nth-of-type(3), & > :nth-of-type(7)": {
          width: "680px",
        },
        "& > :nth-of-type(4), & > :nth-of-type(8)": {
          width: "calc(100vw - 953px)",
        },
      }}>
        <Box>
        </Box>
        <motion.div
          key="fname"
          initial="hidden"
          animate={changingRoute ? "exit" : "visible"}
          variants={name2Animation}
          style={{ color: "#f1c2d6", writingMode: "vertical-rl", textOrientation: "upright" }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: `${MilkerFont.style.fontFamily}, Arial, sans-serif`,
              lineHeight: 1,
              zIndex: 1,
              fontSize: "8rem",
              mt: -0.5,
              letterSpacing: "-0.2em", // Adjust the letter spacing to make the gap smaller
              textShadow: "2px 2px 0 #102F22, 2px 2px 0 #102F22, 2px -2px 0 #102F22, -2px 2px 0 #102F22, -2px -2px 0 #102F22, 2px 0px 0 #102F22, 0px 2px 0 #102F22, -2px 0px 0 #102F22, 0px -2px 0 #102F22",
              userSelect: "none", // Make the text unselectable
            }}
            className={`home-title`}
          >
            rthur
          </Typography>
        </motion.div>
        <Box>
          <AboutMe pageChanging={changingRoute} />
        </Box>
        <Box>
          <Skills pageChanging={changingRoute} />
        </Box>
        <Box>
        </Box>
        <Box>
        </Box>
        <Box>
          Education
        </Box>
        <Box>
          <Socials pageChanging={changingRoute} />
        </Box>
      </Box>
    </Box>
  );
}
