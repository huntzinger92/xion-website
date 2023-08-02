import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { homeParagraphs } from "./Home.text";
import * as styles from "./Home.styles";
import { Slideshow } from "./Slideshow";
import { ResponsiveAppContainer } from "../ResponsiveAppContainer/ResponsiveAppContainer";
import { defaultPageFadeInTime } from "../../constants/fadeTimes";

export const Home = () => {
  return (
    <Fade in timeout={defaultPageFadeInTime}>
      <Box>
        <Slideshow />
        <ResponsiveAppContainer>
          <Box>
            {homeParagraphs.map((paragraph) => (
              <Typography key={paragraph} sx={styles.paragraphMargin}>
                {paragraph}
              </Typography>
            ))}
          </Box>
        </ResponsiveAppContainer>
      </Box>
    </Fade>
  );
};
