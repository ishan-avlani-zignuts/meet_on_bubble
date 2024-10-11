import React from "react";
import CategoryPage from "./CategoryPage";
import pr1 from "../assets/images/pr1.png";
import pr2 from "../assets/images/pr2.jpeg";
import pr3 from "../assets/images/pr3.jpg";
import pr4 from "../assets/images/pr4.jpg";
import pr5 from "../assets/images/pr5.jpeg";
import pr6 from "../assets/images/pr6.jpeg";
import pr7 from "../assets/images/pr7.jpeg";

const Prelaunch = () => {
  const pageData = {
    category: "Prelaunch",
    postCount: 35,
    mainImage: pr1,
    articles: [
      {
        title: "The Viral Power of Referral Contagion",
        image: pr2,
        excerpt:
          "Wouldn't it be wonderful if your referral program could act like a beneficial virus, one that infects others….",
      },
      {
        title:
          "Referrals Reinvented: Leveraging Nano and Micro-Influencers for Max Impact",
        image: pr3,
        excerpt:
          "Is your referral program more “meh” than “wow”? You’re not alone. Many businesses stumble at the starting line,…",
      },
      {
        title:
          "Identifying and Segmenting Target Market for Better Referral Marketing",
        image: pr4,
        excerpt:
          "Word-of-mouth marketing can boost your marketing like nothing else. It has been said that it has a conversion…",
      },
      {
        title:
          "How to Use Lead Scoring to Qualify and Prioritize Your Referred Leads",
        image: pr5,
        excerpt:
          "Alright, so you wanted a five-fold increase in your revenue this year. You executed multiple marketing strategies and…",
      },
      {
        title: "How to Generate Natural Word of Mouth for Your SaaS Company",
        image: pr6,
        excerpt:
          "So you've put your heart and soul into crafting that amazing, one-of-a-kind SaaS product that's supposed to take…",
      },
      {
        title:
          "How To Generate Natural Word Of Mouth For Your E-Commerce Store",
        image: pr7,
        excerpt:
          "When you're in the e-commerce industry, you'll know that everyone is vying for attention. It's like being at…",
      },
    ],
  };

  return <CategoryPage {...pageData} />;
};

export default Prelaunch;
