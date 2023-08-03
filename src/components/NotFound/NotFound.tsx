import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { ResponsiveAppContainer } from "../ResponsiveAppContainer/ResponsiveAppContainer";
import { defaultPageFadeInTime } from "../../constants/fadeTimes";
import * as styles from "./NotFound.styles";

export const NotFound = () => {
  const navigate = useNavigate();

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
              onClick={() => handleNavItemClick(ROUTES.HOME)}
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
