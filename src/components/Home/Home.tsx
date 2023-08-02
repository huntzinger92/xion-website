import Typography from "@mui/material/Typography";
import { homeParagraphs } from "./Home.text";
import * as styles from "./Home.styles";

export const Home = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Typography
        variant="h2"
        textAlign={"center"}
        sx={{ marginTop: "20px", marginBottom: "50px" }}
      >
        Xion Sound Waves
      </Typography>
      {homeParagraphs.map((paragraph) => (
        <Typography key={paragraph} sx={styles.paragraphMargin}>
          {paragraph}
        </Typography>
      ))}
    </div>
  );
};
