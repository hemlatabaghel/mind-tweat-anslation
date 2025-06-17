// app/components/Footer.tsx
'use client';

import { Box, Container, Grid, Typography, Link as MuiLink, Stack } from '@mui/material';
import Image from 'next/image';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#C3FF93', pt: 20, pb: 5, zIndex: 0, position: 'relative' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Left Column */}
          <Grid item xs={12} md={3}>
            <Typography variant="h4" fontWeight="bold" fontFamily="Inter" gutterBottom>
              MIND TWEAT
            </Typography>
            <Typography fontSize={16} fontFamily="Inter" gutterBottom>
              Echoes of Thought. <br />
              Powered by Tweets.
            </Typography>

            <Typography fontWeight="bold" fontSize={20} fontFamily="Inter" mt={4} mb={2}>
              Follow Us On
            </Typography>

            <Stack direction="row" spacing={2}>
              <MuiLink href="https://facebook.com" target="_blank" rel="noopener">
                <Image src="/icons/vectorFB.png" alt="Facebook" width={20} height={20} />
              </MuiLink>
              <MuiLink href="https://pinterest.com" target="_blank" rel="noopener">
                <Image src="/icons/vectorP.png" alt="Pinterest" width={20} height={20} />
              </MuiLink>
              <MuiLink href="https://twitter.com" target="_blank" rel="noopener">
                <Image src="/icons/vectorX.png" alt="X/Twitter" width={20} height={20} />
              </MuiLink>
              <MuiLink href="https://linkedin.com" target="_blank" rel="noopener">
                <Image src="/icons/vectorIN.png" alt="LinkedIn" width={20} height={20} />
              </MuiLink>
            </Stack>
          </Grid>

          {/* Link Columns */}
          {[
            ['Home', 'About Us', 'Projects', 'Services', 'Social', 'Live Chat', 'Privacy Policy', 'Mobile'],
            ['Social', 'Live Chat', 'Privacy Policy', 'Mobile', 'Lifestyle', 'Beauty'],
            ['Privacy Policy', 'Mobile', 'Lifestyle', 'Beauty']
          ].map((links, index) => (
            <Grid key={index} item xs={12} md={3}>
              <Stack spacing={1}>
                {links.map((text, i) => (
                  <MuiLink key={i} href="#" underline="none" fontWeight={500} color="inherit">
                    {text}
                  </MuiLink>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
