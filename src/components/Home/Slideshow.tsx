import "react-slideshow-image/dist/styles.css";
import Box from "@mui/material/Box";
import { Fade as FadeSlideshow } from "react-slideshow-image";
import xionLogoBackgroundWider1 from "./xionLogoBackgroundWider1.jpg";
import xionLogoExtended from "./xionLogoExtended.jpg";
import xionSilhouette from "./xionSilhouette.jpeg";
import * as styles from "./Home.styles";
import { ImageLoader } from "../ImageLoader/ImageLoader";
import "./Slideshow.css";
import { useMediaQuery, useTheme } from "@mui/material";

// figure out image sizing issue
// add big fern credit
// remove unused files
// merge
// let choir know, promote on socials

export const Slideshow = () => {
  const theme = useTheme();
  const isAboveMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const homepageImages = isAboveMediumScreen
    ? [xionLogoBackgroundWider1, xionSilhouette]
    : [xionLogoExtended, xionSilhouette];
  const imageYTranslate = isAboveMediumScreen ? "-8%" : "-17%";
  return (
    <Box sx={styles.slideshowContainer} className="slideshowContainer">
      <FadeSlideshow autoplay arrows={false} duration={13000}>
        {homepageImages.map((homepageImage) => (
          <div key={homepageImage}>
            <ImageLoader
              style={{
                ...styles.slideshowImage,
                transform: `translate(-50%, ${imageYTranslate})`,
              }}
              src={homepageImage}
            />
          </div>
        ))}
      </FadeSlideshow>
    </Box>
  );
};
