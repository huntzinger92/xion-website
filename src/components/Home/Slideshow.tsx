import { useMediaQuery, useTheme } from "@mui/material";
import "react-slideshow-image/dist/styles.css";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import { Fade as FadeSlideshow } from "react-slideshow-image";
import choirPhoto from "./choirPhoto.jpg";
import xionNameHeader from "./xionNameHeader.png";
import xionSilhouette from "./xionSilhouette.jpeg";
import * as styles from "./Home.styles";
import { ImageLoader } from "../ImageLoader/ImageLoader";

const homepageImages = [xionSilhouette, choirPhoto];

export const Slideshow = () => {
  const theme = useTheme();
  const aboveSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const imageStyle = aboveSmallScreen
    ? styles.nonMobileSlideshowImage
    : styles.mobileSlideshowImage;

  return (
    <Box sx={styles.slideshowContainer}>
      <FadeSlideshow autoplay arrows={false} duration={13000}>
        {homepageImages.map((homepageImage) => (
          <div key={homepageImage}>
            <ImageLoader style={imageStyle} src={homepageImage} />
          </div>
        ))}
      </FadeSlideshow>
      <Fade in timeout={3500}>
        <Box>
          <ImageLoader style={styles.homepageHeader} src={xionNameHeader} />
        </Box>
      </Fade>
    </Box>
  );
};
