import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as styles from "./Footer.styles";
import { ResponsiveAppContainer } from "../ResponsiveAppContainer/ResponsiveAppContainer";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export const Footer = () => {
  const navigate = useNavigate();

  const handleNavItemClick = (pathname: string) => {
    navigate({ pathname });
  };
  return (
    <Box sx={styles.footerContainer}>
      <ResponsiveAppContainer>
        <Box sx={styles.footerContentWrapper}>
          <Box>
            <Typography variant="h5" sx={styles.footerText}>
              Xion Sound Waves
            </Typography>
          </Box>
          <Box sx={styles.linksContainer}>
            <Typography
              sx={styles.footerLinks}
              onClick={() => handleNavItemClick(ROUTES.HOME)}
            >
              Home
            </Typography>
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
              Events & Concerts
            </Typography>
            <Typography
              sx={styles.footerLinks}
              onClick={() => handleNavItemClick(ROUTES.EXPERIENCE)}
            >
              Gallery
            </Typography>
          </Box>
          <Typography
            variant="h6"
            sx={styles.contactLink}
            onClick={() => handleNavItemClick(ROUTES.CONTACT)}
          >
            Contact Us
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "12px",
            textAlign: "center",
            color: "white",
            marginTop: "10px",
          }}
        >
          ©2023 Xion Sound Waves | All Rights Reserved
        </Typography>
      </ResponsiveAppContainer>
    </Box>
  );
};
