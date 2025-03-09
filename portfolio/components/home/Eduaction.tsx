import React, { useState } from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import { MilkerFont } from '@/styles/theme';
import { motion } from 'framer-motion';

const educationData = [
    {
        institution: 'Université de Bordeaux',
        degree: "Master's degree - Computer Science",
        year: '2024 - Current',
        logo: 'https://agir.u-bordeaux.fr/build/images/logo/logo_carre.svg',
    },
    {
        institution: 'Université de Bordeaux',
        degree: "Bachelor's degree - Computer Science",
        year: '2021 - 2024',
        logo: 'https://agir.u-bordeaux.fr/build/images/logo/logo_carre.svg',
    },
    {
        institution: 'François Mauriac  High School',
        degree: 'Baccalaureate - NSI & Mathematics',
        year: '2018 - 2021',
        logo: 'https://lyceemauriac.fr/wp-content/uploads/2016/12/fav.png',
    },
];

const Education: React.FC<{ pageChanged: boolean }> = ({ pageChanged }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

    return (
        <Box sx={{ px: 6, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', height: '100%' }}>
            <motion.div
                initial={{ y: '400%', opacity: 0 }}
                animate={{ y: pageChanged ? '400%' : 0, opacity: pageChanged ? 0 : 1 }}
                exit={{ y: '400%', opacity: 0 }}
                transition={{ duration: 0.5, delay: pageChanged ? 0 : 1, ease: 'easeOut' }}
            >
                <Box sx={{
                    fontFamily: `${MilkerFont.style.fontFamily}, Arial, sans-serif`,
                    fontSize: "2rem",
                    color: "#f1c2d6",
                    textShadow: "2px 2px 0 #0f402b, 2px 2px 0 #0f402b, 2px -2px 0 #0f402b, -2px 2px 0 #0f402b, -2px -2px 0 #0f402b, 2px 0px 0 #0f402b, 0px 2px 0 #0f402b, -2px 0px 0 #0f402b, 0px -2px 0 #0f402b",
                }}>
                    Education
                </Box>
            </motion.div>
            <List sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        initial={{ y: '400%', opacity: 0 }}
                        animate={{ y: pageChanged ? '400%' : 0, opacity: pageChanged ? 0 : 1 }}
                        exit={{ y: '400%', opacity: 0 }}
                        transition={{ duration: 0.5, delay: pageChanged ? 0 : 1.2 + index * 0.2, ease: 'easeOut' }}
                        style={{
                            width: hoveredIndex === index ? "65%" : "calc(70px + 16px)",
                            transition: 'width 0.5s ease-in-out',
                            height: "calc(70px + 16px)",
                        }}
                    >
                        <Paper
                            sx={{
                                width: "100%",
                                height: "100%",
                                gap: 2,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                overflow: 'hidden',
                                p: 1,
                            }}
                        >
                            <img src={edu.logo} alt={`${edu.institution} logo`} style={{ width: 70, height: 70 }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', whiteSpace: 'nowrap' }}>
                                <ListItem sx={{ padding: 0, opacity: hoveredIndex === index ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
                                    <ListItemText
                                        primary={
                                            <Typography component="span" variant="body1" color="black">
                                                {edu.institution}
                                            </Typography>
                                        }
                                        secondary={
                                            <>
                                                <Typography component="span" variant="body2" color="textSecondary">
                                                    {edu.degree}
                                                </Typography>
                                                <br />
                                                <Typography component="span" variant="body2" color="textSecondary">
                                                    {edu.year}
                                                </Typography>
                                            </>
                                        }
                                    />
                                </ListItem>
                            </Box>
                        </Paper>
                    </motion.div>
                ))}
            </List>
        </Box>
    );
};

export default Education;