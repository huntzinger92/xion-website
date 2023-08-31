import {
  contrastingTextColor,
  darkBackgroundColor,
} from "../../constants/globalStyles";

export const footerContainer = {
  width: "100%",
  marginTop: "auto",
  backgroundColor: darkBackgroundColor,
  color: contrastingTextColor,
  paddingTop: "25px",
  paddingBottom: "25px",
};

export const footerContentWrapper = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "15px",
  alignItems: "center",
  justifyContent: "center",
};

export const footerText = {
  color: contrastingTextColor,
  textAlign: "center",
};

export const footerLinks = {
  ...footerText,
  textDecoration: "underline",
  textDecorationColor: "transparent",
  transition: "all .1s ease-in",
  cursor: "pointer",
  ":hover": {
    textDecorationColor: "white",
  },
};

export const contactLink = {
  ...footerLinks,
  textWrap: "nowrap",
  textAlign: "center",
};

export const linksContainer = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
};

export const socialIconsProps = {
  bgColor: darkBackgroundColor,
  fgColor: contrastingTextColor,
  target: "_blank",
};

export const socialLinksContainer = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
};

export const copyright = {
  fontSize: "12px",
  textAlign: "center",
  color: "white",
  marginTop: "10px",
};
