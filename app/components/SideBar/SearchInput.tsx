"use client";
import React, { useState } from "react";
import { Box, InputBase, Paper } from "@mui/material";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  return (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#FFF0D9',
        border: '1px solid #B9B18D',
        borderRadius: '8px',
        overflow: 'hidden',
        mb: 2,
      }}
    >
      {/* Icon Box */}
      <Box
        sx={{
          backgroundColor: '#96A882',
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px',
        }}
      >
        <Box
          component="img"
          src="/mainStories/search.gif"
          alt="Search"
          sx={{ width: 24, height: 24 }}
        />
      </Box>

      {/* Input Field */}
      <InputBase
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          flex: 1,
          px: 2,
          py: 1,
          fontSize: 14,
          backgroundColor: '#FFF0D9',
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </Paper>
  );
};

export default SearchInput;
