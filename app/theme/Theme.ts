import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
      fontFamily: `"Inter", "Playfair Display", "Roboto", "sans-serif"`,
    },
    palette: {
      primary: {
        main: "#ff5722", // customize this as per your figma
      },
      secondary: {
        main: "#C7FF82",
      },
    },
  });
  
  export default theme;