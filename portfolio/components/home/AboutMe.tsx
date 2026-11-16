import { MilkerFont, SofiaProFont } from '@/styles/theme';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import '@/styles/home/style.css';

interface AboutMeProps {
    pageChanging: boolean;
}

const AboutMe: React.FC<AboutMeProps> = ({ pageChanging }) => {
    return (

        <motion.div
            className="home-raised-section"
            style={{
                width: "100%",
                height: "100%",
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
                mb: 0
            }}>
                <span className="typed-heading">Who am I ?</span>
            </Box>
            <Box
                sx={{
                    fontFamily: `${SofiaProFont.style.fontFamily}, Arial, sans-serif`,
                    fontWeight: "700",
                    fontSize: "clamp(1.05rem, 1.35vw, 1.3rem)",
                    textAlign: "justify",
                    lineHeight: 1.4,
                    mb: 2,
                }}
            >
                    <Box component="p" sx={{ m: 0, mb: 1.5 }}>
                        I recently graduated at the top of my class with a Master's
                        in Artificial Intelligence from{" "}
                        <a
                            href="https://www.u-bordeaux.fr"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#0f402b", textDecoration: "underline" }}
                        >
                            Université de Bordeaux
                        </a>.
                        I also completed an internship with the FLOWERS team at Inria Bordeaux,
                        gained two years of software development experience while studying, and spent two
                        years tutoring programming students.
                    </Box>
                    <Box component="p" sx={{ m: 0, mb: 1.5 }}>
                        I'm naturally curious and enjoy understanding complex problems,
                        exploring new ideas, and figuring out how things work.
                        I'm particularly interested in AI, technology, and finding
                        creative, practical ways to solve challenging problems.
                    </Box>
            </Box>
        </motion.div>
    );
};

export default AboutMe;
