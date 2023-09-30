import "react-slideshow-image/dist/styles.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Fade as FadeSlideshow } from "react-slideshow-image";
import xionLogoBackgroundWider1 from "./xionLogoBackgroundWider1.jpg";
import xionLogoExtended from "./xionLogoExtended.jpg";
import xionSilhouette from "./xionSilhouette.jpeg";
import choirPhoto from "./choirPhoto.jpg";
import * as styles from "./Home.styles";
import { ImageLoader } from "../ImageLoader/ImageLoader";
import "./Slideshow.css";
import { useMediaQuery, useTheme } from "@mui/material";

export const Slideshow = () => {
  const theme = useTheme();
  const isAboveMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const sharedHomepageImages = [xionSilhouette, choirPhoto];
  const homepageImages = isAboveMediumScreen
    ? [xionLogoBackgroundWider1, ...sharedHomepageImages]
    : [xionLogoExtended, ...sharedHomepageImages];
  const imageYTranslate = isAboveMediumScreen ? "-8%" : "-17%";
  return (
    <Box sx={styles.slideshowContainer} className="slideshowContainer">
      <FadeSlideshow autoplay arrows={false} canSwipe duration={13000}>
        {homepageImages.map((homepageImage) => (
          <div key={homepageImage}>
            <ImageLoader
              style={{
                ...styles.slideshowImage,
                transform: `translate(-50%, ${imageYTranslate})`,
              }}
              src={homepageImage}
            />
            {homepageImage === xionSilhouette && (
              <Typography
                sx={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  fontSize: "16px",
                  color: "white",
                  borderBottom: "1px solid transparent",
                  transition: "all .4s ease-in",
                  ":hover": {
                    cursor: "pointer",
                    borderBottom: "1px solid white",
                  },
                }}
              >
                @_big_fern_
              </Typography>
            )}
          </div>
        ))}
      </FadeSlideshow>
    </Box>
  );
};
