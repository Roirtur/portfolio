"use client";

import events from "@/scripts/events";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Box, Button, IconButton } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import "@/styles/works/style.css";
import { MilkerFont } from "@/styles/theme";
import ProjectCard, { Project } from "@/components/works/ProjectCard";
import { motion } from "framer-motion";

const projects: Project[] = [
    {
        title: "Project One",
        description: "Description for project one.",
        image: "/images/project1.jpg",
        link: "#"
    },
    {
        title: "Project Two",
        description: "Description for project two.",
        image: "/images/project2.jpg",
        link: "#"
    },
    {
        title: "Project Three",
        description: "Description for project three.",
        image: "/images/project3.jpg",
        link: "#"
    },
    {
        title: "Project Four",
        description: "Description for project four.",
        image: "/images/project4.jpg",
        link: "#"
    },
    {
        title: "Project Five",
        description: "Description for project five.",
        image: "/images/project5.jpg",
        link: "#"
    },
    {
        title: "Project 5",
        description: "Description for project 4.",
        image: "/images/project5.jpg",
        link: "#"
    },
    {
        title: "Project 1",
        description: "Description for project 5.",
        image: "/images/project5.jpg",
        link: "#"
    },
    {
        title: "Project 1",
        description: "Description for project 51212.",
        image: "/images/project5.jpg",
        link: "#"
    },
    {
        title: "Project 1",
        description: "Description for project 132315.",
        image: "/images/project5.jpg",
        link: "#"
    },
    {
        title: "Project 1",
        description: "Description for project 5321.",
        image: "/images/project5.jpg",
        link: "#"
    },
    {
        title: "Project 1",
        description: "Description for project 43333.",
        image: "/images/project5.jpg",
        link: "#"
    },
];

