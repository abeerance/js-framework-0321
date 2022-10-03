import { Box, Card, CardContent, Typography } from "@mui/material";

export const ClickCounterCard = () => {
  return (
    <Card sx={{ minWidth: 500, marginTop: "50px" }}>
      <CardContent>
        <Typography variant="h5">A simple click counter</Typography>
        <Typography sx={{ marginTop: "20px" }}>
          This will demonstrate the abillity of react co create a cimple counter
          functionality
        </Typography>
        <Box sx={{ display: "flex", marginTop: "20px" }}>
          <Typography>Click count:</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
