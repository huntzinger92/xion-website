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

export const Experience = () => {
  const experienceContentContainer = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };
  const experienceCategoryStyle = {
    borderRadius: "15px",
    padding: "15px",
  };

  return (
    <Fade in timeout={defaultPageFadeInTime}>
      <Box>
        <PageBanner image={curtains1} headerText="Experience Us" />
        <ResponsiveAppContainer>
          <Box sx={experienceContentContainer}>
            <Box sx={experienceCategoryStyle}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "30px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    Ceremonies
                  </Typography>
                  <Typography>
                    Engage Xion to hold sacred space for your next ceremony,
                    whether it be
                  </Typography>
                  <ul style={{ marginTop: 0, marginBottom: 0 }}>
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
                  <Button sx={{ backgroundColor: "#4f8df7" }}>
                    Booking Inquiries
                  </Button>
                </Box>
                <Box>
                  {/* add image grid (four images with gap) */}
                  <ImageLoader src={ceremony} style={{ maxWidth: "100%" }} />
                </Box>
              </Box>
            </Box>
            <Box sx={experienceCategoryStyle}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "30px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    Concerts
                  </Typography>
                  <Typography>
                    Xion Sound Waves is a soulful and uplifting new age choir,
                    delivering a musical experience unlike any other. Using
                    complex harmonies, positive affirmations, and playful
                    melodies, Xion creates an inclusive, sacred space designed
                    to reconnect listeners to the divinity within each of us.
                  </Typography>
                  <Button sx={{ backgroundColor: "#4f8df7" }}>Book Us</Button>
                </Box>
                <Box>
                  {/* add image grid (four images with gap) */}
                  <ImageLoader
                    src={xionChoirPhoto}
                    style={{ maxWidth: "100%" }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </ResponsiveAppContainer>
      </Box>
    </Fade>
  );
};
