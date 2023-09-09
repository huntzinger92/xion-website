import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";
import { headerColor } from "../../constants/globalStyles";

export const PageHeader = ({ text }: { text: string }) => {
  const theme = useTheme();
  const aboveSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Typography
      variant={aboveSmallScreen ? "h2" : "h3"}
      textAlign="center"
      sx={{
        marginBottom: "15px",
        marginTop: "7px",
        color: headerColor,
      }}
    >
      {text}
    </Typography>
  );
};
