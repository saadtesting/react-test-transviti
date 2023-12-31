import RootContainer from "./Components/RootContainer";

// MUI
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: '#F85F35'
    },
    backgroundGrey: {
      main: "#F5F5F5"
    },
  },
  typography: {
    fontFamily: `"Outfit", "sans-serif"`
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 994,
      lg: 1200,
      xl: 1536,
    },
  },
})

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RootContainer />
    </ThemeProvider>
  );
}

export default App;
