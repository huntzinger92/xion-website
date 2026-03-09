import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as styles from "./Footer.styles";
import { ResponsiveAppContainer } from "../ResponsiveAppContainer/ResponsiveAppContainer";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { socialMediaLinks } from "../../constants/socialMediaLinks";
import { SocialIcon } from "react-social-icons";
import { ImageLoader } from "../ImageLoader/ImageLoader";
import xionLogo from "./xionLogo.png";
import posthog from "posthog-js";

export const Footer = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const aboveSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const handleNavItemClick = (pathname: string) => {
    navigate({ pathname });
  };
  return (
    <Box sx={styles.footerContainer}>
      <ResponsiveAppContainer>
        <Box sx={styles.footerContentWrapper}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              sx={{ padding: 0 }}
              onClick={() => handleNavItemClick(ROUTES.HOME)}
            >
              <ImageLoader src={xionLogo} style={styles.footerImage} />
            </Button>
          </Box>
          <Box sx={styles.linksContainer}>
            <Typography
              sx={styles.footerLinks}
              onClick={() => {
                posthog.capture("nav_item_clicked", {
                  label: "About Us",
                  location: "footer",
                });
                handleNavItemClick(ROUTES.ABOUT);
              }}
            >
              About Us
            </Typography>
            <Typography
              sx={styles.footerLinks}
              onClick={() => {
                posthog.capture("nav_item_clicked", {
                  label: "Event Calendar",
                  location: "footer",
                });
                handleNavItemClick(ROUTES.EVENTS_AND_CONCERTS);
              }}
            >
              Event Calendar
            </Typography>
            <Typography
              sx={styles.footerLinks}
              onClick={() => {
                posthog.capture("nav_item_clicked", {
                  label: "Experience Us",
                  location: "footer",
                });
                handleNavItemClick(ROUTES.EXPERIENCE);
              }}
            >
              Experience Us
            </Typography>
            <Typography
              sx={styles.footerLinks}
              onClick={() => {
                posthog.capture("nav_item_clicked", {
                  label: "Contact",
                  location: "footer",
                });
                handleNavItemClick(ROUTES.CONTACT);
              }}
            >
              Contact
            </Typography>
          </Box>
          <Box
            sx={{
              ...styles.socialLinksContainer,
              flexDirection: aboveSmallScreen ? "row" : "column",
            }}
          >
            <SocialIcon
              {...styles.socialIconsProps}
              url={socialMediaLinks.instagram}
              onClick={() =>
                posthog.capture("social_media_link_clicked", {
                  platform: "instagram",
                })
              }
            />
            <SocialIcon
              {...styles.socialIconsProps}
              url={socialMediaLinks.facebook}
              onClick={() =>
                posthog.capture("social_media_link_clicked", {
                  platform: "facebook",
                })
              }
            />
            <SocialIcon
              {...styles.socialIconsProps}
              url={socialMediaLinks.youtube}
              onClick={() =>
                posthog.capture("social_media_link_clicked", {
                  platform: "youtube",
                })
              }
            />
          </Box>
        </Box>
        <Typography sx={styles.copyright}>
          ©2023 Xion Sound Waves | All Rights Reserved
        </Typography>
      </ResponsiveAppContainer>
    </Box>
  );
};
