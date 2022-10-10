import { Box, Typography } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./common/components/navigation/navigation";
import { routes as appRoutes } from "./common/routes/routes";
import "./styles/App.css";

function App() {
  return (
    <Box
      sx={{
        padding: "5rem",
        background: "#232323",
        height: "100vh",
        width: "100%",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">This is the Navigation</Typography>
        <Router>
          <Navigation />
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Router>
      </Box>
    </Box>
  );
}

export default App;
