import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { ModalComponent } from "../common/modal-component";

type TriviaQuestionsCardProp = {
  category: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: [];
};

export const TriviaQuestionsCard = ({
  category,
  question,
  correctAnswer,
  incorrectAnswers,
}: TriviaQuestionsCardProp) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return (
    <>
      <Grid
        item
        boxShadow="none"
        borderRadius="10px"
        sx={{
          background: "#fff",
          color: `#${randomColor}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "240px",
          paddingX: "25px",
          border: "none",
        }}
        component="button"
        onClick={handleOpen}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "25px",
            textShadow: "0 0 2px #d2d2d2",
            letterSpacing: "3px",
          }}
        >
          {category}
        </Typography>
      </Grid>
      {open === false ? (
        <></>
      ) : (
        <ModalComponent
          open={open}
          handleClose={handleClose}
          question={question}
          correctAnswer={correctAnswer}
          incorrectAnswers={incorrectAnswers}
        />
      )}
    </>
  );
};
