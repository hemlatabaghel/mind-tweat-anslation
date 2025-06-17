import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import Image from 'next/image';
import SectionTitle from './SectionLabel';

const TechStories = ({ techStories = [], activeIndex = 0 }) => {
  if (!Array.isArray(techStories) || techStories.length === 0) {
    return null; // Or return a message/loading indicator
  }

  return (
    <Box>
      <SectionTitle title='Tech Story'/>

      <Box display="flex" flexDirection="column" gap={10}>
        {techStories.map((story, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection={{ xs: 'column', md: index % 2 === 1 ? 'row-reverse' : 'row' }}
            alignItems="center"
            gap={8}
            position="relative"
          >
            {/* Image Section */}
            <Box
              position="relative"
              width={{ xs: '100%', md: '50%' }}
              height={406}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {/* Orange Background */}
              <Box
                sx={{
                  position: 'absolute',
                  width: 444,
                  height: 245,
                  backgroundColor: '#FFD18E',
                  borderRadius: 4,
                  zIndex: 0,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />

              {/* Image */}
              <Box position="relative" width={363} height={406} zIndex={10}>
                <Image
                  src={story.image}
                  alt={story.title}
                  layout="fill"
                  objectFit="contain"
                  style={{ borderRadius: '16px' }}
                />
              </Box>

              {/* Slider Dots & Arrows */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -25,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: 1,
                  alignItems: 'center',
                }}
              >
                <Button
                  sx={{
                    minWidth: 24,
                    height: 24,
                    backgroundColor: 'grey.300',
                    borderRadius: '50%',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 16,
                    p: 0,
                    minHeight: 0,
                  }}
                >
                  ‹
                </Button>

                {techStories.map((_, i) => (
                  <Box
                    key={i}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: i === activeIndex ? 'orange' : 'grey.300',
                    }}
                  />
                ))}

                <Button
                  sx={{
                    minWidth: 24,
                    height: 24,
                    backgroundColor: 'black',
                    borderRadius: '50%',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 16,
                    p: 0,
                    minHeight: 0,
                  }}
                >
                  ›
                </Button>
              </Box>
            </Box>

            {/* Content Section */}
            <Box width={{ xs: '100%', md: '50%' }} textAlign={{ xs: 'center', md: 'left' }}>
              <Typography variant="h5" fontWeight="bold" fontFamily="serif" mb={2}>
                {story.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={2}>
                {story.description}
              </Typography>
              <Box display="flex" justifyContent={{ xs: 'center', md: 'flex-start' }} alignItems="center" gap={1}>
                <Typography variant="body1" fontWeight="bold" fontFamily="serif" color="grey.700">
                  READ MORE
                </Typography>
                <Box flexGrow={1} maxWidth={160} height={1} bgcolor="orange" />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TechStories;
