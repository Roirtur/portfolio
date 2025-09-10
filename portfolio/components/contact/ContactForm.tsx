"use client";

import { useState, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { sendEmail } from "./sendEmail";
import { MilkerFont, SofiaProFont } from "@/styles/theme";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 3000); // Success message will disappear after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await sendEmail(name, email, message);

      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ width: "100%", height: "100%" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          px: 6,
          py: 8,
          background: "linear-gradient(135deg, rgba(16, 18, 20, 0.95) 0%, rgba(20, 25, 30, 0.9) 50%, rgba(24, 28, 32, 0.95) 100%)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(241, 194, 214, 0.1)",
          borderRadius: 4,
          boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3), inset 0px 1px 0px rgba(255, 255, 255, 0.1)",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(45deg, transparent 30%, rgba(241, 194, 214, 0.05) 50%, transparent 70%)",
            pointerEvents: "none",
          },
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{ marginBottom: "2rem", textAlign: "center" }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: `${MilkerFont.style.fontFamily}, Arial, sans-serif`,
              fontSize: "2.5rem",
              color: "#f1c2d6",
              textShadow: "2px 2px 0 #0f402b, 2px 2px 0 #0f402b, 2px -2px 0 #0f402b, -2px 2px 0 #0f402b, -2px -2px 0 #0f402b, 2px 0px 0 #0f402b, 0px 2px 0 #0f402b, -2px 0px 0 #0f402b, 0px -2px 0 #0f402b",
              marginBottom: 1,
              userSelect: "none",
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: `${SofiaProFont.style.fontFamily}, Arial, sans-serif`,
              fontSize: "1.1rem",
              color: "#C8C2CF",
              opacity: 0.8,
              userSelect: "none",
            }}
          >
            Let&apos;s create something amazing together
          </Typography>
        </motion.div>
        {/* Form */}
        <motion.form 
          onSubmit={handleSubmit} 
          style={{ width: "100%", maxWidth: "500px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <TextField
              label="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              margin="normal"
              required
              variant="filled"
              InputLabelProps={{
                style: { 
                  color: "#C8C2CF",
                  fontFamily: `${SofiaProFont.style.fontFamily}, Arial, sans-serif`,
                },
              }}
              InputProps={{
                style: { 
                  color: "#f1c2d6",
                  fontFamily: `${SofiaProFont.style.fontFamily}, Arial, sans-serif`,
                  fontSize: "1.1rem",
                },
                disableUnderline: true,
              }}
              sx={{
                mb: 2,
                "& .MuiFilledInput-root": {
                  backgroundColor: "rgba(200, 194, 207, 0.08)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 2,
                  border: "1px solid rgba(241, 194, 214, 0.2)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(200, 194, 207, 0.12)",
                    borderColor: "rgba(241, 194, 214, 0.3)",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "rgba(200, 194, 207, 0.15)",
                    borderColor: "#f1c2d6",
                    boxShadow: "0 0 20px rgba(241, 194, 214, 0.2)",
                  },
                  "&::before, &::after": {
                    display: "none",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#f1c2d6",
                },
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          >
            <TextField
              label="Your Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
              required
              variant="filled"
              InputLabelProps={{
                style: { 
                  color: "#C8C2CF",
                  fontFamily: `${SofiaProFont.style.fontFamily}, Arial, sans-serif`,
                },
              }}
              InputProps={{
                style: { 
                  color: "#f1c2d6",
                  fontFamily: `${SofiaProFont.style.fontFamily}, Arial, sans-serif`,
                  fontSize: "1.1rem",
                },
                disableUnderline: true,
              }}
              sx={{
                mb: 2,
                "& .MuiFilledInput-root": {
                  backgroundColor: "rgba(200, 194, 207, 0.08)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 2,
                  border: "1px solid rgba(241, 194, 214, 0.2)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(200, 194, 207, 0.12)",
                    borderColor: "rgba(241, 194, 214, 0.3)",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "rgba(200, 194, 207, 0.15)",
                    borderColor: "#f1c2d6",
                    boxShadow: "0 0 20px rgba(241, 194, 214, 0.2)",
                  },
                  "&::before, &::after": {
                    display: "none",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#f1c2d6",
                },
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <TextField
              label="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              fullWidth
              margin="normal"
              multiline
              rows={4}
              required
              variant="filled"
              InputLabelProps={{
                style: { 
                  color: "#C8C2CF",
                  fontFamily: `${SofiaProFont.style.fontFamily}, Arial, sans-serif`,
                },
              }}
              InputProps={{
                style: { 
                  color: "#f1c2d6",
                  fontFamily: `${SofiaProFont.style.fontFamily}, Arial, sans-serif`,
                  fontSize: "1.1rem",
                },
                disableUnderline: true,
              }}
              sx={{
                mb: 3,
                "& .MuiFilledInput-root": {
                  backgroundColor: "rgba(200, 194, 207, 0.08)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 2,
                  border: "1px solid rgba(241, 194, 214, 0.2)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(200, 194, 207, 0.12)",
                    borderColor: "rgba(241, 194, 214, 0.3)",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "rgba(200, 194, 207, 0.15)",
                    borderColor: "#f1c2d6",
                    boxShadow: "0 0 20px rgba(241, 194, 214, 0.2)",
                  },
                  "&::before, &::after": {
                    display: "none",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#f1c2d6",
                },
              }}
            />
          </motion.div>
          {/* Status Messages */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Typography 
                sx={{ 
                  color: "#ff6b6b", 
                  textAlign: "center", 
                  mb: 2,
                  fontFamily: `${SofiaProFont.style.fontFamily}, Arial, sans-serif`,
                  fontSize: "1rem",
                  padding: 2,
                  borderRadius: 2,
                  backgroundColor: "rgba(255, 107, 107, 0.1)",
                  border: "1px solid rgba(255, 107, 107, 0.3)",
                }}
              >
                {error}
              </Typography>
            </motion.div>
          )}
          
          {success && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Typography 
                sx={{ 
                  color: "#4ecdc4", 
                  textAlign: "center", 
                  mb: 2,
                  fontFamily: `${SofiaProFont.style.fontFamily}, Arial, sans-serif`,
                  fontSize: "1rem",
                  padding: 2,
                  borderRadius: 2,
                  backgroundColor: "rgba(78, 205, 196, 0.1)",
                  border: "1px solid rgba(78, 205, 196, 0.3)",
                }}
              >
                ✨ Message sent successfully! I&apos;ll get back to you soon.
              </Typography>
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                mt: 2,
                px: 6,
                py: 2,
                fontSize: "1.1rem",
                fontFamily: `${SofiaProFont.style.fontFamily}, Arial, sans-serif`,
                fontWeight: "600",
                color: "#fff",
                background: loading 
                  ? "linear-gradient(135deg, #666666 0%, #555555 100%)"
                  : "linear-gradient(135deg, #0f402b 0%, #1a5a3e 100%)",
                border: "1px solid rgba(241, 194, 214, 0.2)",
                borderRadius: 3,
                textTransform: "none",
                transition: "all 0.3s ease",
                boxShadow: loading 
                  ? "0px 4px 15px rgba(0, 0, 0, 0.2)"
                  : "0px 8px 25px rgba(15, 64, 43, 0.4), inset 0px 1px 0px rgba(255, 255, 255, 0.1)",
                "&:hover": {
                  background: loading 
                    ? "linear-gradient(135deg, #666666 0%, #555555 100%)"
                    : "linear-gradient(135deg, #0d3625 0%, #0a2b1c 100%)",
                  transform: loading ? "none" : "translateY(-2px)",
                  boxShadow: loading 
                    ? "0px 4px 15px rgba(0, 0, 0, 0.2)"
                    : "0px 12px 35px rgba(15, 64, 43, 0.5), inset 0px 1px 0px rgba(255, 255, 255, 0.1)",
                },
                "&:active": {
                  transform: loading ? "none" : "translateY(0px)",
                },
                "&.Mui-disabled": {
                  color: "#fff",
                  background: "linear-gradient(135deg, #666666 0%, #555555 100%)",
                },
              }}
            >
              {loading ? (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    style={{
                      width: 16,
                      height: 16,
                      border: "2px solid rgba(255, 255, 255, 0.3)",
                      borderTop: "2px solid #fff",
                      borderRadius: "50%",
                    }}
                  />
                  Sending...
                </Box>
              ) : (
                "Send Message"
              )}
            </Button>
          </motion.div>
        </motion.form>
      </Box>
    </motion.div>
  );
}
