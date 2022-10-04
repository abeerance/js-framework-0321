import { Button } from "@mui/material";
import React from "react";

type MinusButtonProps = {
  currentCounter: number;
  setCurrentCounter: React.Dispatch<React.SetStateAction<number>>;
};

export const MinusButton = ({
  currentCounter,
  setCurrentCounter,
}: MinusButtonProps) => {
  return (
    <Button
      variant="contained"
      onClick={() => {
        setCurrentCounter(currentCounter--);
      }}
    >
      -
    </Button>
  );
};
