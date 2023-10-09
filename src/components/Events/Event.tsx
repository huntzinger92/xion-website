import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { IEvent } from "./eventLists";
import * as styles from "./Events.styles";

export interface IEventProps extends IEvent {
  isFutureEvent?: boolean;
}

export const Event = ({
  address,
  date,
  details,
  isFutureEvent,
  ticketLink,
  title,
}: IEventProps) => {
  const locationQueryLink = `https://www.google.com/maps/search/?api=1&query=${address}`;
  const shouldShowTicketLink = isFutureEvent && ticketLink;
  return (
    <Box>
      <Typography variant="h6" sx={styles.eventTitle}>
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
      {shouldShowTicketLink && (
        <Button sx={styles.getTicketsButton} href={ticketLink} target="_blank">
          Get Tickets
        </Button>
      )}
    </Box>
  );
};
