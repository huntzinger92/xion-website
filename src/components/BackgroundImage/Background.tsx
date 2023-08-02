import { PropsWithChildren, useEffect, useState } from "react";
// home images
import choirPhoto from "../Home/choirPhoto.jpg";
import savorTheSoundGroup from "../Home/savorTheSoundGroup.jpg";
import savorTheSoundVJ from "../Home/savorTheSoundVJ.jpg";
// other images (tbd for later)
import mandalaBlue from "../About/mandalaBlue.jpg";
import xionChoirPhoto from "../About/xionChoirPhoto.jpg";
import { ROUTES } from "../../constants/routes";
import { useLocation } from "react-router-dom";
import { BackgroundSpecificImage } from "./BackgroundSpecificImage";

const allImages = {
  [ROUTES.HOME]: [choirPhoto, savorTheSoundGroup, savorTheSoundVJ],
  [ROUTES.ABOUT]: [xionChoirPhoto, savorTheSoundGroup],
  [ROUTES.EXPERIENCE]: [mandalaBlue, xionChoirPhoto, savorTheSoundVJ],
  [ROUTES.EVENTS_AND_CONCERTS]: [
    savorTheSoundGroup,
    mandalaBlue,
    xionChoirPhoto,
  ],
  [ROUTES.CONTACT]: [mandalaBlue, savorTheSoundVJ],
};

export const Background = ({ children }: PropsWithChildren<unknown>) => {
  const location = useLocation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const matchingPageImages = allImages[location.pathname];

  // cycle through array of images
  useEffect(() => {
    setCurrentImageIndex(0);
    const interval = setInterval(() => {
      setCurrentImageIndex((previousIndex) => {
        return (previousIndex + 1) % matchingPageImages.length;
      });
    }, 15000);
    return () => clearTimeout(interval);
  }, [matchingPageImages]);

  // only show images from this component on homepage
  // if needed, can make dynamic by matching set of images to cycle through to route
  return (
    <BackgroundSpecificImage
      key={location.pathname}
      image={matchingPageImages[currentImageIndex]}
    >
      {children}
    </BackgroundSpecificImage>
  );
};
