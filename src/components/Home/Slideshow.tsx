import "react-slideshow-image/dist/styles.css";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Fade as FadeSlideshow } from "react-slideshow-image";
import choirPhotoCropped1 from "./choirPhotoCropped1.jpg";
import xionSilhouette from "./xionSilhouette.jpeg";
import * as styles from "./Home.styles";
import { ImageLoader } from "../ImageLoader/ImageLoader";
import "./Slideshow.css";

const homepageImages = [xionSilhouette, choirPhotoCropped1];

export const Slideshow = () => {
  return (
    <Box sx={styles.slideshowContainer} className="slideshowContainer">
      <FadeSlideshow autoplay arrows={false} duration={2000}>
        {homepageImages.map((homepageImage) => (
          <div key={homepageImage}>
            <ImageLoader style={styles.slideshowImage} src={homepageImage} />
          </div>
        ))}
      </FadeSlideshow>
      <Fade in style={{ transitionDelay: "350ms" }} timeout={3500}>
        <Box sx={styles.homepageHeader}>
          <Typography sx={styles.headerXionWord}>Xion</Typography>
          <Typography sx={styles.headerSoundWavesWords}>Sound Waves</Typography>
        </Box>
      </Fade>
    </Box>
  );
};
