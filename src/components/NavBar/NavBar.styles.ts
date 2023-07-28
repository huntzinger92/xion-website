import { SxProps } from '@mui/material';
import {
  contrastingTextColor,
  defaultTextColor,
  slightlyDarkerBackgroundColor,
  thematicBlue,
} from '../../constants/globalStyles';

export const mediumLogoStyle = {
  mr: 2,
  display: { xs: 'none', md: 'flex' },
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
};

export const mediumNavBarButtonsContainer = {
  display: { xs: 'none', md: 'flex' },
  minHeight: '64px',
};

export const mediumLogoContainer = {
  ...mediumNavBarButtonsContainer,
  // this is a workaround for not being able to override a paddingLeft media query style on MuiContainer
  marginLeft: '-24px',
};

export const navButtonHoverStyle = {
  ':hover': {
    backgroundColor: slightlyDarkerBackgroundColor,
    color: thematicBlue,
    transition: 'background-color .4s ease, color .4s ease',
    boxShadow: `0 4px 2px -2px ${defaultTextColor}`,
  },
};

export const mediumAppBarButtons = {
  my: 2,
  color: contrastingTextColor,
  display: 'flex',
  backgroundColor: thematicBlue,
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: '15px',
  borderRadius: '0px',
  boxShadow: 'none',
  ...navButtonHoverStyle,
};

export const smallNavContentStyle = {
  flexGrow: 1,
  display: { xs: 'flex', md: 'none' },
  justifyContent: 'space-between',
};

export const smallNavMenuStyle = {
  display: { xs: 'block', md: 'none' },
};

export const smallLogoStyle = {
  display: { xs: 'flex', md: 'none' },
  flexGrow: 1,
  fontWeight: 600,
  letterSpacing: '.12rem',
  transition: 'color .4s ease',
  color: 'inherit',
  textDecoration: 'none',
  width: 'fit-content',
  '&:hover': {
    color: thematicBlue,
  },
};

export const smallLogoContainer = {
  width: '50%',
  display: 'flex',
  alignItems: 'center',
};

export const socialLinksContainer = {
  marginLeft: 'auto',
  alignItems: 'center',
  gap: '10px',
  marginRight: '15px',
  display: { xs: 'none', md: 'flex' },
};

export const threadsAnchor = {
  borderRadius: '100%',
  textDecoration: 'none',
  color: defaultTextColor,
  backgroundColor: '#141414',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '-3px',
};

export const threadsIconText = { marginBottom: '2px' };

export const bigNavBarContainer: SxProps = {
  display: 'flex',
  flexDirection: 'row',
};

export const bigLogo = {
  maxHeight: '40px',
  backgroundColor: 'transparent',
  filter: 'invert(1)',
};

export const smallLogo = {
  height: '30px',
  cursor: 'pointer',
  color: contrastingTextColor,
  filter: 'invert(1)',
};
