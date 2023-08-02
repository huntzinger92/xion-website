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
                A long form story about Xion, with some photos, maybe a bio of
                VJ, specifically. Some extra text content to fill space for now
                -
              </Typography>
              <Typography sx={defaultPageTextStyle}>
                Trey McLaughlin & the Sounds Of Zamar has undoubtedly made a
                name for themselves in the music industry by performing with
                gospel greats like William McDowell, Kierra “Kiki” Sheard, Brian
                Courtney Wilson, and James Fortune. Trey McLaughlin and the
                Sounds of Zamar is fresh off a competition win for their
                rendition of “Chasing After You,” which afforded them a feature
                on GRAMMY® award-nominated artist Vashawn Mitchell’s
                “Triumphant“ (Deluxe Edition) DVD.
              </Typography>
              <Typography sx={defaultPageTextStyle}>
                Established in 2016, Tonality is an award-winning ensemble known
                for “open hearted singing” (Lauri’s List). Tonality’s most
                recent award is the 2020 Chorus America/ASCAP Award for
                Adventurous Programming, a prize given for commitment to singing
                and commissioning new works.
              </Typography>
              <Typography sx={defaultPageTextStyle}>
                Tonality is led by founder and Artistic Director Alexander Lloyd
                Blake. Blake imagined Tonality as an ensemble that represents
                the diverse cultures and ethnicities within the Los Angeles
                area.
              </Typography>
            </Box>
          </ResponsiveAppContainer>
        </Box>
      </Box>
    </Fade>
  );
};
