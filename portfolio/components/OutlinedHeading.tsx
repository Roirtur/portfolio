import { Typography } from "@mui/material";
import { MilkerFont } from "@/styles/theme";

export default function OutlinedHeading({ children, component = "h2", className }: { children: React.ReactNode; component?: "h1" | "h2" | "h3"; className?: string }) {
  return (
    <Typography component={component} className={className} sx={{
      fontFamily: `${MilkerFont.style.fontFamily}, Arial, sans-serif`,
      fontSize: "clamp(1.7rem, 2.5vw, 2.5rem)",
      color: "#f1c2d6",
      textShadow: "2px 2px 0 #0f402b, 2px -2px 0 #0f402b, -2px 2px 0 #0f402b, -2px -2px 0 #0f402b, 2px 0 0 #0f402b, 0 2px 0 #0f402b, -2px 0 0 #0f402b, 0 -2px 0 #0f402b",
      lineHeight: 1.1,
    }}>{children}</Typography>
  );
}
