export interface IEvent {
  address: string;
  date: Date;
  details?: string;
  ticketLink?: string;
  title: string;
}

const eventList: IEvent[] = [
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

eventList.forEach((event) => {
  if (event.date.getTime() < Date.now()) {
    pastEvents.push(event);
  } else {
    futureEvents.push(event);
  }
});
