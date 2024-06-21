export interface IEvent {
  address?: string;
  date: Date;
  details?: string;
  ticketLink?: string;
  title: string;
}

// enter these in reverse chronological order
const eventList: IEvent[] = [
  {
    title: "Temples of Pansophia Festival 2024",
    date: new Date("July 19, 2024 20:00:00"),
    details:
      "On July 19th, Xion Sound Waves will host the featured temple, with a featured concert the following evening, at the Temples of Pansophia Festival, a magical and immersive celebration that brings a sense of adventure and exploration to a land of temples, rich in ceremony, ritual, and more! The festival takes place from July 18th - July 22nd.",
    ticketLink: "https://www.templesofpansophia.org",
  },
  {
    title:
      "KC Urban Farm Co-Op Summer Solstice & Power to the People Celebration",
    date: new Date("June 22, 2024 12:00:00"),
    details:
      "Xion Sound Waves sings at the KCUFC Summer Solstice fundraising celebration, alongside Kansas City Rumba and Nicolette Paige. Come experience the music, exotic petting zoo, free produce giveaway, authentic Jamaican cuisine, and more!",
    address: "5051 E Gregory Blvd, Kansas City, MO",
  },
  {
    title: "Liberated Grounds Freedom Fest",
    date: new Date("May 24, 2024"),
    details:
      "Join Xion Sound Waves for a liberating set of concerts and conversations at Freedom Fest in Kansas City, organized by Liberated Grounds.",
    ticketLink:
      "https://www.liberatedgrounds.com/event-details-registration/lg-freedom-fest-2024-connection-camping",
  },
  {
    title: "Live on KKFI's Local Showcase",
    date: new Date("December 14, 2023"),
    details:
      "Tune in to KKFI's Local Showcase on Thursday, December 14th at 8pm as Xion Sound Waves performs live on Kansas City radio!",
  },
  {
    title: "Solstice Serenade",
    date: new Date("December 13, 2023"),
    address: "The Brick, 1727 McGee Street Kansas City, MO 64108",
    ticketLink:
      "https://www.eventbrite.com/e/solstice-serenade-with-xion-sound-waves-tickets-763057715167",
    details:
      "Eat, drink, and be merry with Xion Sound Waves as we celebrate the sounds of the season at The Brick, Wednesday, December 13th, 8pm. This intimate show will feature original, soul-stirring songs paired with uniquely-arranged holiday classics curated to uplift and capture the spirit of the solstice season.",
  },
  {
    title: "Xion Sound Waves at Prospero's Books",
    date: new Date("November 5, 2023"),
    address: "1800 W 39th St, Kansas City, MO 64111",
    ticketLink:
      "https://www.eventbrite.com/e/xion-at-propseros-books-tickets-734800697667",
    details:
      "Get your presale ticket today and secure your place amidst a privileged audience for an unforgettable evening with Xion Sound Waves. Join us and prepare for a night of musical transcendence! Doors open at 6:30pm.",
  },
  {
    title: "Calvin Arsenia Paradise Album Release Concert (Saturday)",
    date: new Date("June 24, 2023"),
    address: "The Emerald, 1715 W 9th St, Kansas City, MO 64101",
  },
  {
    title: "Calvin Arsenia Paradise Album Release Concert (Friday)",
    date: new Date("June 23, 2023"),
    address: "The Emerald, 1715 W 9th St, Kansas City, MO 64101",
  },
  {
    title: "Trans Peace Vigil Kansas City",
    date: new Date("June 17, 2023"),
    address: "707 W 47th St, Kansas City, MO 64112",
  },
  {
    title: "Heartland Pagan Festival (2023)",
    date: new Date("May 28, 2023"),
    address: "25110 235th St, McLouth, Kansas",
  },
  {
    title: "Savor the Sound",
    date: new Date("February 4, 2023"),
    address: "1300 W 28th St, Kansas City, MO 64108",
  },
  {
    title: "Heartland Pagan Festival (2022)",
    date: new Date("May 28, 2022"),
    address: "25110 235th St, McLouth, Kansas",
  },
];

export const pastEvents: IEvent[] = [];
export const futureEvents: IEvent[] = [];

// past events from soonest to furthest in the past
eventList.forEach((event) => {
  if (event.date.getTime() < Date.now()) {
    pastEvents.push(event);
  }
});

// future events from soonest to present to furthest in the future
eventList.reverse().forEach((event) => {
  if (event.date.getTime() >= Date.now()) {
    futureEvents.push(event);
  }
});
