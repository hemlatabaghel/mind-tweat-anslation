"use client";

import { useState } from "react";
import Image from "next/image";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";

interface PromoCardProps {
  images: string[];
  bgColor: string;
  imageRight?: boolean;
  responsive?: boolean;
}

export function PromoCard({
  images,
  bgColor,
  imageRight = false,
  responsive = false,
}: PromoCardProps) {
  const [current, setCurrent] = useState(0);
  const isSmall = useMediaQuery("(max-width:600px)");

  const handleDotClick = (index: number) => {
    setCurrent(index);
  };

  const imageBox = (
    <Box>
      <Box
        sx={{
          width: 134,
          height: 134,
          position: "relative",
          borderRadius: 2,
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <Image
          src={images[current]}
          alt={`Promo ${current + 1}`}
          fill
          style={{ objectFit: "cover", borderRadius: "8px" }}
        />
      </Box>

      {/* Dots */}
      <Box display="flex" justifyContent="center" gap={1} mt={1}>
        {images.map((_, index) => (
          <Box
            key={index}
            component="button"
            onClick={() => handleDotClick(index)}
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: index === current ? "#333" : "#ccc",
              border: "none",
              cursor: "pointer",
              p: 0,
            }}
          />
        ))}
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        border: "1px solid #e5e7eb",
        backgroundColor: bgColor,
      }}
    >
      <Typography variant="h6" fontFamily="serif" fontWeight="bold" mb={2}>
        STYLE THAT SPEAKS
      </Typography>

      <Box
        display="flex"
        flexDirection={
          responsive
            ? isSmall
              ? "column"
              : imageRight
              ? "row-reverse"
              : "row"
            : imageRight
            ? "row-reverse"
            : "row"
        }
        gap={2}
        alignItems="flex-start"
      >
        {imageBox}

        <Box>
          <Typography variant="body2" color="black" mb={1} lineHeight={1.4}>
            Enjoy hot deals on travel essentials, gadgets, fashion, and more — for a limited time only.
          </Typography>

          <Box component="ul" sx={{ pl: 0, listStyle: "none", mt: 1, fontSize: 10 }}>
            <li style={{ display: "flex", alignItems: "start", gap: 4 }}>
              <span style={{ fontSize: "0.875rem" }}>🔺</span> Up to 50% off
            </li>
            <li style={{ display: "flex", alignItems: "start", gap: 4 }}>
              <span style={{ fontSize: "0.875rem" }}>👜</span> Travel-ready gear and accessories
            </li>
            <li style={{ display: "flex", alignItems: "start", gap: 4 }}>
              <span style={{ fontSize: "0.875rem" }}>🌞</span> Must-have tech for summer adventures
            </li>
            <li style={{ display: "flex", alignItems: "start", gap: 4 }}>
              <span style={{ fontSize: "0.875rem" }}>🆕</span> New deals dropping daily
            </li>
          </Box>

          <Button
            variant="contained"
            size="small"
            sx={{
              mt: 2,
              backgroundColor: "#fb923c",
              color: "white",
              px: 2,
              py: 0.5,
              fontSize: 12,
              boxShadow: 1,
              textTransform: "none",
              borderRadius: 1,
            }}
          >
            Explore Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
