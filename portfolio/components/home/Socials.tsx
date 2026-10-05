import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Box, IconButton, Tooltip } from '@mui/material';
import RotatingDiv from '@/components/Rotate';
import { motion } from 'framer-motion';

const Socials: React.FC<{ pageChanging: boolean }> = ({ pageChanging }) => {
    const socials = [
        { name: 'GitHub · opens new tab', icon: <FaGithub />, link: 'https://github.com/Roirtur', external: true },
        { name: 'LinkedIn · opens new tab', icon: <FaLinkedin />, link: 'https://fr.linkedin.com/in/arthur-macdonald-09b108266/en', external: true },
        { name: 'Email Arthur', icon: <FaEnvelope />, link: 'mailto:arthur.macdonald.dev@gmail.com', external: false },
        { name: 'Call [removed phone number]', icon: <FaPhone />, link: 'tel:[removed phone number]', external: false },
    ];

    const socialAnimation = (index: number) => ({
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { delay: (1 + index * 0.2), type: 'spring' as const, stiffness: 100 } },
        exit: { y: 100, opacity: 0, transition: { delay: (index * 0.1), type: 'spring' as const, stiffness: 100 } },
    });

    return (
        <Box
            sx={{
                display: 'flex',
                gap: { xs: 0.5, sm: 1, md: 2 },
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                px: { xs: 1, sm: 2, md: 4 },
                flexWrap: 'wrap'
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
                      <Tooltip title={social.name} arrow placement="top">
                        <IconButton
                            href={social.link}
                            target={social.external ? '_blank' : undefined}
                            rel={social.external ? 'noopener noreferrer' : undefined}
                            aria-label={social.name}
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
                      </Tooltip>
                    </RotatingDiv>
                </motion.div>
            ))}
        </Box>
    );
};

export default Socials;
