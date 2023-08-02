import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { ResponsiveAppContainer } from "../ResponsiveAppContainer/ResponsiveAppContainer";
import xionChoirPhoto from "./xionChoirPhoto.jpg";
import { PageBanner } from "../PageBanner/PageBanner";
import { defaultPageTextStyle } from "../../constants/globalStyles";
import { defaultPageFadeInTime } from "../../constants/fadeTimes";

export const Experience = () => {
  return (
    <Fade in timeout={defaultPageFadeInTime}>
      <Box>
        <PageBanner image={xionChoirPhoto} headerText="Experience Us" />
        <ResponsiveAppContainer>
          <Box>
            <Typography sx={defaultPageTextStyle}>
              Social media and music links, Xion "packages", videos in browser,
              etc.
            </Typography>
          </Box>
        </ResponsiveAppContainer>
      </Box>
    </Fade>
  );
};
