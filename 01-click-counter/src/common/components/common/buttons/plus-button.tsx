import { Button } from "@mui/material";

type PlusButtonProps = {
  currentCounter: number;
  setCurrentCounter: React.Dispatch<React.SetStateAction<number>>;
};

export const PlusButton = ({
  currentCounter,
  setCurrentCounter,
}: PlusButtonProps) => {
  return (
    <Button
      variant="contained"
      onClick={() => {
        setCurrentCounter(currentCounter++);
      }}
    >
      +
    </Button>
  );
};
