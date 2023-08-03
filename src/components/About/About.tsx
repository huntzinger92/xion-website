import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { ResponsiveAppContainer } from "../ResponsiveAppContainer/ResponsiveAppContainer";
import mandalaBlue from "./mandalaBlue.jpg";
import { PageBanner } from "../PageBanner/PageBanner";
import { defaultPageTextStyle } from "../../constants/globalStyles";
import { defaultPageFadeInTime } from "../../constants/fadeTimes";

export const About = () => {
  return (
    <Fade in timeout={defaultPageFadeInTime}>
      <Box>
        <PageBanner image={mandalaBlue} headerText="About Xion Sound Waves" />
        <Box>
          <ResponsiveAppContainer>
            <Box>
              <Typography sx={defaultPageTextStyle}>
                Founded in 2020, Xion Sound Waves is a soulful and uplifting new
                age choir known for delivering musical experiences unlike any
                other.
              </Typography>
              <Typography sx={defaultPageTextStyle}>
                Led by founder and director VJ Herbert, Xion’s sound blends
                complex harmonies, positive affirmations, and playful melodies
                designed to reconnect listeners to the divinity within each of
                us.
              </Typography>
              <Typography sx={defaultPageTextStyle}>
                Xion’s talents have been showcased widely, including the
                Heartland Pagan Festival, Savor the Sound (an immersive event
                that combines a coursed meal by a Michelin-star chef with music
                inspired by the cuisine), multiple collaborations with artist
                Calvin Arsenia, and more.
              </Typography>
              <Typography sx={defaultPageTextStyle}>
                Whether headlining concerts or powerfully holding meditative
                space, Xion’s unique approach leaves audiences touched by love,
                light, and healing.
              </Typography>
            </Box>
          </ResponsiveAppContainer>
        </Box>
      </Box>
    </Fade>
  );
};
