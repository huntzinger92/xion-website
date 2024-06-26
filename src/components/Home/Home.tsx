import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Slideshow } from "./Slideshow";
import { ResponsiveAppContainer } from "../ResponsiveAppContainer/ResponsiveAppContainer";
import { defaultPageFadeInTime } from "../../constants/fadeTimes";
import ReactPlayer from "react-player";
import * as styles from "./Home.styles";
import { PromotedEvent } from "./PromotedEvent";

export const Home = () => {
  const theme = useTheme();
  const aboveSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Fade in timeout={defaultPageFadeInTime}>
      <Box>
        <Slideshow />
        <ResponsiveAppContainer>
          <Box sx={styles.homepageContentContainer}>
            <PromotedEvent />
            <Box sx={styles.reactPlayerContainer}>
              <Typography variant="h5">
                Propsero's Bell Tower Performance (2024)
              </Typography>
              <ReactPlayer
                style={{
                  margin: "auto",
                  marginTop: "5px",
                  maxWidth: "90%",
                  maxHeight: aboveSmallScreen ? "370px" : "225px",
                }}
                url="https://www.youtube.com/watch?v=by3cjkGODrk"
              />
            </Box>
          </Box>
        </ResponsiveAppContainer>
      </Box>
    </Fade>
  );
};
