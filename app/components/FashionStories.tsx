"use client";
import React from "react";
import Image from "next/image";
import { Box, Typography, Button, Divider, IconButton } from "@mui/material";
import SectionTitle from "./SectionLabel";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const FashionStories = () => {
  return (
    <Box component="section" mt={8}>
      <SectionTitle title="Fashion Stories" />

      {[0, 1].map((index) => (
        <Box
          key={index}
          display="flex"
          flexDirection={{ xs: "column", md: index % 2 === 1 ? "row-reverse" : "row" }}
          alignItems="center"
          gap={4}
          mt={6}
          mx={{ xs: 0, md: 4 }}
        >
          {/* Image with arrows */}
          <Box position="relative" width={379} height={491} minWidth={379}>
            <Image
              src={`/fashionStory/fashion${index + 1}.png`}
              alt="Fashion Story"
              width={379}
              height={491}
              style={{ borderRadius: 12, objectFit: "cover" }}
            />

            {/* Left Arrow */}
            <IconButton
              sx={{
                position: "absolute",
                top: "50%",
                left: -24,
                transform: "translateY(-50%)",
                backgroundColor: "#EAEAEA",
                width: 32,
                height: 32,
                boxShadow: 1,
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            {/* Right Arrow */}
            <IconButton
              sx={{
                position: "absolute",
                top: "50%",
                right: -24,
                transform: "translateY(-50%)",
                backgroundColor: "#EAEAEA",
                width: 32,
                height: 32,
                boxShadow: 1,
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Text Content */}
          <Box flex={1} textAlign={{ xs: "center", md: "left" }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              fontFamily="serif"
              fontSize={32}
              gutterBottom
            >
              STYLE GUIDE AND HOW TO POST
            </Typography>

            <Typography color="text.secondary" mb={2}>
            Get inspired with our expert styling tips and outfit ideas designed to help you look and feel your best. Whether you're dressing for a special occasion, curating a capsule wardrobe, or learning how to mix textures and prints, our step-by-step guides make fashion easy and approachable.
            </Typography>
            <Typography color="text.secondary" mb={2}>
            From layering essentials to seasonal must-haves, we break down the latest looks and show you how to make them your own — using pieces from our collection. Perfect for fashion newbies and style pros alike.
            </Typography>

            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <Button
                sx={{
                  color: "grey.700",
                  fontWeight: "bold",
                  fontSize: "1.125rem", // ~text-lg
                  fontFamily: "serif",
                  textTransform: "none",
                  p: 0,
                  minWidth: "auto",
                }}
              >
                READ MORE
              </Button>
              <Divider sx={{ flex: 1, maxWidth: 160, bgcolor: "#FDBA74" }} />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default FashionStories;
