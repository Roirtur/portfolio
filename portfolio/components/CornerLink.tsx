import { Box, Typography } from "@mui/material";
import Link from "next/link";
import CornerFrame from "@/components/CornerFrame";
import RotatingDiv from "@/components/Rotate";

export default function CornerLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <RotatingDiv>
      <Box component={Link} href={href} className="nav-item content-link" sx={{ position: "relative", px: 2, py: 1, display: "inline-block" }}>
        <CornerFrame />
        <Typography className="text" sx={{ userSelect: "none" }}>{children}</Typography>
      </Box>
    </RotatingDiv>
  );
}
