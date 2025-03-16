"use client";

import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { sendEmail } from "./sendEmail";
import { MilkerFont, SofiaProFont } from "@/styles/theme";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        px: 4,
        py: 6,
        backgroundColor: "#101214",
        color: "#f1c2d6",
        borderRadius: 2,
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
      }}
    >
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          required
          variant="standard"
          InputLabelProps={{
            style: { color: "#f1c2d6" },
          }}
          InputProps={{
            style: { color: "#f1c2d6" },
          }}
          sx={{
            "& .MuiInput-underline:before": {
              borderBottomColor: "#f1c2d6",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#C8C2CF",
            },
          }}
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          required
          variant="standard"
          InputLabelProps={{
            style: { color: "#f1c2d6" },
          }}
          InputProps={{
            style: { color: "#f1c2d6" },
          }}
          sx={{
            "& .MuiInput-underline:before": {
              borderBottomColor: "#f1c2d6",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#C8C2CF",
            },
          }}
        />
        <TextField
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          required
          InputLabelProps={{
            style: { color: "#f1c2d6" },
          }}
          InputProps={{
            style: { color: "#f1c2d6" },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#f1c2d6",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#C8C2CF",
              },
            },
          }}
        />
        {error && <Typography color="error">{error}</Typography>}
        {success && <Typography color="primary">Message sent successfully!</Typography>}
        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          sx={{
            mt: 2,
            color: "#fff",
            backgroundColor: "#0f402b",
            "&:hover": {
              backgroundColor: "#0d3625",
            },
          }}
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Box>
  );
}
