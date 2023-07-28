import {
  contrastingTextColor,
  thematicBlue,
} from '../../constants/globalStyles';

export const footerContainer = {
  width: '100%',
  marginTop: 'auto',
  backgroundColor: thematicBlue,
  color: contrastingTextColor,
  paddingTop: '25px',
  paddingBottom: '25px',
};

export const footerContentWrapper = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '15px',
  alignItems: 'center',
  justifyContent: 'center',
};

export const footerText = {
  color: contrastingTextColor,
};

export const footerLinks = {
  ...footerText,
  textDecoration: 'underline',
  textDecorationColor: 'transparent',
  transition: 'all .1s ease-in',
  cursor: 'pointer',
  ':hover': {
    textDecorationColor: 'white',
  },
};

export const contactLink = {
  ...footerLinks,
  textWrap: 'nowrap',
};

export const linksContainer = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
};
