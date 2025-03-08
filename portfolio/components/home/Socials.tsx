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
                                width: "5vw",
                                height: "5vw",
                                borderRadius: '50%',
                                backgroundColor: "#101214",
                                color: "#C8C2CF",
                                fontSize: 52,
                                transition: 'background-color 0.3s, color 0.3s, transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    backgroundColor: '#0f402b',
                                    color: '#f1c2d6',
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
