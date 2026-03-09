import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { ResponsiveAppContainer } from "../ResponsiveAppContainer/ResponsiveAppContainer";
import { defaultPageFadeInTime } from "../../constants/fadeTimes";
import * as styles from "./NotFound.styles";
import { useEffect } from "react";
import posthog from "posthog-js";

export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    posthog.capture("not_found_page_viewed");
  }, []);

  const handleNavItemClick = (pathname: string) => {
    navigate({ pathname });
  };

  return (
    <Fade in timeout={defaultPageFadeInTime}>
      <Box>
        <ResponsiveAppContainer>
          <Box sx={styles.container}>
            <Typography sx={styles.header}>
              Oh no, darling, you seem to be lost! We don't have the content you
              were looking for.
            </Typography>
            <Typography
              onClick={() => {
                posthog.capture("not_found_homepage_link_clicked");
                handleNavItemClick(ROUTES.HOME);
              }}
              sx={styles.homepageLinkText}
            >
              Take me to the Homepage
            </Typography>
          </Box>
        </ResponsiveAppContainer>
      </Box>
    </Fade>
  );
};
