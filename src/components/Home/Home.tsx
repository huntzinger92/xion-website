import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { homeParagraphs } from "./Home.text";
import * as styles from "./Home.styles";
import companyImage from "./companyPhoto.jpg";

export const Home = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleImgLoad = () => {
    setImgLoaded(true);
  };

  return (
    <div>
      <Typography variant="h3">Xion Sound Waves</Typography>
      <Box sx={styles.imageContainer}>
        {!imgLoaded && <Box sx={styles.imagePlaceholder} />}
        <img
          src={companyImage}
          onLoad={handleImgLoad}
          style={{ ...styles.image, display: imgLoaded ? "normal" : "hidden" }}
        />
      </Box>
      {homeParagraphs.map((paragraph) => (
        <Typography key={paragraph} sx={styles.paragraphMargin}>
          {paragraph}
        </Typography>
      ))}
    </div>
  );
};
