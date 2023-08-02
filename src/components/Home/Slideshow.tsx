import { useMediaQuery, useTheme } from "@mui/material";
import "react-slideshow-image/dist/styles.css";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Fade as FadeSlideshow } from "react-slideshow-image";
import choirPhoto from "./choirPhoto.jpg";
import savorTheSoundGroup from "./savorTheSoundGroup.jpg";
import savorTheSoundVJ from "./savorTheSoundVJ.jpg";
import * as styles from "./Home.styles";

const homepageImages = [choirPhoto, savorTheSoundGroup, savorTheSoundVJ];

export const Slideshow = () => {
  const theme = useTheme();
  const aboveMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const aboveSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  // make homepage banner and header location responsive
  let homepageBannerHeight = "20vh"; // mobile case
  let headerTopLocation = "14vh";
  if (aboveMediumScreen) {
    homepageBannerHeight = "75vh";
    headerTopLocation = "38vh";
  } else if (aboveSmallScreen) {
    homepageBannerHeight = "45vh";
    headerTopLocation = "26vh";
  }
  return (
    <Box sx={{ ...styles.slideshowContainer, height: homepageBannerHeight }}>
      <FadeSlideshow autoplay arrows={false} duration={10000}>
        {homepageImages.map((homepageImage) => (
          <div key={homepageImage}>
            <img style={styles.slideshowImage} src={homepageImage} />
          </div>
        ))}
      </FadeSlideshow>
      <Fade in timeout={3500}>
        <Typography sx={{ ...styles.homepageHeader, top: headerTopLocation }}>
          XION SOUND WAVES
        </Typography>
      </Fade>
    </Box>
  );
};
