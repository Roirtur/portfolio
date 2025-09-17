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
import Education from "@/components/home/Eduaction";

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
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.2 } },
    exit: { y: -200, opacity: 0, transition: { duration: 0.5, ease: "easeIn" as const } },
  };
  const name2Animation = {
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
          height: { xs: "15vh", sm: "18vh", md: "20vh" },
          width: "100vw",
          pb: 1,
          backgroundColor: "#101214",
          pl: { xs: 2, sm: 4, md: 6 },
          position: "relative",
        }}>
          <motion.div
            key="name"
            initial="hidden"
            animate={changingRoute ? "exit" : "visible"}
            variants={nameAnimation}
            style={{ mixBlendMode: "difference", color: "#E8E2F6", userSelect: "none", position: "absolute", left: "3%", top: "50%", transform: "translateY(-50%)" }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: `${MilkerFont.style.fontFamily}, Arial, sans-serif`,
                fontSize: "7rem",
                userSelect: "none",
                letterSpacing: 7,
                alignContent: "bottom",
                lineHeight: "0.6",
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
        display: "grid",
        gridTemplateColumns: { 
          xs: "minmax(80px, 1fr) minmax(100px, 1fr) minmax(300px, 3fr) minmax(200px, 2fr)",
          sm: "minmax(100px, 1fr) minmax(120px, 1fr) minmax(400px, 3fr) minmax(250px, 2fr)",
          md: "minmax(120px, 1fr) minmax(133px, 1fr) minmax(500px, 3fr) minmax(300px, 2fr)",
          lg: "140px 133px minmax(600px, 1fr) minmax(350px, 1fr)",
          xl: "140px 133px 680px 1fr"
        },
        gridTemplateRows: { 
          xs: "minmax(250px, 1fr) minmax(150px, auto)",
          sm: "minmax(300px, 1fr) minmax(180px, auto)",
          md: "minmax(350px, 1fr) minmax(200px, auto)",
          lg: `minmax(400px, calc(80vh - 20vh)) minmax(200px, calc(20vh))`
        },
        width: "100vw",
        height: { xs: "85vh", sm: "82vh", md: "80vh" },
        overflow: "hidden",
        "& > *": {
          overflow: "hidden"
        },
        "& > :nth-of-type(2)": {
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center"
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
          key="fname"
          initial="hidden"
          animate={changingRoute ? "exit" : "visible"}
          variants={name2Animation}
          style={{ 
            color: "#f1c2d6", 
            writingMode: "vertical-rl", 
            textOrientation: "upright", 
            position: "relative", 
            overflow: "hidden",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "100%",
            height: "100%"
          }}
        >
          <Typography
            variant="h1"
            sx={{
              position: "absolute",
              left: "8%",
              top: 30,
              fontFamily: `${MilkerFont.style.fontFamily}, Arial, sans-serif`,
              lineHeight: "1",
              zIndex: 1,
              fontSize: "7rem",
              mt: -3.2,
              letterSpacing: "-10px", // Match the horizontal text letter spacing
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
