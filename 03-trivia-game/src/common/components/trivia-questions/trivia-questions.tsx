import { Box, Button, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import { useTranslation } from "react-i18next";

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
        sx={{ height: "56px", paddingX: "30px", background: teal[900] }}
        onClick={() => {
          setTriviaQuestions(undefined);
        }}
      >
        {t("triviaQuestions.generateNew")}
      </Button>
      <Typography variant="h2" sx={{ marginY: "25px" }}>
        {t("triviaQuestions.pickCard")}
      </Typography>
      <Box className="grid-container"></Box>
    </>
  );
};
