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
                <span className="typed-heading">AI research &amp; thesis</span>
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
                    <span>
                        I graduated in 2026 with a master&apos;s degree in Artificial Intelligence from <a
                            href="https://www.u-bordeaux.fr"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#0f402b", textDecoration: "underline" }}
                        >
                            Université de Bordeaux
                        </a>.
                        My interests include machine learning, reinforcement learning, and symbolic AI. I am looking for a PhD thesis in AI where I can investigate challenging questions and contribute to research.
                        <br />
                        <br />
                        My work includes curiosity-driven exploration at Inria FLOWERS and a multi-expert pipeline for peptide design. The projects page has code, slides, and reports for both.
                    </span>
            </Box>
        </motion.div>
    );
};

export default AboutMe;
