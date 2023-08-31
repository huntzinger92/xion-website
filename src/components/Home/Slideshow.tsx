import { useMediaQuery, useTheme } from "@mui/material";
import "react-slideshow-image/dist/styles.css";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Fade as FadeSlideshow } from "react-slideshow-image";
import choirPhoto from "./choirPhoto.jpg";
import xionSilhouette from "./xionSilhouette.jpeg";
import * as styles from "./Home.styles";
import { ImageLoader } from "../ImageLoader/ImageLoader";

const homepageImages = [xionSilhouette, choirPhoto];

export const Slideshow = () => {
  const theme = useTheme();
  const aboveSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box sx={styles.slideshowContainer}>
      <FadeSlideshow autoplay arrows={false} duration={13000}>
        {homepageImages.map((homepageImage) => (
          <div key={homepageImage}>
            <ImageLoader style={styles.slideshowImage} src={homepageImage} />
          </div>
        ))}
      </FadeSlideshow>
      <Fade in timeout={3500}>
        <Box sx={styles.homepageHeader}>
          <Typography variant={aboveSmallScreen ? "h1" : "h2"}>
            Xion Sound Waves
          </Typography>
        </Box>
      </Fade>
    </Box>
  );
};
