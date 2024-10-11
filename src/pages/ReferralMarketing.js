import React from "react";
import CategoryPage from "./CategoryPage";
import rm1 from "../assets/images/rm1.jpg";
import rm2 from "../assets/images/rm2.jpeg";
import rm3 from "../assets/images/rm3.png";
import rm4 from "../assets/images/rm4.png";
import rm5 from "../assets/images/rm5.jpg";
import rm6 from "../assets/images/rm6.jpg";
import rm7 from "../assets/images/rm7.jpg";

const ReferralMarketing = () => {
  const pageData = {
    category: "Referral Marketing",
    postCount: 78,
    mainImage: rm1,
    mainTitle: "Referral Marketing: An Actionable Guide",
    mainSubtitle: "Read our complete manual for referral marketing campaigns.",
    articles: [
      {
        title: "The Viral Power of Referral Contagion",
        image: rm5,
        excerpt:
          "Wouldn't it be wonderful if your referral program could act like a beneficial virus, one that infects others….",
      },
      {
        title:
          "Referrals Reinvented: Leveraging Nano and Micro-Influencers for Max Impact",
        image: rm6,
        excerpt:
          "Is your referral program more “meh” than “wow”? You’re not alone. Many businesses stumble at the starting line,…",
      },
      {
        title:
          "Identifying and Segmenting Target Market for Better Referral Marketing",
        image: rm7,
        excerpt:
          "Word-of-mouth marketing can boost your marketing like nothing else. It has been said that it has a conversion…",
      },
      {
        title:
          "How to Use Lead Scoring to Qualify and Prioritize Your Referred Leads",
        image: rm2,
        excerpt:
          "Alright, so you wanted a five-fold increase in your revenue this year. You executed multiple marketing strategies and…",
      },
      {
        title: "How to Generate Natural Word of Mouth for Your SaaS Company",
        image: rm3,
        excerpt:
          "So you've put your heart and soul into crafting that amazing, one-of-a-kind SaaS product that's supposed to take…",
      },
      {
        title:
          "How To Generate Natural Word Of Mouth For Your E-Commerce Store",
        image: rm4,
        excerpt:
          "When you're in the e-commerce industry, you'll know that everyone is vying for attention. It's like being at…",
      },
      {
        title: "The Viral Power of Referral Contagion",
        image: rm2,
        excerpt:
          "Wouldn't it be wonderful if your referral program could act like a beneficial virus, one that infects others….",
      },
      {
        title:
          "Referrals Reinvented: Leveraging Nano and Micro-Influencers for Max Impact",
        image: rm3,
        excerpt:
          "Is your referral program more “meh” than “wow”? You’re not alone. Many businesses stumble at the starting line,…",
      },
      {
        title:
          "Identifying and Segmenting Target Market for Better Referral Marketing",
        image: rm4,
        excerpt:
          "Word-of-mouth marketing can boost your marketing like nothing else. It has been said that it has a conversion…",
      },
      {
        title:
          "How to Use Lead Scoring to Qualify and Prioritize Your Referred Leads",
        image: rm2,
        excerpt:
          "Alright, so you wanted a five-fold increase in your revenue this year. You executed multiple marketing strategies and…",
      },
      {
        title: "How to Generate Natural Word of Mouth for Your SaaS Company",
        image: rm3,
        excerpt:
          "So you've put your heart and soul into crafting that amazing, one-of-a-kind SaaS product that's supposed to take…",
      },
      {
        title:
          "How To Generate Natural Word Of Mouth For Your E-Commerce Store",
        image: rm4,
        excerpt:
          "When you're in the e-commerce industry, you'll know that everyone is vying for attention. It's like being at…",
      },
    ],
  };

  return <CategoryPage {...pageData} />;
};

export default ReferralMarketing;
