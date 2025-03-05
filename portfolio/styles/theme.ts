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
                    backgroundColor: "#222831", // Background color for body
                    color: "#ffffff", // Text color for body
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    backgroundColor: "#393E46", // Default background color for IconButton
                    color: "#EEE", // Default text color for IconButton
                    transition: "all 0.2s ease-in-out", // Smooth transition
                    '&.active': {
                        color: "#FFD369", // Active IconButton text color
                        fontWeight: "bold", // Active IconButton font weight
                        backgroundColor: "#2F363F",
                        transform: "scale(1.1)", // Slightly enlarge the IconButton when active
                        '& .MuiSvgIcon-root': {
                            filter: "drop-shadow(0px 2px 0px rgb(222, 20, 20, 1))", // Add a drop shadow to the icon
                        },
                    },
                    '&:hover': {
                        backgroundColor: "#2F363F", // Background color on hover with opacity
                        color: "#FFD369", // Text color on hover
                        transform: "scale(1.1)", // Slightly enlarge the IconButton when active
                        '& .MuiSvgIcon-root': {
                            filter: "drop-shadow(0px 2px 0px rgb(222, 20, 20, 1))", // Add a drop shadow to the icon
                        },
                    },
                    fontWeight: "normal", // Non-active IconButton font weight
                },
            },
        },
    },
});

export default theme;