import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord, FaEnvelope } from 'react-icons/fa';
import { Box, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import RotatingDiv from '@/components/Rotate';
import { motion } from 'framer-motion';

const Socials: React.FC<{ pageChanging: boolean }> = ({ pageChanging }) => {
    const theme = useTheme();

    const socials = [
        { icon: <FaGithub />, link: 'https://github.com/Roirtur' },
        { icon: <FaLinkedin />, link: 'https://fr.linkedin.com/in/arthur-macdonald-09b108266/en' },
        { icon: <FaInstagram />, link: 'https://instagram.com/arthur.mcdo' },
        { icon: <FaDiscord />, link: 'https://discord.com/users/300197660504227851' },
        { icon: (
            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="leetcode" style={{ width: '100%', height: '100%', padding: 12, }}>
                <path d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"></path>
                <path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"></path>
            </svg>
        ), link: 'https://leetcode.com/roirtur' },
        { icon: <FaEnvelope />, link: 'mailto:arthur.macdonald.dev@gmail.com' },
    ];

    const socialAnimation = (index: number) => ({
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { delay: (1 + index * 0.2), type: 'spring', stiffness: 100 } },
        exit: { y: 100, opacity: 0, transition: { delay: (index * 0.1), type: 'spring', stiffness: 100 } },
    });

    return (
        <Box
            sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                px: 12,
            }}
        >
            {socials.map((social, index) => (
                <motion.div
                    key={index}
                    initial="hidden"
                    animate={pageChanging ? "exit" : "visible"}
                    variants={socialAnimation(index)}
                >
                    <RotatingDiv>
                        <IconButton
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                width: "4.8vw",
                                height: "4.8vw",
                                borderRadius: '50%',
                                backgroundColor: "#101214",
                                color: "#C8C2CF",
                                fill: "#C8C2CF",
                                fontSize: 52,
                                transition: 'background-color 0.3s, color 0.3s, transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    backgroundColor: '#0f402b',
                                    color: '#f1c2d6',
                                    fill: '#f1c2d6',
                                    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)',
                                },
                            }}
                        >
                            {social.icon}
                        </IconButton>
                    </RotatingDiv>
                </motion.div>
            ))}
        </Box>
    );
};

export default Socials;
