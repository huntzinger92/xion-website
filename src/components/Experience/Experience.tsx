import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { ResponsiveAppContainer } from "../ResponsiveAppContainer/ResponsiveAppContainer";
import xionChoirPhoto from "./xionChoirPhoto.jpg";
import curtains1 from "./curtains1.jpg";
import ceremony from "./ceremony.jpg";
import { PageBanner } from "../PageBanner/PageBanner";
import { defaultPageFadeInTime } from "../../constants/fadeTimes";
import { ImageLoader } from "../ImageLoader/ImageLoader";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import * as styles from "./Experience.styles";

export const Experience = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const aboveSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const handleInquiryReroute = ({
    title,
    message,
  }: {
    title: string;
    message: string;
  }) => {
    navigate(ROUTES.CONTACT, { state: { title, message } });
  };

  return (
    <Fade in timeout={defaultPageFadeInTime}>
      <Box>
        <PageBanner image={curtains1} headerText="Experience Us" />
        <ResponsiveAppContainer>
          <Box sx={styles.experienceContentContainer}>
            <Box
              sx={{
                ...styles.experienceCategoryStyle,
                display: aboveSmallScreen ? "grid" : "flex",
              }}
            >
              <Box sx={styles.categoryTextContainer}>
                <Typography variant="h4" sx={styles.categoryHeader}>
                  Ceremonies
                </Typography>
                <Typography>
                  Engage Xion to hold sacred space for your next ceremony,
                  whether it be
                </Typography>
                <ul style={styles.unorderList}>
                  <li>
                    <Typography>Sound Meditations</Typography>
                  </li>
                  <li>
                    <Typography> Breath Work</Typography>
                  </li>
                  <li>
                    <Typography>Flower Mandalas</Typography>
                  </li>
                  <li>
                    <Typography>Cacao</Typography>
                  </li>
                  <li>
                    <Typography>Temples</Typography>
                  </li>
                  <li>
                    <Typography>Weddings</Typography>
                  </li>
                  <li>
                    <Typography>And more...</Typography>
                  </li>
                </ul>
                <Button
                  onClick={() =>
                    handleInquiryReroute({
                      title: "Having Xion Perform at My Ceremony",
                      message:
                        "I'm reaching out to inquire about booking Xion to hold ceremonial space...",
                    })
                  }
                >
                  Ceremonial Inquiries
                </Button>
              </Box>
              <Box>
                {/* add image grid (four images with gap) */}
                <ImageLoader src={ceremony} style={styles.categoryImage} />
              </Box>
            </Box>
            <Box
              sx={{
                ...styles.experienceCategoryStyle,
                display: aboveSmallScreen ? "grid" : "flex",
              }}
            >
              <Box sx={styles.categoryTextContainer}>
                <Typography variant="h4" sx={styles.categoryHeader}>
                  Concerts
                </Typography>
                <Typography>
                  Xion Sound Waves is a soulful and uplifting new age choir,
                  delivering a musical experience unlike any other. Using
                  complex harmonies, positive affirmations, and playful
                  melodies, Xion creates an inclusive, sacred space designed to
                  reconnect listeners to the divinity within each of us.
                </Typography>
                <Button
                  onClick={() =>
                    handleInquiryReroute({
                      title: "Booking a Xion Sound Waves Concert",
                      message:
                        "I'm reaching out to inquire about hiring Xion for a musical performance...",
                    })
                  }
                >
                  Concert Booking
                </Button>
              </Box>
              <Box>
                {/* add image grid (four images with gap) */}
                <ImageLoader
                  src={xionChoirPhoto}
                  style={styles.categoryImage}
                />
              </Box>
            </Box>
          </Box>
        </ResponsiveAppContainer>
      </Box>
    </Fade>
  );
};
