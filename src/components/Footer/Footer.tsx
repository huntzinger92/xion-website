import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as styles from "./Footer.styles";
import { ResponsiveAppContainer } from "../ResponsiveAppContainer/ResponsiveAppContainer";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { socialMediaLinks } from "../../constants/socialMediaLinks";
import { SocialIcon } from "react-social-icons";

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
          <Box>
            <Typography
              variant="h5"
              sx={styles.footerLinks}
              onClick={() => handleNavItemClick(ROUTES.HOME)}
            >
              Xion Sound Waves
            </Typography>
          </Box>
          <Box sx={styles.linksContainer}>
            <Typography
              sx={styles.footerLinks}
              onClick={() => handleNavItemClick(ROUTES.ABOUT)}
            >
              About Us
            </Typography>
            <Typography
              sx={styles.footerLinks}
              onClick={() => handleNavItemClick(ROUTES.EVENTS_AND_CONCERTS)}
            >
              Event Calendar
            </Typography>
            <Typography
              sx={styles.footerLinks}
              onClick={() => handleNavItemClick(ROUTES.EXPERIENCE)}
            >
              Experience Us
            </Typography>
            <Typography
              sx={styles.footerLinks}
              onClick={() => handleNavItemClick(ROUTES.CONTACT)}
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
            />
            <SocialIcon
              {...styles.socialIconsProps}
              url={socialMediaLinks.facebook}
            />
            <SocialIcon
              {...styles.socialIconsProps}
              url={socialMediaLinks.youtube}
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
