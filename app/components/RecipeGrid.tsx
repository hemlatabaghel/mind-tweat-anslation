"use client";
import React, { useState } from "react";
import SectionLabel from "./SectionLabel";
import Image from "next/image";
import {
  Box,
  Typography,
  Grid,
  Button,
  IconButton,
  useTheme,
  InputBase,
} from "@mui/material";

const RecipeGrid = () => {
  const theme = useTheme();
  const [search, setSearch] = useState("");

  return (
    <Box sx={{ backgroundColor: "#fff", py: 6, px: 2 , flexGrow: 1 }}>
      <Grid
        container spacing={3} columns={16}
      
      >
        {/* LEFT COLUMN */}
        <Grid item  size={10}>
          <Box sx={{ px: { xs: 1, sm: 3, md: 4 }, py: 2 }}>
            <SectionLabel title="EXperiance IT" />
            <Typography
            mt={4}
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: "90%", mb: 3 }}
            >
              Step into the heart of the home with our curated cooking content — where delicious ideas come to life. Whether you're a beginner in the kitchen or a seasoned home chef, you'll find easy-to-follow recipes, time-saving hacks, and smart kitchen tips that turn everyday meals into memorable moments.
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

            {/* RECIPE GRID */}
            {/* <Box sx={{ flexGrow: 1 ,}}>
              <Grid container spacing={2} columns={16}>
                <Grid size={8}>

                </Grid>
                <Grid size={8}>

                </Grid>
              </Grid>
            </Box> */}
            <Box sx={{ backgroundColor: "#ECF4C8", p: 2, borderRadius: 2 }}>
              <Grid container spacing={2}>
                {[...Array(6)].map((_, i) => (
                  <Grid item xs={12} sm={6} md={4} key={i}>
                    <Box
                      sx={{
                        position: "relative",
                        height: 224,
                        borderRadius: 2,
                        overflow: "hidden",
                        boxShadow: 3,
                        "&:hover .hoverOverlay": { opacity: 1 },
                      }}
                    >
                      <img
                        src={`/EX/recipe${i + 1}.png`}
                        alt={`Recipe ${i + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                      <Box
                        className="hoverOverlay"
                        sx={{
                          position: "absolute",
                          inset: 0,
                          backgroundColor: "rgba(0,0,0,0.25)",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          opacity: 0,
                          transition: "opacity 0.3s ease",
                        }}
                      >
                        <IconButton
                          sx={{
                            width: 40,
                            height: 40,
                            backgroundColor: "#000",
                            borderRadius: "50%",
                            boxShadow: 3,
                            "&:hover": { backgroundColor: "#111" },
                          }}
                        >
                          <img
                            src="/EX/vectorVedio.png"
                            alt="Play"
                            style={{ width: 16, height: 16 }}
                          />
                        </IconButton>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          position: "absolute",
                          bottom: 8,
                          left: 8,
                          color: "#fff",
                          fontWeight: "bold",
                          textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
                        }}
                      >
                        Where Every Recipe Tells a Story
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* PAGINATION DOTS */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 3,
                  gap: 1,
                }}
              >
                {[0, 1, 2, 3, 4].map((dot, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: index === 2 ? "#111827" : "#D1D5DB",
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* RIGHT SIDEBAR */}
        <Grid
          item
          size={6}
          mt={2}

          sx={{
            bgcolor: "#FFF7EE",
            p: 2,
            borderRadius: 2,
            border: "1px dashed #FFB74D",
            boxShadow: 1,
          }}
        >
          <Box display="flex" alignItems="center" gap={1.5} mb={2}>
            <Box
              component="img"
              src="/mainStories/freshicon.gif"
              alt="Fresh Icon"
              width={24}
              height={24}
            />
            <Typography variant="h6" fontWeight="bold" color="#FF6B00">
              FRESH!
            </Typography>
          </Box>

          {/* SEARCH BAR */}
          <Box
            display="flex"
            alignItems="center"
            bgcolor="#FFF0D9"
            border="1px solid #B9B18D"
            borderRadius={2}
            overflow="hidden"
            mb={3}
          >
            <Box
              sx={{
                backgroundColor: "#96A882",
                p: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
              }}
            >
              <Box
                component="img"
                src="/mainStories/search.gif"
                alt="Search"
                width={24}
                height={24}
              />
            </Box>
            <InputBase
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{
                px: 2,
                py: 1,
                flex: 1,
                fontSize: 14,
                backgroundColor: "#FFF0D9",
              }}
            />
          </Box>

          {/* SIDEBAR CARDS */}
          <Box display="flex" flexDirection="column" gap={2}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Box
                key={i}
                display="flex"
                gap={2}
                borderBottom="1px solid #D9D9D980"
                pb={1}
              >
                <Box
                  component="img"
                  src={`/EX/ex_${i + 1}.png`}
                  alt={`Promo ${i + 1}`}
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: 2,
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  fontSize={12}
                >
                  <Typography
                    color="#FF6B00"
                    fontWeight={600}
                    fontSize={12}
                    lineHeight={1.3}
                  >
                    Enjoy hot deals on travel essentials, gadgets, fashion, and
                    more —{" "}
                    <Box component="span" fontWeight="bold">
                      for a limited time only.
                    </Box>
                  </Typography>
                  <ul
                    style={{
                      fontSize: "11px",
                      color: "#4B5563",
                      marginTop: 4,
                      paddingLeft: 16,
                      lineHeight: "1.2",
                    }}
                  >
                    <li>🏖️ Up to 50% off</li>
                    <li>🧳 Travel-ready gear and accessories</li>
                    <li>📱 Must-have tech for summer adventures</li>
                    <li> 🎉 New deals dropping daily!</li>
                  </ul>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      mt: 1,
                      bgcolor: "orange",
                      color: "white",
                      textTransform: "none",
                      px: 2,
                      py: 0.5,
                      fontSize: 11,
                      boxShadow: 1,
                      width: "fit-content",
                    }}
                    startIcon={
                      <Box
                        component="img"
                        src="/mainStories/export.gif"
                        alt="arrow"
                        width={10}
                        height={10}
                      />
                    }
                  >
                    Explore Now
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>

          {/* PAGINATION DOTS */}
          <Box display="flex" justifyContent="center" mt={4} gap={1}>
            {[0, 1, 2].map((dot, i) => (
              <Box
                key={i}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: i === 0 ? "#FF6B00" : "orange.100",
                }}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecipeGrid;
