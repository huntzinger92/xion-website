import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as styles from "./NavBar.styles";
import { Typography } from "@mui/material";
import { SocialIcon } from "react-social-icons";
import { socialMediaLinks } from "../../constants/socialMediaLinks";

export interface IBigNavBarProps {
  handleNavItemClick: (pathname: string) => void;
  pages: { navText: string | JSX.Element; route: string }[];
}

export const BigNavBar = ({ handleNavItemClick, pages }: IBigNavBarProps) => {
  return (
    <Box sx={styles.bigNavBarContainer}>
      {pages.map(({ navText, route }) => (
        <Button
          key={route}
          onClick={() => handleNavItemClick(route)}
          sx={styles.mediumAppBarButtons}
          variant="contained"
        >
          <Typography sx={styles.bigNavBarButtonTextWrapper}>
            {navText}
          </Typography>
        </Button>
      ))}
      <Box sx={styles.bigSocialIconsContainer}>
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
  );
};
