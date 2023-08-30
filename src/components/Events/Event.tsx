import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IEvent } from "./Events";

export const Event = ({
  address,
  date,
  details,
  ticketLink,
  title,
}: IEvent) => {
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{ fontStyle: "italic", textDecoration: "underline" }}
      >
        {title}
      </Typography>
      <Typography variant="h6">{date.toLocaleDateString("en-US")}</Typography>
      <Typography variant="h6">{address}</Typography>
      {details && <Typography variant="h6">{details}</Typography>}
      <Button
        sx={{ backgroundColor: "#4f8df7", marginTop: "5px" }}
        href={ticketLink}
        target="_blank"
      >
        Get Tickets
      </Button>
    </Box>
  );
};
