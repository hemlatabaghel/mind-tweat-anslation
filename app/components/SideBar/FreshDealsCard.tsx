"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Box, Typography, Paper, Button, Avatar } from "@mui/material";
import SearchInput from "./SearchInput";
import { PromoCard } from "../common/PromoCard";

const freshItems = [
  {
    id: 1,
    title:
      "Enjoy hot deals on travel essentials, gadgets, fashion, and more — for a limited time only.",
    image: "/mainStories/fresh1.png",
  },
  {
    id: 2,
    title: "Up to 50% off accessories and more this summer",
    image: "/mainStories/fresh2.png",
  },
  {
    id: 3,
    title: "Must-have tools for your next adventure",
    image: "/mainStories/fresh3.png",
  },
  {
    id: 4,
    title: "Shop now for exclusive limited-time offers",
    image: "/mainStories/fresh4.png",
  },
  {
    id: 5,
    title: "Must-have tools for your next adventure",
    image: "/mainStories/fresh3.png",
  },
  {
    id: 6,
    title: "Enjoy hot deals on travel essentials, gadgets, fashion...",
    image: "/mainStories/fresh1.png",
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

const FreshDealsCard = () => {
  const [search, setSearch] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const filteredItems = freshItems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box component="aside" display="flex" flexDirection="column" gap={4}>
      <Paper
        sx={{
          backgroundColor: "#FFF6E9",
          p: 2,
          border: "1px solid #FAD9A0",
          borderRadius: 2,
        }}
      >
        <Box display="flex" alignItems="center" gap={1} mb={2}>
          <Avatar
            src="/mainStories/freshicon.gif"
            alt="Sunflower Icon"
            sx={{ width: 24, height: 24, borderRadius: 1 }}
          />
          <Typography
            variant="h6"
            sx={{ color: "#F75402", fontFamily: "serif", fontWeight: "bold" }}
          >
            FRESH
          </Typography>
        </Box>

        <SearchInput />

        <Box display="flex" flexDirection="column" gap={2}>
          {filteredItems.slice(0, 4).map((item) => (
            <Box
              key={item.id}
              display="flex"
              gap={2}
              bgcolor="#FFEFD8"
              p={2}
              borderRadius={2}
              alignItems="flex-start"
            >
              <Box
                sx={{
                  width: 119,
                  height: 119,
                  position: "relative",
                  flexShrink: 0,
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                sx={{ fontSize: 12, color: "#265C4B", flex: 1 }}
              >
                <Typography variant="subtitle2" fontWeight="bold" color="#537D5D">
                  {item.title}
                </Typography>
                <Box component="ul" p={0} mt={1} sx={{ listStyle: "none" }}>
                  <Box component="li" display="flex" alignItems="start" gap={1}>
                    <span style={{ fontSize: "7px" }}>🔺</span> Up to 50% off
                  </Box>
                  <Box component="li" display="flex" alignItems="start" gap={1}>
                    <span style={{ fontSize: "7px" }}>👜</span> Travel-ready gear and accessories
                  </Box>
                  <Box component="li" display="flex" alignItems="start" gap={1}>
                    <span style={{ fontSize: "7px" }}>🌞</span> Must-have tech for summer adventures
                  </Box>
                  <Box component="li" display="flex" alignItems="start" gap={1}>
                    <span style={{ fontSize: "7px" }}>🆕</span> New deals dropping daily
                  </Box>
                </Box>
                <Box mt={1} display="flex" justifyContent="center">
                  <Button
                    variant="contained"
                    sx={{
                      px: 2,
                      py: 0.5,
                      fontSize: 12,
                      textTransform: "none",
                      borderRadius: 1,
                      backgroundColor: "#F97316",
                      '&:hover': { backgroundColor: "#ea580c" },
                    }}
                  >
                    Explore Now
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        <Box display="flex" justifyContent="center" gap={1} mt={2}>
          {freshItems.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentSlide(index)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: index === currentSlide ? "#F97316" : "#FED7AA",
                cursor: "pointer",
              }}
            />
          ))}
        </Box>
      </Paper>

      <Box display="flex" flexDirection="column" gap={2}>
        <PromoCard
          images={promoSet1}
          bgColor="#C3FF931A"
          imageRight={false}
          responsive={true}
        />
        <PromoCard
          images={promoSet2}
          bgColor="#FF70AB1A"
          imageRight={false}
          responsive={true}
        />
      </Box>
    </Box>
  );
};

export default FreshDealsCard;
