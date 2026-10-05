import React from 'react';
import { Box } from '@mui/material';
import { motion, Variants } from "framer-motion";

interface HomeBackgroundProps {
    changingRoute: boolean;
}

const HomeBackground: React.FC<HomeBackgroundProps> = ({ changingRoute }) => {
    const verticalAnimation = (delay: number, direction: 'up' | 'down'): Variants => ({
        hidden: { opacity: 0, y: direction === 'up' ? '-100vh' : '100vh' },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 3, 
                delay, 
                ease: "easeOut" 
            } 
        },
        exit: { 
            opacity: 0, 
            y: direction === 'up' ? '-100vh' : '100vh', 
            transition: { 
                duration: 0.3, 
                delay: delay / 2, 
                ease: "easeIn" 
            } 
        }
    });

    const horizontalAnimation = (delay: number, direction: 'left' | 'right'): Variants => ({
        hidden: { opacity: 0, x: direction === 'left' ? '-100vw' : '100vw' },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
                duration: 3, 
                delay, 
                ease: "easeOut" 
            } 
        },
        exit: { 
            opacity: 0, 
            x: direction === 'left' ? '-100vw' : '100vw', 
            transition: { 
                duration: 0.3, 
                delay: delay / 2, 
                ease: "easeIn" 
            } 
        }
    });

    const lines = [
        { top: "20vh", left: "140px", width: '4px', height: 'calc(100% - 20vh)', animation: verticalAnimation(0.3, 'down'), offset: '16', duration: '60s', orientation: 'vertical', direction: 'normal', zIndex: -1 },
        { top: "20vh", left: "270px", width: '4px', height: 'calc(100% - 20vh)', animation: verticalAnimation(0.6, 'up'), offset: '63', duration: '60s', orientation: 'vertical', direction: 'reverse', zIndex: -1 },
        { left: "950px", width: '4px', height: '100%', animation: verticalAnimation(0.6, 'down'), offset: '93', duration: '60s', orientation: 'vertical', direction: 'normal', zIndex: 1 },
        { top: "19.8vh", left: "270px", width: 'calc(100% - 270px)', height: '4px', animation: horizontalAnimation(0.3, 'right'), offset: '93', duration: '60s', orientation: 'horizontal', direction: 'normal', zIndex: 1 },
        { top: "19.8vh", left: 0, width: '140px', height: '4px', animation: horizontalAnimation(0.3, 'right'), offset: '93', duration: '6s', orientation: 'horizontal', direction: 'normal', zIndex: 1 },
        { top: "calc(54.1vh + 19.8vh)", left: 0, width: '100%', height: '4px', animation: horizontalAnimation(0.6, 'left'), offset: '68', duration: '60s', orientation: 'horizontal', direction: 'reverse', zIndex: 1 },
    ];

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                overflow: 'hidden',
            }}
        >
            {lines.map((line, index) => (
                <motion.div
                    key={index}
                    initial="hidden"
                    animate={changingRoute ? "exit" : "visible"}
                    variants={line.animation}
                    style={{
                        mixBlendMode: "difference",
                        filter: "invert(1)",
                        position: 'absolute',
                        top: line.top || 0,
                        left: line.left,
                        zIndex: line.zIndex,
                        width: line.width,
                        height: line.height,
                        backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='black' stroke-width='2' stroke-dasharray='10 20 30' stroke-dashoffset='${line.offset}' stroke-linecap='square'/%3e%3c/svg%3e")`,
                        animation: line.orientation === 'vertical'
                            ? `moveVerticalBackground${line.direction === 'reverse' ? 'Reverse' : ''} ${line.duration} linear infinite`
                            : `moveHorizontalBackground${line.direction === 'reverse' ? 'Reverse' : ''} ${line.duration} linear infinite`,
                        backgroundRepeat: 'repeat',
                        backgroundSize: line.orientation === 'vertical' ? '100% 200%' : '200% 100%',
                    }}
                />
            ))}
            <style>
                {`
            @keyframes moveVerticalBackground {
            0% {
            background-position: 0 0;
            }
            100% {
            background-position: 0 200%;
            }
            }
            @keyframes moveVerticalBackgroundReverse {
            0% {
            background-position: 0 200%;
            }
            100% {
            background-position: 0 0;
            }
            }
            @keyframes moveHorizontalBackground {
            0% {
            background-position: 0 0;
            }
            100% {
            background-position: 200% 0;
            }
            }
            @keyframes moveHorizontalBackgroundReverse {
            0% {
            background-position: 200% 0;
            }
            100% {
            background-position: 0 0;
            }
            }
            `}
            </style>
        </Box>
    );
};


export default HomeBackground;
