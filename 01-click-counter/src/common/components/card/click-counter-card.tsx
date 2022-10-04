import { Box, Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import { MinusButton } from "../common/buttons/minus-button";
import { PlusButton } from "../common/buttons/plus-button";

export const ClickCounterCard = () => {
  const [currentCounter, setCurrentCounter] = useState(0);

  return (
    <Card sx={{ minWidth: 500, marginTop: "50px" }}>
      <CardContent>
        <Typography variant="h5">A simple click counter</Typography>
        <Typography sx={{ marginTop: "20px" }}>
          This will demonstrate the abillity of React to create a simple counter
          functionality
        </Typography>
        <Box sx={{ display: "flex", marginTop: "20px", alignItems: "center" }}>
          <Typography>Click count: {currentCounter}</Typography>
          <Box
            sx={{
              marginLeft: "20px",
              width: "150px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <PlusButton
              currentCounter={currentCounter}
              setCurrentCounter={setCurrentCounter}
            />
            <MinusButton
              currentCounter={currentCounter}
              setCurrentCounter={setCurrentCounter}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
