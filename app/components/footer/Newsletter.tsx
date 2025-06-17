"use client";
import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";

const Newsletter = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 10,
        mt: { xs: 4, md: 8 },
        mb: "-64px", // Negative margin to overlap the footer
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#FFAF61",
          borderRadius: 2,
          boxShadow: 3,
          px: 4,
          py: 5,
          maxWidth: 667,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: "32px",
            fontWeight: 600,
            color: "#fff",
            mb: 2,
          }}
        >
          Join Our NewsLetter
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "16px",
            color: "#fff",
            mb: 3,
          }}
        >
          Provides regular email update sent to subscribers, featuring exclusive
          discounts, special offers, and the latest deals available on the platform.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: "20px",
            }}
          >
            For latest updates, send email
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1f2937",
              color: "#fff",
              textTransform: "none",
              px: 3,
              py: 1,
              fontSize: "14px",
              borderRadius: 1,
              "&:hover": {
                backgroundColor: "#111827",
              },
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Newsletter;
