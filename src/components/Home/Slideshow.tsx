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
import { ImageLoader } from "../ImageLoader/ImageLoader";

// array of all homepage images in slideshow, shuffled so a random one starts on page refresh
const homepageImages = [choirPhoto, savorTheSoundGroup, savorTheSoundVJ].sort(
  () => Math.random() - 0.5
);

export const Slideshow = () => {
  const theme = useTheme();
  const aboveMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const aboveSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  // make homepage banner height and header location responsive
  let homepageBannerHeight;
  let headerTopLocation;
  let imageStyle = styles.nonMobileSlideshowImage;
  if (aboveMediumScreen) {
    homepageBannerHeight = "75vh";
    headerTopLocation = "38vh";
  } else if (aboveSmallScreen) {
    homepageBannerHeight = "45vh";
    headerTopLocation = "24vh";
  } else {
    // mobile case
    homepageBannerHeight = "100vh";
    headerTopLocation = "32vh";
    imageStyle = styles.mobileSlideshowImage;
  }
  return (
    <Box sx={{ ...styles.slideshowContainer, height: homepageBannerHeight }}>
      <FadeSlideshow autoplay arrows={false} duration={10000}>
        {homepageImages.map((homepageImage) => (
          <div key={homepageImage}>
            <ImageLoader style={imageStyle} src={homepageImage} />
          </div>
        ))}
      </FadeSlideshow>
      <Fade in timeout={3500}>
        <Typography
          variant="h2"
          sx={{ ...styles.homepageHeader, top: headerTopLocation }}
        >
          XION SOUND WAVES
        </Typography>
      </Fade>
    </Box>
  );
};
