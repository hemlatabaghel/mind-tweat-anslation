"use client";

import React from "react";
import SectionLabel from "../components/SectionLabel";
import FashionSlider from "../components/common/FashionSlider";
import Image from "next/image";
import BlogPost from "./BlogPost";
import RecipeGrid from "../components/RecipeGrid";
import { Box, Typography, Button, Divider, Grid } from "@mui/material";

const fashionData = [
  {
    image: "/fashionStory/f-slide1.png",
    text: "From layering essentials to seasonal must-haves, we break down the latest looks and show you how to make them your own — using pieces from our collection. Perfect for fashion newbies and style pros alike.",
  },
  {
    image: "/fashionStory/f-slide2.png",
    text: "From layering essentials to seasonal must-haves, we break down the latest looks and show you how to make them your own — using pieces from our collection. Perfect for fashion newbies and style pros alike.",
  },
  {
    image: "/fashionStory/f-slide3.png",
    text: "From layering essentials to seasonal must-haves, we break down the latest looks and show you how to make them your own — using pieces from our collection. Perfect for fashion newbies and style pros alike.",
  },
  {
    image: "/fashionStory/f-slide4.png",
    text: "From layering essentials to seasonal must-haves, we break down the latest looks and show you how to make them your own — using pieces from our collection. Perfect for fashion newbies and style pros alike.",
  },
  {
    image: "/fashionStory/f-slide2.png",
    text: "From layering essentials to seasonal must-haves, we break down the latest looks and show you how to make them your own — using pieces from our collection. Perfect for fashion newbies and style pros alike.",
  },
];

const fashionData2 = [
  {
    image: "/fashionStory/f2-slide1.png",
    text: "From layering essentials to seasonal must-haves, we break down the latest looks and show you how to make them your own — using pieces from our collection. Perfect for fashion newbies and style pros alike.",
  },
  {
    image: "/fashionStory/f2-slide2.png",
    text: "From layering essentials to seasonal must-haves, we break down the latest looks and show you how to make them your own — using pieces from our collection. Perfect for fashion newbies and style pros alike.",
  },
  {
    image: "/fashionStory/f2-slide3.png",
    text: "From layering essentials to seasonal must-haves, we break down the latest looks and show you how to make them your own — using pieces from our collection. Perfect for fashion newbies and style pros alike.",
  },
  {
    image: "/fashionStory/f2-slide4.png",
    text: "From layering essentials to seasonal must-haves, we break down the latest looks and show you how to make them your own — using pieces from our collection. Perfect for fashion newbies and style pros alike.",
  },
  {
    image: "/fashionStory/f-slide2.png",
    text: "From layering essentials to seasonal must-haves, we break down the latest looks and show you how to make them your own — using pieces from our collection. Perfect for fashion newbies and style pros alike.",
  },
];

