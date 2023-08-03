import Box from "@mui/material/Box";
import { DetailedHTMLProps, ImgHTMLAttributes, useState } from "react";
import { backgroundColor } from "../../constants/globalStyles";

/**
 * this component handles rendering a loading div of equivalent size with website background color while image is being loaded
 */
export const ImageLoader = ({
  style,
  ...rest
}: DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleImgLoad = () => {
    setImgLoaded(true);
  };

  if (style?.display === "none") {
    return null;
  }

  return (
    <>
      {!imgLoaded && <Box sx={{ ...style, backgroundColor }} />}
      <img
        {...rest}
        onLoad={handleImgLoad}
        style={{ ...style, display: imgLoaded ? "block" : "hidden" }}
      />
    </>
  );
};
