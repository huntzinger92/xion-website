import { PropsWithChildren, useState, useEffect } from "react";

export const BackgroundSpecificImage = ({
  children,
  image,
}: PropsWithChildren<{ image: string }>) => {
  const translucentColor = "rgba(240,240,240,.5)";
  const fadeOutColor = "rgba(240,240,240,.7)";

  const [backgroundImage, setBackgroundImage] = useState(image);
  const [backgroundColor, setBackgroundColor] = useState(translucentColor);

  useEffect(() => {
    if (backgroundImage !== image) {
      // begin old image fade out immedately
      setBackgroundColor(fadeOutColor);
      const imageUpdateTimeout = setTimeout(() => {
        // update image url after time
        setBackgroundImage(image);
        setBackgroundColor(translucentColor);
      }, 1200);
      return () => {
        clearTimeout(imageUpdateTimeout);
      };
    }
  }, [backgroundImage, image]);

  return (
    <div
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        backgroundColor,
        backgroundBlendMode: "color",
        backgroundSize: "cover",
        minHeight: "80vh",
        transition: "background-color 1.2s linear",
      }}
    >
      {children}
    </div>
  );
};
