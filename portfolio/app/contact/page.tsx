"use client";

import events from "@/scripts/events";
import { Box, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { useEffect, useState } from "react";
import "@/styles/contact/style.css";
import ContactForm from "@/components/contact/ContactForm";
import { motion } from "framer-motion";
import CopiableText from "@/components/CopiableText";
import { MilkerFont } from "@/styles/theme";

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

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
  };

  const rightBoxAnimation = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { x: "100%", transition: { duration: 0.5, ease: "easeIn" } },
  };

  return (
    <motion.div
      key="contact"
      initial="hidden"
      animate={changingRoute ? "exit" : "visible"}
      variants={containerAnimation}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "100vh", width: "100vw", pl: "2rem" }}
        className={`main-box-contact ${loaded && !changingRoute ? "loaded" : ""}`}>
        <Box sx={{ flex: 1, marginRight: "8rem", px: "16rem" }}>
          <ContactForm />
        </Box>
        <motion.div
          initial="hidden"
          animate={changingRoute ? "exit" : "visible"}
          variants={rightBoxAnimation}
          style={{ flex: 1, padding: "4rem", backgroundColor: "#101214", color: "#f1c2d6", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
            <Typography variant="h4" gutterBottom
              sx={{
                fontFamily: `${MilkerFont.style.fontFamily}, Arial, sans-serif`,
                fontSize: "4rem",
                color: "#C8C2CF",
                userSelect: "none",
                letterSpacing: 1,
              }}>
              Contact Me
            </Typography>
            <Typography variant="body1"
              sx={{
                textAlign: "justify",
                fontSize: "1.8rem",
                userSelect: "none",
              }}>
              I would love to hear from you! Please fill out the form on the left to get in touch with me.
            </Typography>
          </Box>
          <motion.div
            initial={{ y: "100%" }}
            animate={changingRoute ? "exit" : { y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
            exit={{ y: "100%", transition: { duration: 0.5, ease: "easeIn" } }}
            style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "2rem", width: "100%" }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
              <motion.div
                initial={{ y: "100%" }}
                animate={changingRoute ? "exit" : { y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }}
                exit={{ y: "100%", transition: { duration: 0.5, ease: "easeIn" } }}
                style={{ flex: 1, textAlign: "center", position: "relative" }}
              >
                <PhoneIcon sx={{ display: "block", margin: "0 auto 0.5rem auto" }} />
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <CopiableText>
                    [removed phone number]
                  </CopiableText>
                </Box>
              </motion.div>
              <Box sx={{ width: "1px", backgroundColor: "#f1c2d6", height: "2rem", mx: "1rem" }} />
              <motion.div
                initial={{ y: "100%" }}
                animate={changingRoute ? "exit" : { y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } }}
                exit={{ y: "100%", transition: { duration: 0.5, ease: "easeIn" } }}
                style={{ flex: 1, textAlign: "center", position: "relative" }}
              >
                <EmailIcon sx={{ display: "block", margin: "0 auto 0.5rem auto" }} />
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <CopiableText>
                    arthur.macdonald.dev@gmail.com
                  </CopiableText>
                </Box>
              </motion.div>
            </Box>
          </motion.div>
        </motion.div>
      </Box>
    </motion.div >
  );
}