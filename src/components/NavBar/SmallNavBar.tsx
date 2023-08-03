import { MouseEvent, useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { SocialIcon } from "react-social-icons";
import { ROUTES } from "../../constants/routes";
import image from "../../constants/xionDummyLogo.png";
import * as styles from "./NavBar.styles";
import { socialMediaLinks } from "../../constants/socialMediaLinks";

export interface ISmallNavBarProps {
  handleNavItemClick: (pathname: string) => void;
  pages: { navText: string; route: string }[];
}

export const SmallNavBar = ({
  handleNavItemClick,
  pages,
}: ISmallNavBarProps) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const onNavItemClick = (route: string) => {
    handleCloseNavMenu();
    handleNavItemClick(route);
  };

  return (
    <Box sx={styles.smallNavContentStyle}>
      <IconButton
        size="large"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
        sx={styles.hamburgerMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={!!anchorElNav}
        onClose={handleCloseNavMenu}
        sx={styles.smallNavMenuStyle}
        data-testid="small-nav-links"
      >
        <MenuItem
          onClick={() => onNavItemClick(ROUTES.HOME)}
          sx={styles.navButtonContainer}
        >
          <Typography sx={styles.navButtonText}>Home</Typography>
        </MenuItem>
        {pages.map(({ navText, route }) => (
          <MenuItem
            key={navText}
            onClick={() => onNavItemClick(route)}
            sx={styles.navButtonContainer}
          >
            <Typography sx={styles.navButtonText}>{navText}</Typography>
          </MenuItem>
        ))}
      </Menu>

      <Box sx={styles.smallLogoContainer}>
        <Box sx={styles.smallLogoInner}>
          <img
            src={image}
            style={styles.smallLogo}
            onClick={() => onNavItemClick(ROUTES.HOME)}
          />
        </Box>
      </Box>
      <Box sx={styles.socialIconsContainer}>
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
