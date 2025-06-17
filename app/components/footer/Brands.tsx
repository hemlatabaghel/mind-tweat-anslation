"use client";
import React from "react";
import { Box, Typography, Grid, Link, Button } from "@mui/material";
import SectionTitle from "../SectionLabel";
const brands = [
  { src: "/brands/microsoft.png", alt: "Microsoft" },
  { src: "/brands/walmart.png", alt: "Walmart" },
  { src: "/brands/shopify.png", alt: "Shopify" },
  { src: "/brands/buzzfeed.png", alt: "BuzzFeed" },
  { src: "/brands/levis.png", alt: "Levi's" },
  { src: "/brands/hsbc.png", alt: "HSBC" },
];

const OurBrands = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", px: 2, py: 6 }}>
      {/* Section Label */}
      <Box sx={{  pl: 2, mb: 2 }}>
      <SectionTitle title="Our Brands" />
      </Box>

      {/* Description */}
      <Typography
        sx={{
          fontSize: "14px",
          color: "#333",
          maxWidth: "100%",
          mx: "auto",
          textAlign: "left",
          mb: 2,
          ml:4
        }}
      >
        Discover the names redefining quality, style, and innovation. In this space,
        we shine a spotlight on our most-loved and trusted brands — the ones that
        consistently deliver the best in design, performance, and customer
        satisfaction. Whether you're looking for timeless fashion, cutting-edge
        tech, premium beauty, or home essentials, explore the stories behind the
        labels that our customers can’t stop talking about. Handpicked for their
        excellence, our top brands are more than just names — they’re experiences
        worth sharing.
      </Typography>

   {/* READ MORE */}
   <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                justifyContent: { xs: "center", md: "flex-start" },
                mb: 4,
              }}
            >
              <Button
                disableRipple
                sx={{
                  fontSize: "1.125rem",
                  fontWeight: "bold",
                  color: "gray",
                  fontFamily: "serif",
                  textTransform: "none",
                  ml:4,
                  px: 0,
                  "&:hover": { backgroundColor: "transparent" },
                }}
              >
                READ MORE
              </Button>
              <Box
                sx={{
                  flexGrow: 1,
                  height: "1px",
                  maxWidth: "160px",
                  backgroundColor: "#FDBA74",
                }}
              />
            </Box>

      {/* Brand Logos */}
      <Grid container spacing={3} justifyContent="space-between" margin={4}>
        {brands.map((brand, index) => (
          <Grid
            item
            key={index}
            xs={4}
            sm={3}
            md={2}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={brand.src}
              alt={brand.alt}
              width={100}
                height={50}
              sx={{
                objectFit: "contain",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurBrands;
