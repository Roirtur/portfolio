import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#fff", // Cool blue primary color
        },
        secondary: {
            main: "#fff", // Cool purple secondary color
        },
        background: {
            default: "#fff", // Dark background color
        },
        text: {
            primary: "#ffffff", // White text color
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "#C8C2CF", // Background color for body
                    color: "#101214", // Text color for body
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