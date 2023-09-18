import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Slideshow } from "./Slideshow";
import { ResponsiveAppContainer } from "../ResponsiveAppContainer/ResponsiveAppContainer";
import { defaultPageFadeInTime } from "../../constants/fadeTimes";
import ReactPlayer from "react-player";
import * as styles from "./Home.styles";

export const Home = () => {
  const theme = useTheme();
  const aboveSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Fade in timeout={defaultPageFadeInTime}>
      <Box>
        <Slideshow />
        <ResponsiveAppContainer>
          <Box sx={styles.reactPlayerContainer}>
            <Typography variant="h5">
              "Colors & Words" at the 2022 Heartland Pagan Festival
            </Typography>
            <ReactPlayer
              style={{
                margin: "auto",
                marginTop: "5px",
                maxWidth: "90%",
                maxHeight: aboveSmallScreen ? "370px" : "225px",
              }}
              url="https://www.youtube.com/watch?v=etFixhawgTM"
            />
          </Box>
        </ResponsiveAppContainer>
      </Box>
    </Fade>
  );
};
