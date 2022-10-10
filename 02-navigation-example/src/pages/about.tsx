import { Box, Typography } from "@mui/material";

export const About = () => {
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "30px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        This is the About Page
      </Typography>
    </Box>
  );
};