const Fashion = () => {
  return (
    <>
      <Box component="section">
        <SectionLabel title="Fasion Stories" />
        <Grid
          container
          spacing={4}
          alignItems="space-between"
          justifyContent="space-between"
          sx={{ mt: 4, px: { xs: 2, md: 4 } }}
        >
          <Grid item size={4}  >
            <Box sx={{ position: "relative", width: 379, height: 491, mb: 2 }}>
              <Image
                src={`/fashionStory/fashion1.png`}
                alt={`Fashion Story `}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                style={{ borderRadius: 12 }}
              />
            </Box>
            <Typography variant="h6" sx={{ ml: 1, fontFamily: "serif" }}>
              STYLE ACCORDING TO YOUR MOOD
            </Typography>
          </Grid>

          <Grid item size={8} sx={{marginTop:"100px"}} >
            <Typography
              variant="h5"
              fontWeight="bold"
              gutterBottom
              sx={{ fontFamily: "serif" }}
            >
              STYLE GUIDE AND HOW TO POST
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Get inspired with our expert styling tips and outfit ideas
              designed to help you look and feel your best. Whether you're
              dressing for a special occasion, curating a capsule wardrobe, or
              learning how to mix textures and prints, our step-by-step guides
              make fashion easy and approachable.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Get inspired with our expert styling tips and outfit ideas
              designed to help you look and feel your best. Whether you're
              dressing for a special occasion, curating a capsule wardrobe, or
              learning how to mix textures and prints, our step-by-step guides
              make fashion easy and approachable.
            </Typography>

            <Box display="flex" alignItems="center" gap={2}>
              <Button
                variant="text"
                sx={{ fontWeight: "bold", fontFamily: "serif", color: "gray" }}
              >
                READ MORE
              </Button>
              <Divider
                sx={{
                  flex: 1,
                  maxWidth: 160,
                  bgcolor: "orange.300",
                  height: 1,
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <FashionSlider items={fashionData} />

        <Grid
          container
          spacing={6}
          alignItems="space-between"
          justifyContent="space-between"
          sx={{ mt: 4, px: { xs: 2, md: 4 } }}
        >
          <Grid item size={8} sx={{marginTop:"100px"}}>
            <Typography
              variant="h5"
              fontWeight="bold"
              gutterBottom
              sx={{ fontFamily: "serif" }}
            >
              STYLE GUIDE AND HOW TO POST
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Get inspired with our expert styling tips and outfit ideas
              designed to help you look and feel your best. Whether you're
              dressing for a special occasion, curating a capsule wardrobe, or
              learning how to mix textures and prints, our step-by-step guides
              make fashion easy and approachable.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Get inspired with our expert styling tips and outfit ideas
              designed to help you look and feel your best. Whether you're
              dressing for a special occasion, curating a capsule wardrobe, or
              learning how to mix textures and prints, our step-by-step guides
              make fashion easy and approachable.
            </Typography>

            <Box display="flex" alignItems="center" gap={2}>
              <Button
                variant="text"
                sx={{ fontWeight: "bold", fontFamily: "serif", color: "gray" }}
              >
                READ MORE
              </Button>
              <Divider
                sx={{
                  flex: 1,
                  maxWidth: 160,
                  bgcolor: "orange.300",
                  height: 1,
                }}
              />
            </Box>
          </Grid>
          <Grid item size={4}>
            <Box sx={{ position: "relative", width: 379, height: 491, mb: 2 }}>
              <Image
                src={`/fashionStory/fashion2.png`}
                alt={`Fashion Story `}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                style={{ borderRadius: 12 }}
              />
            </Box>
            <Typography variant="h6" sx={{ ml: 1, fontFamily: "serif" }}>
              STYLE ACCORDING TO YOUR MOOD
            </Typography>
          </Grid>
        </Grid>

        <FashionSlider items={fashionData2} />
      </Box>

      <Box
      component="section"
      sx={{
        py: 12,
        px: { xs: 2, md: 5 },
      }}
    >
      {/* Header Image with Title */}
      <Box
        sx={{
          position: "relative",
          mb: 8,
          maxWidth: "1080px",
          mx: "auto",
        }}
      >
        <Image
          src="/fashionStory/f-girls.png"
          alt="Luxury Header"
          width={1036}
          height={442}
          style={{
            borderRadius: "8px",
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
        <Typography
          variant="h2"
          sx={{
            position: "absolute",
            bottom: 16,
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            textAlign: "center",
            fontSize: { xs: "1rem", sm: "1.25rem", md: "2rem" },
            fontFamily: "serif",
            fontWeight: 600,
            px: 2,
          }}
        >
          EXPERIENCE THE EPITOME OF REFINEMENT – LUXURY FASHION REDEFINED
        </Typography>
      </Box>

      {/* Description */}
      <Box
        sx={{
          maxWidth: "100%",
          mx: "auto",
          textAlign: "justify",
          color: "text.primary",
          fontSize: { xs: "0.875rem", md: "1rem" },
          lineHeight: 1.8,
          "& > p": {
            mb: 2,
          },
        }}
      >
        <Typography component="p">
        Get inspired with our expert styling tips and outfit ideas designed to help you look and feel your best. Whether you're dressing for a special occasion, curating a capsule wardrobe, or learning how to mix textures and prints, our step-by-step guides make fashion easy and approachable.
        </Typography>
        <Typography component="p">
        From layering essentials to seasonal must-haves, we break down the latest looks and show you how to make them your own — using pieces from our collection. Perfect for fashion newbies and style pros alike. From layering essentials to seasonal must-haves, we break down the latest looks and show you how to make them your own — using pieces from our collection. Perfect for fashion newbies and style pros alike.
        </Typography>
      </Box>
    </Box>

      <BlogPost />
      <RecipeGrid />
    </>
  );
};

export default Fashion;
