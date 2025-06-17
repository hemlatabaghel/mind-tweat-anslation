'use client';
import { ThemeProvider } from "@emotion/react";
import CssBaseline from '@mui/material/CssBaseline';
import Theme from "./Theme";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    return (
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    );
  }