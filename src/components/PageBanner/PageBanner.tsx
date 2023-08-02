import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as styles from "./PageBanner.styles";

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
  // make banner and header location responsive
  let bannerHeight = "20vh"; // mobile case
  let headerTopLocation = "13vh";
  if (aboveMediumScreen) {
    bannerHeight = "40vh";
    headerTopLocation = "21vh";
  } else if (aboveSmallScreen) {
    bannerHeight = "30vh";
    headerTopLocation = "16vh";
  }
  return (
    <Box sx={{ ...styles.pageBannerContainer, height: bannerHeight }}>
      <img src={image} style={styles.bannerImage} />
      <Typography
        variant="h3"
        sx={{ ...styles.bannerHeader, top: headerTopLocation }}
      >
        {headerText}
      </Typography>
    </Box>
  );
};
