import { createTheme } from "@mui/material/styles";
import localFont from 'next/font/local';

// Define the font
export const ClashDisplayFont = localFont({
    src: '../public/fonts/ClashDisplay-Variable.ttf', // Path to the font file
    display: 'swap', // Improves rendering performance
});

export const MilkerFont = localFont({
    src: '../public/fonts/Milker.otf', // Path to the another font file
    display: 'swap', // Improves rendering performance
});

export const SofiaProFont = localFont({
    src: '../public/fonts/Sofia Pro Regular Az.otf', // Path to the another font file
    display: 'swap', // Improves rendering performance
});

// #f1c2d6
// #102F22

const theme = createTheme({
    typography: {
        fontFamily: `${ClashDisplayFont.style.fontFamily}, Arial, sans-serif`, // Use the custom font variable
        fontWeightBold: 700, // Bold font weight
        fontWeightMedium: 300, // Extra bold font weight
        fontWeightRegular: 400, // Regular font weight
    },
    palette: {
        primary: {
            main: "#fff",
        },
        secondary: {
            main: "#fff",
        },
        background: {
            default: "#fff",
        },
        text: {
            primary: "#ffffff",
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "#C8C2CF", // Background color for body
                    color: "#101214", // Text color for body
                    fontFamily: "'Roboto', sans-serif", // Apply the custom font to the body
                    overflowX: "hidden", // Hide horizontal overflow
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    backgroundColor: "#CC2B52", // Default background color for IconButton
                    color: "#E8BCB9", // Default text color for IconButton
                    transition: "all 0.2s", // Smooth transition
                    '&.active': {
                        color: "#FFD369", // Active IconButton text color
                        fontWeight: "bold", // Active IconButton font weight
                        backgroundColor: "#AF1740",
                        transform: "scale(1.1)", // Slightly enlarge the IconButton when active
                        '& .MuiSvgIcon-root': {
                            filter: "drop-shadow(4px 4px 0px rgb(20, 20, 20, 1))", // Add a larger drop shadow to the icon
                        },
                    },
                    '&:hover': {
                        backgroundColor: "#AF1740", // Background color on hover with opacity
                        color: "#FFD369", // Text color on hover
                        transform: "scale(1.1)", // Slightly enlarge the IconButton when active
                        '& .MuiSvgIcon-root': {
                            filter: "drop-shadow(4px 4px 0px rgb(20, 20, 20, 1))", // Add a drop shadow to the icon
                        },
                    },
                    '& .MuiSvgIcon-root': {
                        transition: "all 0.1s", // Smooth transition
                        filter: "drop-shadow(2px 2px 0px rgb(20, 20, 20, 1))", // Add a larger drop shadow to the icon
                    },
                    fontWeight: "normal", // Non-active IconButton font weight
                },
            },
        },
    },
});

export default theme;