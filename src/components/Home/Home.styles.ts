import { CSSProperties } from "react";

export const paragraphMargin = {
  fontSize: "29px",
  textAlign: "center",
  marginBottom: "15px",
};

export const imageContainer = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "15px",
};

export const image = { maxHeight: "40vh", maxWidth: "100%" };

export const imagePlaceholder = { height: image.maxHeight };

export const slideshowContainer = {
  overflow: "hidden",
  height: "calc(100vh - 56px)",
  marginBottom: "25px",
};

// this modifies the aspect ratio a bit at wider screen widths, but seems to be the least evil of all approaches tried so far
export const slideshowImage = {
  minWidth: "100%",
  minHeight: "calc(100vh - 56px)",
  maxHeight: "120vh",
  marginLeft: "50%",
  transform: "translateX(-50%)",
  opacity: 0.75,
};

export const homepageHeader: CSSProperties = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  margin: "auto",
  left: 0,
  right: 0,
  textAlign: "center",
  zIndex: 2,
  width: "60%",
};

export const reactPlayerContainer = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
  gap: "13px",
};
