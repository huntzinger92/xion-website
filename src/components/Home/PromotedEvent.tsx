import Box from "@mui/material/Box";
import { Event } from "../Events/Event";
import { futureEvents } from "../Events/eventLists";

export const PromotedEvent = () => {
  // use soonest event with a ticket link
  // if no upcoming events have ticket links, use soonest event
  const eventToPromote =
    futureEvents.find(({ ticketLink }) => !!ticketLink) ?? futureEvents[0];

  return eventToPromote ? (
    <Box
      sx={{
        border: "1px solid rgba(90, 162, 237, 0.5)",
        borderRadius: "15px",
        padding: "13px",
        boxShadow: "1px 1px 5px rgba(90, 162, 237, 0.5)",
      }}
    >
      <Event {...eventToPromote} isFutureEvent />
    </Box>
  ) : null;
};
