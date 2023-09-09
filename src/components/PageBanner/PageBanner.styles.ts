import "./PageBanner.css";

export const pageBannerContainer = {
  width: "100%",
  overflow: "hidden",
  marginBottom: "5px",
  position: "relative",
};

export const bannerImage = {
  minHeight: "100%",
  minWidth: "100%",
  marginLeft: "50%",
  transform: "translateX(-50%)",
  opacity: 0.6,
};

export const bannerHeader = {
  position: "absolute",
  top: "38.2%",
  transform: "translateY(-61.8%)",
  width: "100%",
  left: 0,
  textAlign: "center",
  zIndex: 2,
  letterSpacing: ".045em",
  marginBottom: "5px",
  fontWeight: "bold",
  fontFamily: "'Ubuntu', sans-serif",
  color: "#8ab1c3",
  textShadow: `1px 0 .5px #a0cade,
    0 1px .5px #a0cade,
    -1px 0 .5px #a0cade,
    0 -1px .5px #a0cade`,
};
