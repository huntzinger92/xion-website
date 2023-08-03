import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as styles from "./PageBanner.styles";
import { ImageLoader } from "../ImageLoader/ImageLoader";

export const PageBanner = ({
  image,
  headerText,
}: {
  image: string;
  headerText: string;
}) => {
  const theme = useTheme();
  const aboveMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const aboveSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  // make banner height and header location responsive
  let bannerHeight;
  let headerTopLocation;
  if (aboveMediumScreen) {
    bannerHeight = "45vh";
    headerTopLocation = "24vh";
  } else if (aboveSmallScreen) {
    bannerHeight = "30vh";
    headerTopLocation = "16vh";
  } else {
    // mobile case
    bannerHeight = "auto";
    headerTopLocation = "50px";
  }
  return (
    <Box
      sx={{
        ...styles.pageBannerContainer,
        height: bannerHeight,
        minHeight: aboveSmallScreen ? "200px" : "unset",
      }}
    >
      <ImageLoader
        src={image}
        style={{
          ...styles.bannerImage,
          display: aboveSmallScreen ? "block" : "none", // hide banner image on mobile
        }}
      />
      <Typography
        variant="h3"
        sx={{
          ...styles.bannerHeader,
          top: headerTopLocation,
          position: aboveSmallScreen ? styles.bannerHeader.position : "static",
        }}
      >
        {headerText}
      </Typography>
    </Box>
  );
};
