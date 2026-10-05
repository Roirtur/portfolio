import { Box } from "@mui/material";

export default function CornerFrame() {
  return (
    <>
      <Box className="corner-container" sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "flex" }} aria-hidden="true">
        <Box className="tr corner horizontal" /><Box className="rt corner vertical" />
        <Box className="tl corner horizontal" /><Box className="lt corner vertical" />
        <Box className="br corner horizontal" /><Box className="rb corner vertical" />
        <Box className="bl corner horizontal" /><Box className="lb corner vertical" />
      </Box>
      <Box className="revert-colors" aria-hidden="true" />
    </>
  );
}
