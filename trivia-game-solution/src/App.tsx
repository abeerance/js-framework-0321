import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { TriviaCard } from "./common/components/card/trivia-card";
import { TriviaQuestions } from "./common/components/trivia-questions/trivia-questions";
import "./common/i18n/config";
import { TriviaQuestion } from "./common/types/types";
import "./styles/App.css";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    desktop: true; // enables desktop breakpoint
    uhd: true;
    kuhd: true;
  }
}

const appTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1200,
      xl: 1536,
      desktop: 1920,
      uhd: 2560,
      kuhd: 3540,
    },
  },
});

function App() {
  const [triviaQuestions, setTriviaQuestions] = useState<TriviaQuestion>();

  return (
    <ThemeProvider theme={appTheme}>
      <Box
        sx={{
          padding: "5rem",
          height: "100vh",
          color: "#fff",
          background: "#232323",
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
          {triviaQuestions === undefined ? (
            <TriviaCard setTriviaQuestions={setTriviaQuestions} />
          ) : (
            <TriviaQuestions
              triviaQuestions={triviaQuestions.data}
              setTriviaQuestions={setTriviaQuestions}
            />
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
