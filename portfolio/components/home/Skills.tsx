import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { MilkerFont, SofiaProFont } from "@/styles/theme";
import { motion } from 'framer-motion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ReactTyped } from 'react-typed';
import Image from 'next/image';

const languages = [
    { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', link: 'https://www.python.org/' },
    { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', link: 'https://www.typescriptlang.org/' },
    { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'SQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', link: 'https://www.mysql.com/' },
    { name: 'Java', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', link: 'https://www.java.com/' },
    { name: 'C', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', link: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
    { name: 'PHP', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', link: 'https://www.php.net/' },
    { name: 'OCaml', image: 'https://www.svgrepo.com/show/373945/ocaml.svg', link: 'https://ocaml.org/' },
];

const workflowsLibs = [
    { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', link: 'https://git-scm.com/' },
    { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', link: 'https://www.docker.com/' },
    { name: 'AWS', image: 'https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg', link: 'https://aws.amazon.com/' },
    { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', link: 'https://reactjs.org/' },
    { name: 'PyTorch', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', link: 'https://pytorch.org/' },
    { name: 'Scikit learn', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/260px-Scikit_learn_logo_small.svg.png', link: 'https://scikit-learn.org/' },
    { name: 'Qiskit', image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Qiskit-Logo.svg', link: 'https://qiskit.org/' },
    { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', link: 'https://nodejs.org/' },
    { name: 'NextJS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', link: 'https://nextjs.org/' },
    { name: 'GraphQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', link: 'https://graphql.org/' },
    { name: 'Django', image: 'https://www.svgrepo.com/show/353657/django-icon.svg', link: 'https://www.djangoproject.com/' },
    { name: 'AirTable', image: 'https://www.svgrepo.com/show/353383/airtable.svg', link: 'https://airtable.com/' },
    { name: 'Softr', image: 'https://cdn.brandfetch.io/idytCFzVcY/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B', link: 'https://www.softr.io/' },
    { name: 'Angular', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', link: 'https://angular.io/' },
    { name: 'VueJS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', link: 'https://vuejs.org/' },
    { name: 'Wordpress', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/512px-WordPress_blue_logo.svg.png', link: 'https://wordpress.org/' },
];

interface SkillsProps {
    pageChanging: boolean;
}

const Skills: React.FC<SkillsProps> = ({ pageChanging }) => {
    const [showArrow, setShowArrow] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const hasScrolled = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current && scrollRef.current.scrollTop > 0) {
                hasScrolled.current = true;
                setShowArrow(false);
            }
        };

        const div = scrollRef.current;
        if (div) div.addEventListener("scroll", handleScroll);

        const timer = setTimeout(() => {
            if (!hasScrolled.current) {
                setShowArrow(true);
            }
        }, 6000);

        return () => {
            if (div) div.removeEventListener("scroll", handleScroll);
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (scrollRef.current) {
                scrollRef.current.style.overflowY = 'scroll';
            }
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.style.overflowY = 'hidden';
        }
    }, [pageChanging]);

    return (
        <Box sx={{ position: "relative", height: "100%", width: "100%", }}>
            <Box sx={{ height: 'calc(100% - 2* 20px)', width: 'calc(100% - 2* 40px)', overflowX: 'hidden', overflowY: 'hidden', m: "40px", mb: 0, mt: "20px", pb: 1, }} ref={scrollRef}>
                <Box sx={{ position: 'absolute', bottom: 20, right: 42, transition: "opacity 0.2s", opacity: showArrow && !pageChanging ? 0.9 : 0, zIndex: 1000 }}>
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                    >
                        <ArrowDownwardIcon sx={{ fontSize: 50, color: '#0f402b' }} />
                    </motion.div>
                </Box>
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: pageChanging ? '100%' : 0 }}
                    transition={{ duration: pageChanging ? 0.3 : 0.5, delay: pageChanging ? 0.3 : 0.5 }}
                >
                    <Typography variant="h4" sx={{
                        fontFamily: `${MilkerFont.style.fontFamily}, Arial, sans-serif`,
                        fontSize: "2rem",
                        color: "#f1c2d6",
                        pl: 0.2,
                        textShadow: "2px 2px 0 #0f402b, 2px 2px 0 #0f402b, 2px -2px 0 #0f402b, -2px 2px 0 #0f402b, -2px -2px 0 #0f402b, 2px 0px 0 #0f402b, 0px 2px 0 #0f402b, -2px 0px 0 #0f402b, 0px -2px 0 #0f402b",
                    }}>
                        Skills
                    </Typography>
                </motion.div>
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: pageChanging ? '100%' : 0 }}
                    transition={{ duration: pageChanging ? 0.3 : 0.5, delay: pageChanging ? 0.2 : 0.7 }}
                >
                    <Typography variant="h5" sx={{ fontFamily: `${SofiaProFont.style.fontFamily}, Arial, sans-serif`, color: '#0f402b' }}>
                        Programming Languages
                    </Typography>
                </motion.div>
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: pageChanging ? '100%' : 0 }}
                    transition={{ duration: pageChanging ? 0.3 : 0.5, delay: pageChanging ? 0.3 : 0.8 }}
                >
                    <Typography variant="body1" sx={{ fontFamily: `${SofiaProFont.style.fontFamily}, Arial, sans-serif`, mb: 1, color: '#333', minHeight: '2em' }}>
                        <ReactTyped
                            strings={["These are the programming languages I am proficient in, each with its own unique strengths and applications."]}
                            typeSpeed={20}
                            startDelay={1500}
                            showCursor={false}
                        />
                    </Typography>
                </motion.div>
                <Grid container spacing={4}>
                    {languages.map((language, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <motion.div
                                initial={{ rotateY: 90 }}
                                animate={{ rotateY: pageChanging ? 90 : 0 }}
                                transition={{ duration: 0.3, delay: 0.1 * (index % 4) + (pageChanging ? 0 : 1) }}
                                style={{ perspective: 1000, display: "flex", justifyContent: "center" }}
                            >
                                <motion.div
                                    initial={{ rotateY: 90 }}
                                    whileInView={{ rotateY: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 * (index % 4) }}
                                    style={{ width: "fit-content" }}
                                >
                                    <Tooltip title={<Typography variant="h6" sx={{ fontSize: "1.3em", color: '#fff', fontFamily: `${MilkerFont.style.fontFamily}, Arial, sans-serif`, }}>{language.name}</Typography>} arrow placement="bottom" slotProps={{ popper: { sx: { '& .MuiTooltip-tooltip': { backgroundColor: '#333', borderRadius: '10px', padding: '10px', fontFamily: MilkerFont }, '& .MuiTooltip-arrow': { color: '#333' } } } }}>

                                        <a href={language.link} target="_blank" rel="noopener noreferrer">
                                            <Box sx={{
                                                backgroundColor: '#eee',
                                                padding: 2,
                                                borderRadius: '20px',
                                                margin: 'auto',
                                                transition: 'transform 0.3s, box-shadow 0.3s',
                                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                                '&:hover': {
                                                    transform: 'scale(0.95)',
                                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                                },
                                                '&:active': {
                                                    transform: 'scale(0.9)',
                                                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                                                }
                                            }}>
                                                <Image src={language.image} alt={language.name} width={80} height={80} style={{ display: 'block' }} />
                                            </Box>
                                        </a>
                                    </Tooltip>
                                </motion.div>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: pageChanging ? '100%' : 0 }}
                    transition={{ duration: pageChanging ? 0.3 : 0.5, delay: pageChanging ? 0.3 : 0.9 }}
                >
                    <Typography variant="h5" sx={{ fontFamily: `${SofiaProFont.style.fontFamily}, Arial, sans-serif`, mt: 4, color: '#0f402b' }}>
                        Tools & Frameworks
                    </Typography>
                </motion.div>
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: pageChanging ? '100%' : 0 }}
                    transition={{ duration: pageChanging ? 0.3 : 0.5, delay: pageChanging ? 0.2 : 1 }}
                >
                    <Typography variant="body1" sx={{ fontFamily: `${SofiaProFont.style.fontFamily}, Arial, sans-serif`, mb: 2, color: '#333', minHeight: '2em' }}>
                        <ReactTyped
                            strings={["These are the tools and frameworks I use to streamline my workflow and build robust applications."]}
                            typeSpeed={20}
                            startDelay={2000}
                            showCursor={false}
                        />
                    </Typography>
                </motion.div>
                <Grid container spacing={4}>
                    {workflowsLibs.map((workflowLib, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <motion.div
                                initial={{ rotateY: 90 }}
                                animate={{ rotateY: pageChanging ? 90 : 0 }}
                                transition={{ duration: 0.3, delay: 0.1 * (index % 4) + (pageChanging ? 0 : 0.8) }}
                                style={{ perspective: 1000, display: "flex", justifyContent: "center" }}
                            >
                                <motion.div
                                    initial={{ rotateY: 90 }}
                                    whileInView={{ rotateY: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 * (index % 4) }}
                                    style={{ width: "fit-content" }}
                                >
                                    <Tooltip title={<Typography variant="h6" sx={{ fontSize: "1.3em", color: '#fff', fontFamily: `${MilkerFont.style.fontFamily}, Arial, sans-serif`, }}>{workflowLib.name}</Typography>} arrow placement="bottom" slotProps={{ popper: { sx: { '& .MuiTooltip-tooltip': { backgroundColor: '#333', borderRadius: '10px', padding: '10px', fontFamily: MilkerFont }, '& .MuiTooltip-arrow': { color: '#333' } } } }}>
                                        <a href={workflowLib.link} target="_blank" rel="noopener noreferrer">
                                            <Box sx={{
                                                backgroundColor: '#eee',
                                                padding: 2,
                                                borderRadius: '20px',
                                                margin: 'auto',
                                                transition: 'transform 0.3s, box-shadow 0.3s',
                                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                                '&:hover': {
                                                    transform: 'scale(0.95)',
                                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                                },
                                                '&:active': {
                                                    transform: 'scale(0.9)',
                                                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                                                },
                                            }}>
                                                <Image src={workflowLib.image} alt={workflowLib.name} width={80} height={80} style={{ margin: 'auto', display: 'block' }} />
                                            </Box>
                                        </a>
                                    </Tooltip>
                                </motion.div>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Skills;
