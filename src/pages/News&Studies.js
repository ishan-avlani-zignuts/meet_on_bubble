import React from "react";
import CategoryPage from "./CategoryPage";
import nu1 from "../assets/images/nu1.png";
import nu2 from "../assets/images/nu2.webp";
import nu3 from "../assets/images/nu3.jpeg";
import nu4 from "../assets/images/nu4.jpeg";
import nu5 from "../assets/images/nu5.jpeg";
import nu6 from "../assets/images/nu6.jpeg";

const NewsUpdates = () => {
  const pageData = {
    category: "News & Updates",
    postCount: 62,
    articles: [
      {
        title: "New product: The Universal Template",
        image: nu1,
        excerpt:
          "In February 2024, we released a new Viral Loops product called The Universal Template. It aims to combine…",
      },
      {
        title: "Product Update — Year Review 2023",
        image: nu2,
        excerpt:
          "This is the biggest highlight of the year. It is a fast, no-code way to connect any custom…",
      },
      {
        title: "How to build a referral program for Wishpond",
        image: nu3,
        excerpt:
          "This is an announcement and tutorial for integrating Wishpond with Viral Loops. It is an integration you can…",
      },
      {
        title: "How to build a referral program for Marketo",
        image: nu4,
        excerpt:
          "This is an announcement and a tutorial for the integration of Marketo with Viral Loops. It is an…",
      },
      {
        title: "Viral Loops Product Update: What’s New From April",
        image: nu5,
        excerpt:
          "It has been 2 months since the last update, and many things have improved! Most importantly, Viral Loops…",
      },
      {
        title:
          "London, UK, April 7, 2022 Viral Loops is excited to announce that it has been acquired by Wishpond…",
        image: nu6,
        excerpt: "",
      },
    ],
  };

  return <CategoryPage {...pageData} />;
};

export default NewsUpdates;
