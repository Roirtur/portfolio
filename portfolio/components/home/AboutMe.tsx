import { MilkerFont, SofiaProFont } from '@/styles/theme';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { ReactTyped } from 'react-typed';

interface AboutMeProps {
    pageChanging: boolean;
}

const AboutMe: React.FC<AboutMeProps> = ({ pageChanging }) => {
    return (

        <motion.div
            style={{
                width: "100%",
                height: "100%",
                paddingLeft: 60,
                paddingRight: 60,
                fontFamily: `${MilkerFont.style.fontFamily}, Arial, sans-serif`,
                flexDirection: "column",
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
            }}
            initial="visible"
            animate={pageChanging ? "exit" : "visible"}
            variants={{
                visible: { opacity: 1 },
                exit: { opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
            }}
        >
            <Box sx={{
                fontSize: "2rem",
                color: "#f1c2d6",
                textShadow: "2px 2px 0 #0f402b, 2px 2px 0 #0f402b, 2px -2px 0 #0f402b, -2px 2px 0 #0f402b, -2px -2px 0 #0f402b, 2px 0px 0 #0f402b, 0px 2px 0 #0f402b, -2px 0px 0 #0f402b, 0px -2px 0 #0f402b",
                mb: 2
            }}>
                <ReactTyped
                    strings={["Who am I ?"]}
                    typeSpeed={20}
                    startDelay={500}
                    showCursor={false}
                />
            </Box>
            <Box
                sx={{
                    fontFamily: `${SofiaProFont.style.fontFamily}, Arial, sans-serif`,
                    fontWeight: "700",
                    fontSize: "1.3rem",
                    textAlign: "justify",
                    lineHeight: 1.4,
                    mb: 2,
                }}
            >
                <span id="typed-strings" style={{ display: "none" }}>
                    <span>
                        I am a 21-year-old software engineer currently in my first year of a master's degree at <a
                            href="https://www.u-bordeaux.fr"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#0f402b", textDecoration: "underline" }}
                        >
                            Université de Bordeaux
                        </a>.
                        My interests span computer science, astronomy, and quantum physics, with a strong focus on artificial intelligence.
                        <br />
                        <br />
                        I am always eager to connect with like-minded individuals and explore new opportunities. Let's create something amazing together!
                    </span>
                </span>
                <ReactTyped
                    stringsElement="#typed-strings"
                    typeSpeed={0}
                    startDelay={600}
                    showCursor={false}
                />
            </Box>
        </motion.div>
    );
};

export default AboutMe;