import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { ResponsiveAppContainer } from "../ResponsiveAppContainer/ResponsiveAppContainer";
import { PageBanner } from "../PageBanner/PageBanner";
import savorTheSoundGroup from "./savorTheSoundGroup.jpg";
import { defaultPageFadeInTime } from "../../constants/fadeTimes";
import { Event } from "./Event";

// add real past events to event list
// remove dummy events
// consider adding image grid of 4 for each event on experience us page
// buttons on experience us page populate the title and body inputs
// add some more space between contact inputs
// cleanup, move to styles files, create event component
// add no events header ("More events coming soon! Follow @xionsoundwaves on instagram to get the latest...")
// add social media links to footer
// graphic design questions need to be settled as part of MVP - header text/images for each page, button color, and logo

export interface IEvent {
  address: string;
  date: Date;
  details?: string;
  ticketLink: string;
  title: string;
}

const eventList: IEvent[] = [
  {
    title: "New Event",
    date: new Date("July 1, 2023"),
    address: "123 Xion Street",
    details: "Event details go here",
    ticketLink: "https://www.google.com",
  },
  {
    title: "Next New Event",
    date: new Date("August 3, 2023"),
    address: "123 Xion Street",
    ticketLink: "https://www.google.com",
  },
  {
    title: "Some amazing event",
    date: new Date("September 10, 2023"),
    address: "123 Xion Street",
    ticketLink: "https://www.google.com",
  },
  {
    title: "Feeling Froggy",
    date: new Date("August 3, 2024"),
    address: "123 Xion Street",
    ticketLink: "https://www.google.com",
  },
];

const pastEvents: IEvent[] = [];
const futureEvents: IEvent[] = [];

eventList.forEach((event) => {
  if (event.date.getTime() < Date.now()) {
    pastEvents.push(event);
  } else {
    futureEvents.push(event);
  }
});

export const Events = () => {
  return (
    <Fade in timeout={defaultPageFadeInTime}>
      <Box sx={{ marginBottom: "25px" }}>
        <PageBanner image={savorTheSoundGroup} headerText="Events & Concerts" />
        <ResponsiveAppContainer>
          <Box sx={{ marginBottom: "25px" }}>
            <Typography variant="h4">Upcoming Events</Typography>
            <hr />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {futureEvents.map((futureEvent) => (
              <Event {...futureEvent} key={futureEvent.title} />
            ))}
          </Box>
          <Box sx={{ marginTop: "75px", marginBottom: "25px" }}>
            <Typography variant="h6">Past Events</Typography>
            <hr />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {pastEvents.map((pastEvent) => (
              <Event {...pastEvent} key={pastEvent.title} />
            ))}
          </Box>
        </ResponsiveAppContainer>
      </Box>
    </Fade>
  );
};
