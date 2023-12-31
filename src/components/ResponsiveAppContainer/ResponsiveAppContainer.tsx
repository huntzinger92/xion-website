import Box from "@mui/material/Box";
import { useMediaQuery, useTheme } from "@mui/material";
import { PropsWithChildren } from "react";

export const ResponsiveAppContainer = ({
  children,
}: PropsWithChildren<unknown>) => {
  const theme = useTheme();
  const aboveLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const aboveMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const aboveSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const commonStyle = {
    margin: "auto",
  };
  if (aboveLargeScreen) {
    return <Box sx={{ width: "64%", ...commonStyle }}>{children}</Box>;
  }
  if (aboveMediumScreen) {
    return <Box sx={{ width: "70%", ...commonStyle }}>{children}</Box>;
  }
  if (aboveSmallScreen) {
    return <Box sx={{ width: "80%", ...commonStyle }}>{children}</Box>;
  }
  return <Box sx={{ width: "90%", ...commonStyle }}>{children}</Box>;
};
