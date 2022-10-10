import { Modal, Typography } from "@mui/material";
import { green, red } from "@mui/material/colors";
import { Box } from "@mui/system";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { QuestionCard } from "../card/question-card";

type ModalComponentProps = {
  open: boolean;
  handleClose: () => void;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
};

export const ModalComponent = ({
  open,
  handleClose,
  question,
  correctAnswer,
  incorrectAnswers,
}: ModalComponentProps) => {
  const { t } = useTranslation();
  const [allAnswers, setAllAnswers] = useState(incorrectAnswers);
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [rightAnswer, setRightAnswer] = useState(false);

  useEffect(() => {
    const gatherAllAnswers = () => {
      setAllAnswers([...allAnswers, correctAnswer]);
    };
    gatherAllAnswers();
  }, [setAllAnswers]);

  return (
    <Modal
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          background: "#fff",
          width: "50%",
          borderRadius: "10px",
          padding: "30px",
        }}
      >
        <Typography id="modal-title" fontWeight={"bold"} fontSize={"25px"}>
          {t("triviaQuestions.question")}
        </Typography>
        <Typography sx={{ fontSize: "18px", marginTop: "10px" }}>
          {parse(question)}
        </Typography>
        <Box className="grid-question-container">
          {allAnswers.map((answer) => (
            <QuestionCard
              key={answer}
              answer={answer}
              correctAnswer={correctAnswer}
              setCheckAnswer={setCheckAnswer}
              setRightAnswer={setRightAnswer}
            />
          ))}
        </Box>
        {checkAnswer === false ? (
          <></>
        ) : (
          <Box sx={{ marginTop: "40px", width: "100%", textAlign: "center" }}>
            {rightAnswer === true ? (
              <Typography
                sx={{ fontWeight: "bold", fontSize: "50px", color: green[800] }}
              >
                {t("triviaQuestions.correct")}
              </Typography>
            ) : (
              <Typography
                sx={{ fontWeight: "bold", fontSize: "50px", color: red[800] }}
              >
                {t("triviaQuestions.wrong")}
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </Modal>
  );
};
