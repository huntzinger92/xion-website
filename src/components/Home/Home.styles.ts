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

// setting a fixed height and width is causing aspect ratio distortion, consider different solution
export const nonMobileSlideshowImage = {
  minWidth: "100%",
  minHeight: "calc(100vh - 56px)",
  // ugly hack to make sure that we reach minimum width and height without blowing picture up to huge proportions, allow to stretch off the screen "a bit"
  maxWidth: "150%",
  maxHeight: "135vh",
  opacity: 0.5,
};

export const mobileSlideshowImage = {
  ...nonMobileSlideshowImage,
  width: "auto",
  marginLeft: "50%",
  transform: "translateX(-50%)",
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
