import { Link, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

type NavigationElementProps = {
  pagePath: string;
  pageTitle: string;
  activeNavigation: string;
  setActiveNavigation: React.Dispatch<React.SetStateAction<string>>;
};

export const NavigationElement = ({
  pagePath,
  pageTitle,
  activeNavigation,
  setActiveNavigation,
}: NavigationElementProps) => {
  const buttonStyling = () => {
    if (pageTitle === "Home" && activeNavigation === "Home") {
      return "navigation-button-active";
    } else if (pageTitle === "About" && activeNavigation === "About") {
      return "navigation-button-active";
    } else if (pageTitle === "Services" && activeNavigation === "Services") {
      return "navigation-button-active";
    } else if (pageTitle === "Blog" && activeNavigation === "Blog") {
      return "navigation-button-active";
    } else if (pageTitle === "Contact" && activeNavigation === "Contact") {
      return "navigation-button-active";
    } else {
      return "navigation-button";
    }
  };

  const handleActiveOnClick = () => {
    if (pageTitle === "Home") {
      setActiveNavigation("Home");
    } else if (pageTitle === "Services") {
      setActiveNavigation("Services");
    } else if (pageTitle === "Blog") {
      setActiveNavigation("Blog");
    } else if (pageTitle === "About") {
      setActiveNavigation("About");
    } else if (pageTitle === "Contact") {
      setActiveNavigation("Contact");
    } else {
      return "";
    }
  };

  return (
    <>
      <Link
        component={NavLink}
        to={pagePath}
        color="#fff"
        underline="none"
        variant="button"
        sx={{ fontSize: "large" }}
        onClick={() => {
          handleActiveOnClick();
        }}
      >
        <Typography
          className={buttonStyling()}
          sx={{
            padding: "15px 20px",
            marginX: "20px",
            borderRadius: "10px",
          }}
        >
          {pageTitle}
        </Typography>
      </Link>
    </>
  );
};
