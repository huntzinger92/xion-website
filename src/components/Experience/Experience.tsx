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
            <Typography sx={defaultPageTextStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Typography sx={defaultPageTextStyle}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Typography>
            <Typography sx={defaultPageTextStyle}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Typography>
          </Box>
        </ResponsiveAppContainer>
      </Box>
    </Fade>
  );
};
