import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { IEvent } from "./eventLists";

export const Event = ({
  address,
  date,
  details,
  ticketLink,
  title,
}: IEvent) => {
  const locationQueryLink = `https://www.google.com/maps/search/?api=1&query=${address}`;
  return (
    <Box>
      <Typography variant="h6" sx={{ fontStyle: "italic" }}>
        {title}
      </Typography>
      <Typography variant="h6">
        {date.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </Typography>
      <Link variant="h6" href={locationQueryLink} target="_blank">
        {address}
      </Link>
      {details && <Typography variant="h6">{details}</Typography>}
      {ticketLink && (
        <Button sx={{ marginTop: "5px" }} href={ticketLink} target="_blank">
          Get Tickets
        </Button>
      )}
    </Box>
  );
};
