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
  backgroundColor: "#f5d3ee",
  marginBottom: "25px",
};

export const nonMobileSlideshowImage = { width: "100%", opacity: 0.45 };

export const mobileSlideshowImage = {
  ...nonMobileSlideshowImage,
  height: "100vh",
  width: "auto",
  marginLeft: "50%",
  transform: "translateX(-50%)",
};

export const homepageHeader = {
  position: "absolute",
  width: "100%",
  // fontSize: "8vw",
  left: 0,
  textAlign: "center",
  zIndex: 2,
  letterSpacing: ".045em",
};
