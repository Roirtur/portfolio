import { Box, Typography } from "@mui/material";
import CornerFrame from "@/components/CornerFrame";
import RotatingDiv from "@/components/Rotate";
import { MilkerFont } from "@/styles/theme";
import "@/styles/navbar/style.css";
import "@/styles/resume-link.css";

export default function ResumeLink() {
  return (
    <RotatingDiv>
      <Box
        component="a"
        href="/portfolio/docs/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View my resume, opens in a new tab"
        className="nav-item content-link resume-link"
      >
        <CornerFrame />
        <Typography component="span" className="text resume-link-content" sx={{ fontFamily: MilkerFont.style.fontFamily }}>
          <span>Resume</span><span aria-hidden="true">↗</span>
        </Typography>
      </Box>
    </RotatingDiv>
  );
}
