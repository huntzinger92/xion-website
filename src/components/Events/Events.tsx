import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { ResponsiveAppContainer } from "../ResponsiveAppContainer/ResponsiveAppContainer";
import { PageBanner } from "../PageBanner/PageBanner";
import savorTheSoundGroup from "./savorTheSoundGroup.jpg";
import { defaultPageFadeInTime } from "../../constants/fadeTimes";

export const Events = () => {
  return (
    <Fade in timeout={defaultPageFadeInTime}>
      <Box>
        <PageBanner image={savorTheSoundGroup} headerText="Events & Concerts" />
        <ResponsiveAppContainer>
          <Box>
            <Typography textAlign={"center"} variant="h5">
              Make some sample events and show them below
            </Typography>
          </Box>
        </ResponsiveAppContainer>
      </Box>
    </Fade>
  );
};
