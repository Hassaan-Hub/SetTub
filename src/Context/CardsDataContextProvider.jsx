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
      profile: profile,
      likes: 2,
      dislikes: 9,
      followerCount: "705K Subscribers",
      followChannelName: "Lex Fridman",
      description: "How to get started\n\nThis is the first part of our series on getting started with React. We cover the basics of components, state, props, and JSX, and set you up with a solid foundation to build your first app. This is going to be a long and detailed journey, so buckle up!",
      comments: [
        { id: 1, name: "Phoenix Baker", handle: "@phoenix", time: "Just now", text: "Looks good!", avatarColor: "#3b82f6" },
        { id: 2, name: "Lana Steiner", handle: "@lana", time: "2 mins ago", text: "This was really helpful, thank you so much for breaking it down step by step!", avatarColor: "#ec4899" },
        { id: 3, name: "Olivia Rhye", handle: "@olivia", time: "5 mins ago", text: "Amazing explanation. Can't wait for part 2!", avatarColor: "#10b981" }
      ]
    },
    {
      id: 2,
      title: "How much I made with 70M views",
      views: "100K Views",
      time: "18 hours ago",
      author: "Anau Ros",
      thumbnail: thumbnail2,
      profile: profile,
      likes: 2,
      dislikes: 9,
      followerCount: "705K Subscribers",
      followChannelName: "Lex Fridman",
      description: "How to get started\n\nThis is the second video in our series on content creation and YouTube growth.",
      comments: [
        { id: 1, name: "Phoenix Baker", handle: "@phoenix", time: "Just now", text: "Looks good!" }
      ]
    },
    {
      id: 3,
      title: "Deno just got 2M npm packages",
      views: "100K Views",
      time: "18 hours ago",
      author: "Anau Ros",
      thumbnail: thumbnail3,
      profile: profile,
      likes: 2,
      dislikes: 9,
      followerCount: "705K Subscribers",
      followChannelName: "Lex Fridman",
      description: "How to get started\n\nExploring the latest updates in Deno and its growing ecosystem.",
      comments: [
        { id: 1, name: "Phoenix Baker", handle: "@phoenix", time: "Just now", text: "Looks good!" }
      ]
    },
    {
      id: 4,
      title: "Best way to learn Socket IO | complex ch...",
      views: "100K Views",
      time: "18 hours ago",
      author: "Anau Ros",
      thumbnail: thumbnail4,
      profile: profile,
      likes: 2,
      dislikes: 9,
      followerCount: "705K Subscribers",
      followChannelName: "Lex Fridman",
      description: "How to get started\n\nDeep dive into real-time communication with Socket.IO.",
      comments: [
        { id: 1, name: "Phoenix Baker", handle: "@phoenix", time: "Just now", text: "Looks good!" }
      ]
    },
    {
      id: 5,
      title: "Terraform, fig & FreeAPI | Updates in...",
      views: "100K Views",
      time: "18 hours ago",
      author: "Anau Ros",
      thumbnail: thumbnail5,
      profile: profile,
      likes: 2,
      dislikes: 9,
      followerCount: "705K Subscribers",
      followChannelName: "Lex Fridman",
      description: "How to get started\n\nLatest updates in infrastructure as code and design tools.",
      comments: [
        { id: 1, name: "Phoenix Baker", handle: "@phoenix", time: "Just now", text: "Looks good!" }
      ]
    },
    {
      id: 6,
      title: "Let's learn react from scratch",
      views: "100K Views",
      time: "18 hours ago",
      author: "Anau Ros",
      thumbnail: thumbnail6,
      profile: profile,
      likes: 2,
      dislikes: 9,
      followerCount: "705K Subscribers",
      followChannelName: "Lex Fridman",
      description: "How to get started\n\nA complete beginner's guide to React from zero.",
      comments: [
        { id: 1, name: "Phoenix Baker", handle: "@phoenix", time: "Just now", text: "Looks good!" }
      ]
    },
    {
      id: 7,
      title: "Google's IDX Unveiled : Exclusive First Look",
      views: "100K Views",
      time: "18 hours ago",
      author: "Anau Ros",
      thumbnail: thumbnail7,
      profile: profile,
      likes: 2,
      dislikes: 9,
      followerCount: "705K Subscribers",
      followChannelName: "Lex Fridman",
      description: "How to get started\n\nFirst look at Google's new cloud-based development environment.",
      comments: [
        { id: 1, name: "Phoenix Baker", handle: "@phoenix", time: "Just now", text: "Looks good!" }
      ]
    },
    {
      id: 8,
      title: "Google and Pieces dropped some interesting...",
      views: "100K Views",
      time: "18 hours ago",
      author: "Anau Ros",
      thumbnail: thumbnail8,
      profile: profile,
      likes: 2,
      dislikes: 9,
      followerCount: "705K Subscribers",
      followChannelName: "Lex Fridman",
      description: "How to get started\n\nExploring exciting new developer tools and features.",
      comments: [
        { id: 1, name: "Phoenix Baker", handle: "@phoenix", time: "Just now", text: "Looks good!" }
      ]
    },
    {
      id: 9,
      title: "Flutter Dart case Study by @getpieces | Engineering...",
      views: "100K Views",
      time: "18 hours ago",
      author: "Anau Ros",
      thumbnail: thumbnail9,
      profile: profile,
      likes: 2,
      dislikes: 9,
      followerCount: "705K Subscribers",
      followChannelName: "Lex Fridman",
      description: "How to get started\n\nA deep case study of Flutter and Dart in production apps.",
      comments: [
        { id: 1, name: "Phoenix Baker", handle: "@phoenix", time: "Just now", text: "Looks good!" }
      ]
    },
    {
      id: 10,
      title: "How database works | Engineering side",
      views: "100K Views",
      time: "18 hours ago",
      author: "Anau Ros",
      thumbnail: thumbnail10,
      profile: profile,
      likes: 2,
      dislikes: 9,
      followerCount: "705K Subscribers",
      followChannelName: "Lex Fridman",
      description: "How to get started\n\nUnderstanding database internals from an engineering perspective.",
      comments: [
        { id: 1, name: "Phoenix Baker", handle: "@phoenix", time: "Just now", text: "Looks good!" }
      ]
    },
    {
      id: 11,
      title: "Building a multi million dollar developer prod...",
      views: "100K Views",
      time: "18 hours ago",
      author: "Anau Ros",
      thumbnail: thumbnail11,
      profile: profile,
      likes: 2,
      dislikes: 9,
      followerCount: "705K Subscribers",
      followChannelName: "Lex Fridman",
      description: "How to get started\n\nLessons from building a developer product that scaled.",
      comments: [
        { id: 1, name: "Phoenix Baker", handle: "@phoenix", time: "Just now", text: "Looks good!" }
      ]
    },
    {
      id: 12,
      title: "How does a browser work? | Engineering s...",
      views: "100K Views",
      time: "18 hours ago",
      author: "Anau Ros",
      thumbnail: thumbnail12,
      profile: profile,
      likes: 2,
      dislikes: 9,
      followerCount: "705K Subscribers",
      followChannelName: "Lex Fridman",
      description: "How to get started\n\nUnderstanding the internals of modern web browsers.",
      comments: [
        { id: 1, name: "Phoenix Baker", handle: "@phoenix", time: "Just now", text: "Looks good!" }
      ]
    }
  ];

  return (
    <CardsDataContext.Provider value={videos}>
      {children}
    </CardsDataContext.Provider>
  );
};

export default CardsDataContextProvider;