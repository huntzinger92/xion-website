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
import * as styles from "./Events.styles";

export const Events = () => {
  return (
    <Fade in timeout={defaultPageFadeInTime}>
      <Box sx={styles.eventsPageContainer}>
        <PageBanner image={savorTheSoundGroup} headerText="Event Calendar" />
        <ResponsiveAppContainer>
          <Box sx={styles.upcomingHeaderContainer}>
            <Typography variant="h4">Upcoming Events</Typography>
            <hr />
          </Box>
          <Box sx={styles.upcomingEventsContainer}>
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
          <Box sx={styles.pastEventsHeaderContainer}>
            <Typography variant="h6">Past Events</Typography>
            <hr />
          </Box>
          <Box sx={styles.pastEventsContainer}>
            {pastEvents.map((pastEvent) => (
              <Event {...pastEvent} key={pastEvent.title} />
            ))}
          </Box>
        </ResponsiveAppContainer>
      </Box>
    </Fade>
  );
};