export default function Works() {
    const [changingRoute, setChangingRoute] = useState<boolean>(false);
    const [currentAngle, setCurrentAngle] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const animationRef = useRef<number | null>(null);

    const simulatedProjects = projects

    useEffect(() => {
        const handler = (data: string) => {
            setChangingRoute(data !== "/works");
        };

        events.on("routeChanged", handler);

        return () => {
            events.off("routeChanged", handler);
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, []);

    // Easing function: easeInOutCubic
    const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

    // Animate rotation using a time-based approach with easing.
    // The animation disables buttons until complete.
    const animateRotation = (direction: "left" | "right") => {
        if (isAnimating) return; // Prevent starting a new animation

        setIsAnimating(true);
        const stepAngle = (2 * Math.PI) / simulatedProjects.length; // one project slot
        const targetAngle =
            direction === "left" ? currentAngle - stepAngle : currentAngle + stepAngle;
        const duration = 600; // in milliseconds, increased for smoother animation
        const startAngle = currentAngle;
        const startTime = performance.now();

        const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeInOutCubic(progress);
            const newAngle = startAngle + (targetAngle - startAngle) * easedProgress;
            setCurrentAngle(newAngle);
            if (elapsed < duration) {
                animationRef.current = requestAnimationFrame(animate);
            } else {
                setCurrentAngle(targetAngle);
                setIsAnimating(false);
            }
        };

        if (animationRef.current) cancelAnimationFrame(animationRef.current);
        animationRef.current = requestAnimationFrame(animate);
    };

    const handleRotateLeft = () => animateRotation("left");
    const handleRotateRight = () => animateRotation("right");

    const radius = 800; // radius for positioning cards

    return (
        <Box
            sx={{
                width: "100vw",
                height: "100vh",
                textAlign: "center",
                fontFamily: MilkerFont,
                overflow: "hidden",
                position: "relative"
            }}
        >
            <motion.div
                initial={{ opacity: 0, x: -100, y: -100 }}
                animate={changingRoute ? { opacity: 0, x: -100, y: -100 } : { opacity: 1, x: 0, y: 0 }}
                transition={{ duration: changingRoute ? 0.3 : 1 }}
            >
                <Box
                    sx={{
                        width: "50vw",
                        height: "50vw",
                        backgroundColor: "#101214",
                        borderRadius: "50%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        transform: "translate(-30%, -20%)",
                    }}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 100, y: -100 }}
                animate={changingRoute ? { opacity: 0, x: 100, y: -100 } : { opacity: 1, x: 0, y: 0 }}
                transition={{ duration: changingRoute ? 0.3 : 1 }}
            >
                <Box
                    sx={{
                        width: "50vw",
                        height: "50vw",
                        backgroundColor: "#101214",
                        borderRadius: "50%",
                        position: "absolute",
                        top: "0",
                        right: "0",
                        transform: "translate(30%, -20%)",
                    }}
                />
            </motion.div>

            <Box
                sx={{
                    backgroundColor: "#C8C2CF",
                    position: "absolute",
                    borderRadius: "50%",
                    bottom: 0,
                    left: "50%",
                    width: "100vw",
                    height: "100vw",
                    transform: "translate(-50%, 70%)"
                }}
            />
            <motion.div
                initial={{ opacity: 0, y: 1100 }}
                animate={changingRoute ? { opacity: 0, y: 1100 } : { opacity: 1, y: 900 }}
                transition={{ duration: changingRoute ? 0.3 : 1 }}
            >
                <Box
                    sx={{
                        backgroundColor: "#101214",
                        position: "absolute",
                        borderRadius: "50%",
                        bottom: 0,
                        left: "50%",
                        width: "90vw",
                        height: "90vw",
                        transform: "translate(-50%, 70%)"
                    }}
                >
                    {simulatedProjects.map((project, index) => {
                        // Compute angle for each project card
                        const angle = (index / simulatedProjects.length) * 2 * Math.PI + currentAngle;
                        // Position relative to center using standard circle formulas.
                        const x = radius * Math.cos(angle - Math.PI / 2);
                        const y = radius * Math.sin(angle - Math.PI / 2);
                        const isActive = Math.abs(angle % (2 * Math.PI)) < 0.5 || Math.abs(angle % (2 * Math.PI) - 2 * Math.PI) < 0.5; // Check if the angle is close to 0 (top position) or 2*PI (right position)
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.6 + ((index + simulatedProjects.length + 3) % simulatedProjects.length) * 0.2 }}
                            >
                                <Box
                                    className={isActive ? "activeProject" : ""}
                                    sx={{
                                        position: "absolute",
                                        left: `calc(50% + ${x}px)`,
                                        top: `calc(50% + ${y}px)`,
                                        // Use translate(-50%, -100%) so the card's bottom center aligns with the computed position.
                                        transform: `translate(-50%, -100%) rotate(${angle}rad)}`,
                                        transformOrigin: "50% 100%",
                                    }}
                                >
                                    <Box
                                        className={isActive ? "activeProject" : ""}
                                        sx={{
                                            boxShadow: isActive ? 4 : 2,
                                            transform: `${isActive ? "scale(1.4)" : ""}`,
                                            transition: "transform 0.6s",
                                        }}
                                    >
                                        <ProjectCard project={project} />
                                    </Box>
                                </Box>
                            </motion.div>
                        );
                    })}
                </Box>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={changingRoute ? { opacity: 0 } : { opacity: 1 }}
                transition={changingRoute ? { duration: 0.3 } : { duration: 1, ease: "easeInOut", delay: 0.5 }}
            >
                <IconButton
                    onClick={handleRotateLeft}
                    disabled={isAnimating}
                    sx={{
                        position: "absolute",
                        top: "62%",
                        left: "42%",
                        transform: "translateY(-50%)",
                        color: "#E8BCB9",
                        backgroundColor: isAnimating ? "#aaa" : "#0f402b",
                        transition: "background-color 0.3s, transform 0.3s",
                        "&:hover": {
                            color: "#0f402b",
                            backgroundColor: isAnimating ? "#aaa" : "#E8BCB9",
                            transform: isAnimating ? "translateY(-50%)" : "translateY(-50%) scale(1.1)",
                        },
                        "&.Mui-disabled": {
                            color: "#fff",
                            backgroundColor: "#aaa",
                        },
                        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
                    }}
                >
                    <ChevronLeftIcon />
                </IconButton>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={changingRoute ? { opacity: 0 } : { opacity: 1 }}
                transition={changingRoute ? { duration: 0.3 } : { duration: 1, ease: "easeInOut", delay: 0.5 }}
            >
                <IconButton
                    onClick={handleRotateRight}
                    disabled={isAnimating}
                    sx={{
                        position: "absolute",
                        top: "62%",
                        right: "42%",
                        transform: "translateY(-50%)",
                        color: "#E8BCB9",
                        backgroundColor: isAnimating ? "#aaa" : "#0f402b",
                        transition: "background-color 0.3s, transform 0.3s",
                        "&:hover": {
                            color: "#0f402b",
                            backgroundColor: isAnimating ? "#aaa" : "#E8BCB9",
                            transform: isAnimating ? "translateY(-50%)" : "translateY(-50%) scale(1.1)",
                        },
                        "&.Mui-disabled": {
                            color: "#fff",
                            backgroundColor: "#aaa",
                        },
                        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
                    }}
                >
                    <ChevronRightIcon />
                </IconButton>
            </motion.div>
        </Box>
    );
}
