import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { ResponsiveAppContainer } from "../ResponsiveAppContainer/ResponsiveAppContainer";
import { PageBanner } from "../PageBanner/PageBanner";
import savorTheSoundGroup from "./savorTheSoundGroup.jpg";
import { defaultPageFadeInTime } from "../../constants/fadeTimes";
import { Event } from "./Event";
import { socialMediaLinks } from "../../constants/socialMediaLinks";
import { futureEvents, pastEvents } from "./eventLists";

// consider adding image grid of 4 for each event on experience us page
// cleanup, move to styles files, create event component
// add social media links to footer

export const Events = () => {
  return (
    <Fade in timeout={defaultPageFadeInTime}>
      <Box sx={{ marginBottom: "25px" }}>
        <PageBanner image={savorTheSoundGroup} headerText="Event Calendar" />
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
            {futureEvents.length === 0 && (
              <Typography variant="h6">
                More events coming soon! Follow{" "}
                <Link href={socialMediaLinks.instagram} target="_blank">
                  @xionsoundwaves
                </Link>{" "}
                on Instagram to keep up with our latest happenings!
              </Typography>
            )}
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
