import { useState } from 'react';
import { aboutParagraphs } from './About.text';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as styles from './About.styles';
import companyImage from './companyPhoto.jpg';

export const About = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleImgLoad = () => {
    setImgLoaded(true);
  };

  return (
    <div>
      <Typography variant="h3">About Us</Typography>
      <Box sx={styles.imageContainer}>
        {!imgLoaded && <Box sx={styles.imagePlaceholder} />}
        <img
          src={companyImage}
          onLoad={handleImgLoad}
          style={{ ...styles.image, display: imgLoaded ? 'normal' : 'hidden' }}
        />
      </Box>
      {aboutParagraphs.map(paragraph => (
        <Typography key={paragraph} sx={styles.paragraphMargin}>
          {paragraph}
        </Typography>
      ))}
    </div>
  );
};
