import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { ROUTES } from "../../constants/routes";
import { useNavigate } from "react-router";
import { BigNavBar } from "./BigNavBar";
import { SmallNavBar } from "./SmallNavBar";

export const NavBar = () => {
  const navigate = useNavigate();

  const handleNavItemClick = (pathname: string) => {
    navigate({ pathname });
  };

  const pages = [
    {
      navText: "About",
      route: ROUTES.ABOUT,
    },
    {
      navText: "Events & Concerts",
      route: ROUTES.EVENTS_AND_CONCERTS,
    },
    {
      navText: "Experience Us",
      route: ROUTES.EXPERIENCE,
    },
    {
      navText: "Contact",
      route: ROUTES.CONTACT,
    },
  ];

  // there is a compability bug between MUI AppBar and position="sticky" and react-slideshow-images <Slideshow />
  // if both are used, browser scrolls to bottom of page on load
  // we cheat this bug by setting position to static and manually setting the AppBar position to sticky
  return (
    <AppBar position="static" sx={{ position: "sticky" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <BigNavBar handleNavItemClick={handleNavItemClick} pages={pages} />
          <SmallNavBar handleNavItemClick={handleNavItemClick} pages={pages} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
