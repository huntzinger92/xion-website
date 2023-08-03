import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ROUTES } from "../../constants/routes";
import image from "../../constants/xionDummyLogo.png";
import * as styles from "./NavBar.styles";
import { Typography } from "@mui/material";
import { SocialIcon } from "react-social-icons";
import { ImageLoader } from "../ImageLoader/ImageLoader";
import { socialMediaLinks } from "../../constants/socialMediaLinks";

export interface IBigNavBarProps {
  handleNavItemClick: (pathname: string) => void;
  pages: { navText: string | JSX.Element; route: string }[];
}

export const BigNavBar = ({ handleNavItemClick, pages }: IBigNavBarProps) => {
  const middleArrayIndex = Math.ceil(pages.length / 2);
  const pagesWithLogoInMiddle = [
    ...pages.slice(0, middleArrayIndex),
    {
      navText: (
        <Typography component="span" sx={styles.bigLogoWrapper}>
          <ImageLoader style={styles.bigLogo} src={image} />
        </Typography>
      ),
      route: ROUTES.HOME,
    },
    ...pages.slice(middleArrayIndex),
  ];
  return (
    <Box sx={styles.bigNavBarContainer}>
      {pagesWithLogoInMiddle.map(({ navText, route }) => (
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
