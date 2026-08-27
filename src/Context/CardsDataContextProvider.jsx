import React, { createContext } from "react";
// thumbnail imports
import thumbnail1 from "../assets/thumbnail1.png";
import thumbnail2 from "../assets/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail3.png";
import thumbnail4 from "../assets/thumbnail4.png";
import thumbnail5 from "../assets/thumbnail5.png";
import thumbnail6 from "../assets/thumbnail6.png";
import thumbnail7 from "../assets/thumbnail7.png";
import thumbnail8 from "../assets/thumbnail8.png";
import thumbnail9 from "../assets/thumbnail9.png";
import thumbnail10 from "../assets/thumbnail10.png";
import thumbnail11 from "../assets/thumbnail11.png";
import thumbnail12 from "../assets/thumbnail12.png";
// profile imports
import profile from "../assets/profile.png";

export const CardsDataContext = createContext();

const CardsDataContextProvider = ({ children }) => {

  const videos = [
    {
      id: 1,
      title: "How to learn react | A React Roadmap",
      views: "100K Views",
      time: "18 hours ago",
      author: "Yash Mittal",
      thumbnail: thumbnail1,
      profile: profile
    },
    {
      id: 2,
      title: "How much I made with 70M views",
      views: "100K Views",
      time: "18 hours ago",
      author: "Anau Ros",
      thumbnail: thumbnail2,
      profile: profile
    },
    {
      id: 3,
      title: "Deno just got 2M npm packages",
      views: "100K Views",
      time: "18 hours ago",
      author: "Anau Ros",
      thumbnail: thumbnail3,
      profile: profile
    },
    {
      id: 4,
      title: "Best way to learn Socket IO | complex ch...",
      views: "100K Views",
      time: "18 hours ago",
      author: "Anau Ros",
      thumbnail: thumbnail4,
      profile: profile
    },
    {
      id: 5,
      title: "Terraform, fig & FreeAPI | Updates in...",
      views: "100K Views",
      time: "18 hours ago",
      author: "Anau Ros",
      thumbnail: thumbnail5,
      profile: profile
    },
    {
      id: 6,
      title: "Let's learn react from scratch",
      views: "100K Views",
      time: "18 hours ago",
      author: "Anau Ros",
      thumbnail: thumbnail6,
      profile: profile
    },
    {
      id: 7,
      title: "Google's IDX Unveiled : Exclusive First Look",
      views: "100K Views",
      time: "18 hours ago",
      author: "Anau Ros",
      thumbnail: thumbnail7,
      profile: profile
    },
    {
      id: 8,
      title: "Google and Pieces dropped some interesting...",
      views: "100K Views",
      time: "18 hours ago",
      author: "Anau Ros",
      thumbnail: thumbnail8,
      profile: profile
    },
    {
      id: 9,
      title: "Flutter Dart case Study by @getpieces | Engineering...",
      views: "100K Views",
      time: "18 hours ago",
      author: "Anau Ros",
      thumbnail: thumbnail9,
      profile: profile
    },
    {
      id: 10,
      title: "How database works | Engineering side",
      views: "100K Views",
      time: "18 hours ago",
      author: "Anau Ros",
      thumbnail: thumbnail10,
      profile: profile
    },
    {
      id: 11,
      title: "Building a multi million dollar developer prod...",
      views: "100K Views",
      time: "18 hours ago",
      author: "Anau Ros",
      thumbnail: thumbnail11,
      profile: profile
    },
    {
      id: 12,
      title: "How does a browser work? | Engineering s...",
      views: "100K Views",
      time: "18 hours ago",
      author: "Anau Ros",
      thumbnail: thumbnail12,
      profile: profile
    }
  ];

  return (
    <CardsDataContext.Provider value={videos}>
      {children}
    </CardsDataContext.Provider>
  );
};

export default CardsDataContextProvider;