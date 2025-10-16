import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tour", text: "tour" },
];
export const pageIcons = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];
export const tours = [
  {
    id: 1,
    img: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    location: "china",
    length: "6 days",
    cost: "from 2100",
  },
  {
    id: 2,
    img: tour2,
    date: "october 1th, 2020",
    title: "best of java",
    location: " indonesia",
    length: "11 days",
    cost: "from $1400",
  },
  {
    id: 3,
    img: tour3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    location: "hong kong",
    length: "8 dayss",
    cost: "from $5000",
  },
  {
    id: 4,
    img: tour4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    location: " kenya",
    length: "20 days",
    cost: "from 3300",
  },
];
