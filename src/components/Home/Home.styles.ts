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
  maskImage:
    "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
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
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
};

export const headerWordsCommon = {
  textShadow: `1px 0 .5px #efefef,
    0 1px .5px #efefef,
    -1px 0 .5px #efefef,
    0 -1px .5px #efefef`,
};

export const headerXionWord = {
  ...headerWordsCommon,
  color: "#D48B24",
  fontSize: "max(17vw, 7rem)",
  lineHeight: 0.6,
  letterSpace: "20px",
};

export const headerSoundWavesWords = {
  ...headerWordsCommon,
  color: "#c4801f",
  fontSize: "max(7vw, 3rem)",
};

export const reactPlayerContainer = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
  gap: "13px",
};
