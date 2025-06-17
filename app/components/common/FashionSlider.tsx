"use client";

import Image from "next/image";
import { useRef } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";

interface SliderItem {
  image: string;
  text: string;
}

interface FashionSliderProps {
  items: SliderItem[];
  leftArrow?: string;
  rightArrow?: string;
}

export default function FashionSlider({
  items,
  leftArrow = "/icons/Group.png",
  rightArrow = "/icons/Arrow.png",
}: FashionSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  const scroll = (dir: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 340;
      sliderRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        px: { xs: 2, md: 6 },
        py: 6,
      }}
    >
      <Box
        sx={{
          position: "relative",
          maxWidth: "1440px",
          mx: "auto",
        }}
      >
        {/* Left Arrow */}
        <IconButton
          onClick={() => scroll("left")}
          sx={{
            position: "absolute",
            left: -24,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "white",
            boxShadow: 2,
            p: 1,
            borderRadius: "50%",
          }}
        >
          <Image src={leftArrow} alt="left" width={28} height={28} style={{ transform: "rotate(180deg)" }} />
        </IconButton>

        {/* Scrollable Items */}
        <Box
          ref={sliderRef}
          sx={{
            display: "flex",
            gap: 3,
            overflowX: "auto",
            scrollBehavior: "smooth",
            px: 1,
            "&::-webkit-scrollbar": {
              display: "none",
            },
            scrollbarWidth: "none",
          }}
        >
          {items.map((item, idx) => (
            <Box
              key={idx}
              sx={{
                flexShrink: 0,
                width: { xs: 280, sm: 300, xl: 320 },
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: 420,
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 3,
                }}
              >
                <Image
                  src={item.image}
                  alt={`Fashion ${idx + 1}`}
                  width={320}
                  height={420}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  textAlign: "justify",
                  px: 1,
                  color: "text.primary",
                  lineHeight: 1.7,
                }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Right Arrow */}
        <IconButton
          onClick={() => scroll("right")}
          sx={{
            position: "absolute",
            right: -24,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "white",
            boxShadow: 2,
            p: 1,
            borderRadius: "50%",
          }}
        >
          <Image src={rightArrow} alt="right" width={28} height={28} />
        </IconButton>
      </Box>
    </Box>
  );
}
