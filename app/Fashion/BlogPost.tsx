"use client";

import { useState } from "react";
import Image from "next/image";
import { Box, Button, Grid, Typography, IconButton } from "@mui/material";
import { PromoCard } from "../components/common/PromoCard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const images = [
  "/fashionStory/blog1.png",
  "/fashionStory/blog2.png",
  "/fashionStory/blog3.png",
];

const blogPosts = [
  {
    title: "DRESS SHABBILY AND THEY REMEMBER THE DRESS",
    excerpt:
      "From runway reports to real-world street style, our fashion lens captures identity, influence, and the ever-changing face .",
  },
  {
    title: "THE LANGUAGE OF FASHION IS EVOLVING",
    excerpt:
      "Dive into the shifting trends that define personal style and challenge norms across seasons and cities.",
  },
  {
    title: "STREET STYLE THAT SPEAKS LOUDER",
    excerpt:
      "Photographers around the globe are capturing how everyday people make bold fashion statements.",
  },
];

const promoSet1 = [
  "/mainStories/style1.png",
  "/mainStories/fresh1.png",
  "/mainStories/fresh2.png",
];
const promoSet2 = [
  "/mainStories/style2.png",
  "/mainStories/fresh3.png",
  "/mainStories/fresh4.png",
];
export default function BlogPost() {
  const [current, setCurrent] = useState(0);
  // const [current, setCurrent] = useState(0);
  // const images = promoImages[id];

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    // <div className="py-10 px-4 md:px-20 bg-white">
    //   <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    <Box sx={{ flexGrow: 1, py: 10, px: { xs: 2, md: 5 }, bgcolor: "white" }}>
    <Grid container spacing={3} alignItems="flex-start">
        {/* Image */}
        <Grid item size={6} xs={12} lg={5} sx={{ position: "relative" }}>
          <Image
            src={images[current]}
            alt="Blog Post"
            width={500}
            height={400}
            style={{ width: "100%", height: "auto", borderRadius: 8 }}
          />

          {/* Arrows */}
          <IconButton
            onClick={prevSlide}
            sx={{
              position: "absolute",
              top: "50%",
              left: 8,
              transform: "translateY(-50%)",
              bgcolor: "#f0f0f0",
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            onClick={nextSlide}
            sx={{
              position: "absolute",
              top: "50%",
              right: 8,
              transform: "translateY(-50%)",
              bgcolor: "#333",
              color: "#fff",
            }}
          >
            <ChevronRightIcon />
          </IconButton>

          {/* Dots */}
          <Box display="flex" justifyContent="center" gap={1} mt={1}>
            {images.map((_, i) => (
              <Box
                key={i}
                onClick={() => setCurrent(i)}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: i === current ? "orange" : "#ccc",
                  cursor: "pointer",
                }}
              />
            ))}
          </Box>
        </Grid>

  {/* Blog Content */}
  <Grid item size={3} xs={12} lg={4}>
          {[0, 0].map((postIndex, idx) => (
            <Box key={idx} mb={4}>
              <Typography
                variant="h6"
                fontFamily="serif"
                fontWeight="bold"
                gutterBottom
              >
                {blogPosts[postIndex].title}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {blogPosts[postIndex].excerpt}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {blogPosts[postIndex].excerpt}
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                gap={2}
                mt={2}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <Button
                  variant="text"
                  sx={{ color: "#555", fontFamily: "serif", fontWeight: "bold" }}
                >
                  READ MORE
                </Button>
                <Box
                  sx={{
                    flex: 1,
                    height: 1,
                    maxWidth: 160,
                    bgcolor: "orange",
                  }}
                />
              </Box>
              {idx === 0 && (
                <Box
                  sx={{
                    height: 1,
                    bgcolor: "#3F4E4F66",
                    maxWidth: 368,
                    my: 4,
                  }}
                />
              )}
            </Box>
          ))}
        </Grid>

        {/* Promo Cards */}
        <Grid item size={3} xs={12} lg={3}>
          <Box mb={4}>
            <PromoCard
              images={promoSet1}
              bgColor="#C3FF931A"
              imageRight={false}
              responsive={true}
            />
          </Box>
          <PromoCard
            images={promoSet2}
            bgColor="#FF70AB1A"
            imageRight={false}
            responsive={true}
          />
        </Grid>
      {/* </div>
    </div> */}
       </Grid>
    </Box>
  );
}
