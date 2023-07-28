import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ROUTES } from '../../constants/routes';
import image from '../../constants/eLogo.png';
import * as styles from './NavBar.styles';

export interface IBigNavBarProps {
  handleNavItemClick: (pathname: string) => void;
  pages: { navText: string; route: string }[];
}

export const BigNavBar = ({ handleNavItemClick, pages }: IBigNavBarProps) => {
  return (
    <Box sx={styles.bigNavBarContainer}>
      <Box sx={styles.mediumLogoContainer}>
        <Button
          onClick={() => handleNavItemClick(ROUTES.HOME)}
          sx={{
            ...styles.mediumAppBarButtons,
            paddingTop: 0,
            paddingBottom: 0,
          }}
          variant="contained"
        >
          <img style={styles.bigLogo} src={image} />
        </Button>
      </Box>
      <Box
        sx={styles.mediumNavBarButtonsContainer}
        data-testid="full-nav-links"
      >
        {pages.map(({ navText, route }) => (
          <Button
            key={navText}
            onClick={() => handleNavItemClick(route)}
            sx={styles.mediumAppBarButtons}
            variant="contained"
          >
            {navText}
          </Button>
        ))}
      </Box>
    </Box>
  );
};
