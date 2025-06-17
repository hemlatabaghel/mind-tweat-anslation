"use client";
import React, { useState } from "react";
import SectionLabel from "./SectionLabel";
import Image from "next/image";
import {
  Box,
  Typography,
  Grid,
  Paper,
  useTheme,
} from "@mui/material";

const GreenCardGallery = () => {
  const [search, setSearch] = useState("");
  const theme = useTheme();

  const cards = [
    {
      id: 1,
      title: "Conquer The Trails: Finding The Perfect Men’s Hiking Footwear",
      image: "/fashionStory/f1.png",
    },
    {
      id: 2,
      title: "Conquer The Trails: Finding The Perfect Men’s Hiking Footwear",
      subtitle: "Fashion Meets Vintage. Always in style.",
      image: "/fashionStory/f2.png",
    },
    {
      id: 3,
      title: "Conquer The Trails: Finding The Perfect Men’s Hiking Footwear",
      subtitle: "Fashion Meets Vintage. Always in style.",
      image: "/fashionStory/f3.png",
    },
    {
      id: 4,
      title: "Conquer The Trails: Finding The Perfect Men’s Hiking Footwear",
      image: "/fashionStory/f4.png",
    },
  ];

  return (
    <Box
      component="section"
      position="relative"
      py={12}
      px={2}
      textAlign="center"
      bgcolor="white"
    >
      {/* Main Heading */}
      <Typography
        variant="h4"
        color="secondary"
        fontFamily="serif"
        textTransform="uppercase"
        sx={{ letterSpacing: 2, color: "#DB2777" }}
      >
        Experience the Epitome of Refinement – Luxury Fashion Redefined
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        mt={1}
        fontFamily="Inter"
      >
        Celebrating the most creative fashion — where classic designs never go
        out of style.
      </Typography>

      {/* Lime Green Background Bar */}
      <Box
        position="absolute"
        top={180}
        left="50%"
        sx={{
          transform: "translateX(-50%)",
          width: { xs: "90%", md: "1298px" },
          height: "207px",
          backgroundColor: "#C3FF93",
          borderRadius: 2,
          boxShadow: theme.shadows[4],
          zIndex: 0,
        }}
      />

      {/* Card Grid */}
      <Grid
        container
        spacing={3}
        mt={6}
        position="relative"
        zIndex={10}
        maxWidth="lg"
        mx="auto"
        px={2}
      >
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={3} key={card.id}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              {/* Text + Arrow */}
              <Box display="flex" alignItems="flex-start" gap={1} px={1} pt={2} pb={1}>
                <Typography
                  variant="body2"
                  fontWeight="medium"
                  color="text.primary"
                  lineHeight={1.5}
                  sx={{ maxWidth: 190, textAlign: "left" }}
                >
                  {card.title}
                </Typography>
                <Box mt={0.5}>
                  <Image
                    src="/fashionStory/f-arrow.gif"
                    alt="Arrow"
                    width={30}
                    height={30}
                  />
                </Box>
              </Box>

              {/* Card Image */}
              <Paper
                elevation={3}
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 208,
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                />
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GreenCardGallery;
