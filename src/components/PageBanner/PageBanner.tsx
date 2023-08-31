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
  const aboveSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      sx={{
        ...styles.pageBannerContainer,
        height: aboveSmallScreen ? "275px" : "unset",
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
          position: aboveSmallScreen ? styles.bannerHeader.position : "static",
          transform: aboveSmallScreen ? styles.bannerHeader.transform : "unset",
        }}
      >
        {headerText}
      </Typography>
    </Box>
  );
};
