"use client";

import events from "@/scripts/events";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "@/styles/home/style.css"
import { MilkerFont } from "@/styles/theme";
import HomeBackground from "@/components/home/HomeBackground";
import Socials from "@/components/home/Socials";
import AboutMe from "@/components/home/AboutMe";
import Education from "@/components/home/Education";
import ProjectPreview from "@/components/home/ProjectPreview";

export default function Home() {
  const [changingRoute, setChangingRoute] = useState<boolean>(false);

  useEffect(() => {
    const handler = (data: string) => {
      setChangingRoute(data !== "/");
    };

    events.on("routeChanged", handler);

    return () => {
      events.off("routeChanged", handler);
    };
  }, []);

  const nameAnimation = {
    hidden: { y: -200, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.2 } },
    exit: { y: -200, opacity: 0, transition: { duration: 0.5, ease: "easeIn" as const } },
  };
  const verticalNameAnimation = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.2 } },
    exit: { x: -200, opacity: 0, transition: { duration: 0.5, ease: "easeIn" as const } },
  };
  const headerAnimation = {
    hidden: { y: -200, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
    exit: { y: -200, opacity: 0, transition: { duration: 0.5, ease: "easeIn" as const } },
  };

  return (
    <Box className="main-box-home">
      <HomeBackground changingRoute={changingRoute} />
      <motion.div
        className="home-name-wrapper"
        key="name"
        initial="hidden"
        animate={changingRoute ? "exit" : "visible"}
        variants={headerAnimation}
      >
        <Box className="home-name-header">
          <motion.div
            initial="hidden"
            animate={changingRoute ? "exit" : "visible"}
            variants={nameAnimation}
            className="home-name-mark"
          >
            <Typography
              component="h1"
              aria-label="Arthur Macdonald"
              className={`home-title ${MilkerFont.className}`}
              style={{ fontFamily: MilkerFont.style.fontFamily }}
            >
              <span className="home-name-m" aria-hidden="true">M</span>
              <span className="home-name-a" aria-hidden="true">A</span>
              <span className="home-name-rest" aria-hidden="true">cdonald</span>
            </Typography>
          </motion.div>
        </Box>
      </motion.div>
      <Box className="home-content-grid" sx={{
        "& > *": {
          overflow: "hidden"
        },
        "& > :nth-of-type(3), & > :nth-of-type(4), & > :nth-of-type(7), & > :nth-of-type(8)": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      }}>
        <Box>
        </Box>
        <motion.div
          className="home-name-column"
          initial="hidden"
          animate={changingRoute ? "exit" : "visible"}
          variants={verticalNameAnimation}
        >
          <span className={`home-name-vertical ${MilkerFont.className}`} aria-hidden="true">
            {"rthur".split("").map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </span>
        </motion.div>
        <Box>
          <AboutMe pageChanging={changingRoute} />
        </Box>
        <Box>
          <ProjectPreview pageChanging={changingRoute} />
        </Box>
        <motion.div
          style={{ position: "relative" }}
          initial={{ opacity: 0 }}
          animate={changingRoute ? { opacity: 0, transition: { duration: 0.5, ease: "easeIn" } } : { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }}
        >
          <Typography sx={{ 
            position: "absolute", 
            bottom: { xs: 2, sm: 3, md: 5 }, 
            left: { xs: 5, sm: 8, md: 10 },
            fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1rem" },
            color: "#0f402b"
          }}>
            &copy; {new Date().getFullYear()}
          </Typography>
        </motion.div>
        <Box>
        </Box>
        <Box>
          <Education pageChanged={changingRoute} />
        </Box>
        <Box>
          <Socials pageChanging={changingRoute} />
        </Box>
      </Box>
    </Box>
  );
}
