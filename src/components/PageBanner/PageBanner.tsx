import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as styles from "./PageBanner.styles";
import { ImageLoader } from "../ImageLoader/ImageLoader";
import "./PageBanner.css";

export const PageBanner = ({
  image,
}: {
  image: string;
  /**
   * leaving this is to make it easy to bring back, if we want to display text on top of banner image
   */
  headerText?: string;
}) => {
  const theme = useTheme();
  const aboveSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      sx={{
        ...styles.pageBannerContainer,
        height: aboveSmallScreen ? "275px" : "unset",
      }}
      className="pageBannerImageContainer"
    >
      <ImageLoader
        src={image}
        style={{
          ...styles.bannerImage,
          display: aboveSmallScreen ? "block" : "none", // hide banner image on mobile
        }}
      />
      <Link href="https://www.instagram.com/_big_fern_/" target="_blank">
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
      </Link>
    </Box>
  );
};
