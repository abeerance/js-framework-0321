import { Box, Typography } from "@mui/material";
import { ClickCounterCard } from "./common/components/click-counter-card";
import "./styles/App.css";

function App() {
  return (
    <Box
      sx={{
        padding: "10rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#232323",
        height: "100vh",
        color: "#fff",
      }}
    >
      <Typography variant="h3">My very first React App</Typography>
      <Typography variant="h4" sx={{ marginTop: "30px" }}>
        This will be a simple click counter
      </Typography>
      <ClickCounterCard />
    </Box>
  );
}

export default App;
