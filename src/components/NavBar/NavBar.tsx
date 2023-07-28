import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { ROUTES } from '../../constants/routes';
import { useNavigate } from 'react-router';
import { BigNavBar } from './BigNavBar';
import { SmallNavBar } from './SmallNavBar';

export const NavBar = () => {
  const navigate = useNavigate();

  const handleNavItemClick = (pathname: string) => {
    navigate({ pathname });
  };

  const pages = [
    {
      navText: 'About',
      route: ROUTES.ABOUT,
    },
    {
      navText: 'Gallery',
      route: ROUTES.GALLERY,
    },
    {
      navText: 'Contact',
      route: ROUTES.CONTACT,
    },
  ];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <BigNavBar handleNavItemClick={handleNavItemClick} pages={pages} />
          <SmallNavBar handleNavItemClick={handleNavItemClick} pages={pages} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
