import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { TriviaCard } from "./common/components/card/trivia-card";
import { TriviaQuestions } from "./common/components/trivia-questions/trivia-questions";
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
  const [triviaQuestions, setTriviaQuestions] = useState<any>();

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
          {triviaQuestions === undefined ? (
            <TriviaCard setTriviaQuestions={setTriviaQuestions} />
          ) : (
            <TriviaQuestions
              triviaQuestions={triviaQuestions}
              setTriviaQuestions={setTriviaQuestions}
            />
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
