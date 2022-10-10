import { Box } from "@mui/material";
import { useState } from "react";
import { routes as appRoutes } from "../../routes/routes";
import { NavigationElement } from "./navigation-element";

export const Navigation = () => {
  const [activeNavigation, setActiveNavigation] = useState("Home");

  return (
    <Box sx={{ display: "flex", marginTop: "20px" }}>
      {appRoutes.map((page) => (
        <NavigationElement
          key={page.key}
          pagePath={page.path}
          pageTitle={page.title}
          activeNavigation={activeNavigation}
          setActiveNavigation={setActiveNavigation}
        />
      ))}
    </Box>
  );
};
