import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { ImageLoader } from "../ImageLoader/ImageLoader";
import * as styles from "./Experience.styles";
import "./Experience.css";
import { useWindowSize } from "../../hooks/useWindowSize";

export const CategoryImage = ({ src }: { src: string }) => {
  const theme = useTheme();
  const aboveMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const belowSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [windowWidth] = useWindowSize();
  return (
    <>
      {!belowSmallScreen && (
        <Box
          className="categoryImage"
          sx={{
            ...styles.categoryImage,
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            overflow: "hidden",
            display: "inline-block",
            margin: "auto",
            // minHeight: "100%",
            // minHeight: "max(100%, 430px)",
            minHeight: {
              lg: "100%",
              // md: "430px",
              sm: `${0.5 * windowWidth - 5}px`,
              // xs: Math.ceil(windowWidth - 470),
            },
            width: aboveMediumScreen ? "100%" : "75%",
            // height: "100%",
          }}
        />
      )}
      {belowSmallScreen && (
        <ImageLoader src={src} style={styles.categoryImage} />
      )}
    </>
  );
};
