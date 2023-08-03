import {
  contrastingTextColor,
  darkBackgroundColor,
  defaultPageTextStyle,
} from "../../constants/globalStyles";

export const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const header = {
  ...defaultPageTextStyle,
  marginTop: "25px",
  textAlign: "center",
};

export const homepageLinkText = {
  ...defaultPageTextStyle,
  textAlign: "center",
  transition: "all 1s ease",
  border: "1px solid black",
  borderRadius: "15px",
  padding: "10px",
  "&:hover": {
    backgroundColor: darkBackgroundColor,
    color: contrastingTextColor,
    cursor: "pointer",
  },
};
