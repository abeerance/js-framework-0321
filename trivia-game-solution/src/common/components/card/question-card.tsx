import { Card, CardContent, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import parse from "html-react-parser";
import React from "react";

type QuestionCardProps = {
  answer: string;
  correctAnswer: string;
  setCheckAnswer: React.Dispatch<React.SetStateAction<boolean>>;
  setRightAnswer: React.Dispatch<React.SetStateAction<boolean>>;
};

export const QuestionCard = ({
  answer,
  correctAnswer,
  setCheckAnswer,
  setRightAnswer,
}: QuestionCardProps) => {
  return (
    <Card
      sx={{
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        background: teal[900],
        color: "#fff",
        padding: "20px",
        textAlign: "center",
        border: "none",
      }}
      component="button"
      onClick={() => {
        setCheckAnswer(true);
        if (answer === correctAnswer) {
          setRightAnswer(true);
        } else {
          setRightAnswer(false);
        }
      }}
    >
      <CardContent>
        <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
          {parse(answer)}
        </Typography>
      </CardContent>
    </Card>
  );
};
