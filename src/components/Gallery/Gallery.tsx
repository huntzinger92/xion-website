import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useMediaQuery, useTheme } from '@mui/material';
import { galleryImages } from './galleryImages';
import * as styles from './Gallery.styles';

export const Gallery = () => {
  const theme = useTheme();
  const aboveMediumScreen = useMediaQuery(theme.breakpoints.up('md'));
  const aboveSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));

  // mobile phone case
  let imgWidth = '95%';
  if (aboveMediumScreen) {
    imgWidth = '45%';
  } else if (aboveSmallScreen) {
    imgWidth = '80%';
  }

  return (
    <div>
      <Typography variant="h3">Gallery</Typography>
      <Box sx={styles.imageContainer}>
        {galleryImages.map((img, index) => (
          <img key={`${img}-${index}`} src={img} style={{ width: imgWidth }} />
        ))}
      </Box>
    </div>
  );
};
