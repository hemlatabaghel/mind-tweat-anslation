'use client';

import Link from 'next/link';
import Image from 'next/image';
import { AppBar, Box, Toolbar, Typography, Stack, IconButton, Button, Grid, useTheme, useMediaQuery } from '@mui/material';
import { FaBars } from 'react-icons/fa';

const navItems = [
  'Home',
  'Latest',
  'Tech',
  'Food',
  'Entertainment',
  'Health',
  'Money',
  'Deals',
  'Home & Garden',
  'Hacks',
  'Fashion',
];

const socialIcons = [
  { src: '/icons/facebook.png', alt: 'Facebook' },
  { src: '/icons/instagram.png', alt: 'Instagram' },
  { src: '/icons/x.png', alt: 'X' },
  { src: '/icons/twitter.png', alt: 'Twitter' },
  { src: '/icons/youtube.png', alt: 'YouTube' },
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: 'white',
        borderBottom: '1px solid #eee',
        color: 'black',
        fontFamily: 'Playfair Display, serif',
      }}
    >
      {/* Top Logo and Icons */}
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          py: 3,
          px: { xs: 2, md: 8 },
          flexWrap: 'wrap',
        }}
      >
        {/* Logo */}
        <Typography
          variant="h4"
          fontWeight={800}
          sx={{ flexGrow: 1, fontSize: { xs: 24, sm: 32 } }}
        >
          MIND TWEAT
        </Typography>

        {/* Social Icons */}
        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
          {socialIcons.map((icon, index) => (
            <Box
              key={index}
              sx={{
                width: 40,
                height: 40,
                bgcolor: 'rgba(217,217,217,0.2)',
                border: '1px solid #C7FF82',
                borderRadius: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image src={icon.src} alt={icon.alt} width={20} height={20} />
            </Box>
          ))}

          {/* Pink Email */}
          <Box
            sx={{
              width: 40,
              height: 40,
              bgcolor: 'pink',
              borderRadius: 2,
              border: '1px solid #C7FF82',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image src="/icons/email.gif" alt="email" width={26} height={26} />
          </Box>

          {/* Menu Icon */}
          <Box
            sx={{
              width: 40,
              height: 40,
              bgcolor: 'pink',
              borderRadius: 2,
              border: '1px solid #C7FF82',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FaBars color="#fff" size={16} />
          </Box>
        </Stack>
      </Toolbar>

      {/* Navigation Menu */}
      <Box
        component="nav"
        sx={{
          borderTop: '1px solid #eee',
          borderBottom: '1px solid #eee',
          px: { xs: 2, md: 8 },
          py: 2,
          overflowX: 'auto',
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          flexWrap="wrap"
          sx={{ fontWeight: 600, fontSize: '14px', textTransform: 'uppercase' }}
        >
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ & /g, '-')}`}
              style={{
                textDecoration: 'none',
                color: item === 'Home' ? '#ec4899' : '#000',
              }}
            >
              {item}
            </Link>
          ))}
        </Stack>
      </Box>
    </AppBar>
  );
}
