import { SxProps } from "@mui/material";
import {
  contrastingTextColor,
  darkBackgroundColor,
  defaultTextColor,
} from "../../constants/globalStyles";

export const mediumNavBarButtonsContainer = {
  display: { xs: "none", md: "flex" },
  minHeight: "64px",
};

export const navButtonContainer: SxProps = {
  backgroundColor: darkBackgroundColor,
  textDecoration: "underline",
  textDecorationColor: "transparent",
  transition: "text-decoration-color .4s ease",
  "&:hover": {
    backgroundColor: darkBackgroundColor,
    textDecoration: "underline",
    textDecorationColor: contrastingTextColor,
    boxShadow: "none",
  },
};

export const navButtonText: SxProps = {
  backgroundColor: darkBackgroundColor,
  color: contrastingTextColor,
  transition: "all .4s ease",
  textDecoration: "inherit",
  width: "100%",
  height: "100%",
  textAlign: "left",
};

export const mediumAppBarButtons = {
  my: 2,
  color: contrastingTextColor,
  display: "flex",
  backgroundColor: "inherit",
  marginBottom: "0px",
  marginTop: "0px",
  fontSize: "15px",
  borderRadius: "0px",
  boxShadow: "none",
  textDecoration: "underline",
  textDecorationColor: "transparent",
  transition: "text-decoration-color .4s ease",
  "&:hover": {
    backgroundColor: darkBackgroundColor,
    textDecoration: "underline",
    textDecorationColor: contrastingTextColor,
    boxShadow: "none",
  },
};

export const smallNavContentStyle = {
  flexGrow: 1,
  display: { xs: "flex", md: "none" },
  justifyContent: "space-between",
};

export const smallNavMenuStyle = {
  display: { xs: "block", md: "none" },
};

export const smallLogoStyle = {
  display: { xs: "flex", md: "none" },
  flexGrow: 1,
  fontWeight: 600,
  letterSpacing: ".12rem",
  transition: "color .4s ease",
  color: "inherit",
  textDecoration: "none",
  width: "fit-content",
};

export const smallLogoContainer = {
  width: "50%",
  display: "flex",
  alignItems: "center",
};

export const socialLinksContainer = {
  marginLeft: "auto",
  alignItems: "center",
  gap: "10px",
  marginRight: "15px",
  display: { xs: "none", md: "flex" },
};

export const threadsAnchor = {
  borderRadius: "100%",
  textDecoration: "none",
  color: defaultTextColor,
  backgroundColor: "#141414",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "-3px",
};

export const threadsIconText = { marginBottom: "2px" };

export const bigNavBarContainer: SxProps = {
  display: { xs: "none", md: "flex" },
  flexDirection: "row",
  justifyContent: "space-between",
  width: "68%",
  margin: "auto",
  height: "64px",
  alignItems: "center",
};

export const bigLogoWrapper = {
  transition: "border-color .4s ease",
  borderBottom: "1px solid",
  borderColor: "transparent",
  "&:hover": {
    borderColor: contrastingTextColor,
  },
};

export const bigLogo = {
  maxHeight: "40px",
  backgroundColor: "transparent",
  filter: "invert(1)",
};

export const smallLogo = {
  height: "30px",
  cursor: "pointer",
  color: contrastingTextColor,
  filter: "invert(1)",
};

export const bigNavBarButtonTextWrapper = {
  color: contrastingTextColor,
  textDecoration: "underline",
  textDecorationColor: "transparent",
  transition: "all .4s ease-in",
  ":hover": { textDecorationColor: contrastingTextColor },
};
