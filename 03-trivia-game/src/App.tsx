import { Box, createTheme, ThemeProvider } from "@mui/material";
import { TriviaCard } from "./common/components/card/trivia-card";
import "./common/i18n/config";
import "./styles/App.css";

const appTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box
        sx={{
          padding: "5rem",
          background: "#232323",
          height: "100vh",
          color: "#fff",
          overflowY: "scroll",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TriviaCard />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
