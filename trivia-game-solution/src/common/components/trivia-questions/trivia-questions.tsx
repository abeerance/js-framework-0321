import { Box, Button, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import React from "react";
import { useTranslation } from "react-i18next";
import { TriviaQuestionsCard } from "./trivia-questions-card";

type TriviaQuestionsProps = {
  triviaQuestions: any;
  setTriviaQuestions: React.Dispatch<React.SetStateAction<any>>;
};

export const TriviaQuestions = ({
  triviaQuestions,
  setTriviaQuestions,
}: TriviaQuestionsProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Button
        variant="contained"
        sx={{
          height: "56px",
          paddingX: "30px",
          background: teal[900],
        }}
        onClick={() => {
          setTriviaQuestions(undefined);
        }}
      >
        {t("triviaQuestions.generateNew")}
      </Button>
      <Typography variant="h2" sx={{ marginTop: "25px", marginBottom: "25px" }}>
        {t("triviaQuestions.pickCard")}
      </Typography>
      <Box className="grid-container">
        {triviaQuestions.results.map(
          (triviaQuestion: {
            category: string;
            question: string;
            correct_answer: string;
            incorrect_answers: [];
          }) => (
            <>
              <TriviaQuestionsCard
                key={triviaQuestion.correct_answer}
                category={triviaQuestion.category}
                question={triviaQuestion.question}
                correctAnswer={triviaQuestion.correct_answer}
                incorrectAnswers={triviaQuestion.incorrect_answers}
              />
            </>
          )
        )}
      </Box>
    </>
  );
};
