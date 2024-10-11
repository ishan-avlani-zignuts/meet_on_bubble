import React from "react";
import CategoryPage from "./CategoryPage";
import ng1 from "../assets/images/ng1.jpeg";
import ng2 from "../assets/images/ng2.jpg";
import ng3 from "../assets/images/ng3.jpg";
import ng4 from "../assets/images/ng4.jpg";
import ng5 from "../assets/images/ng5.jpg";
import ng6 from "../assets/images/ng6.jpg";

const NewsletterGrowth = () => {
  const pageData = {
    category: "Newsletter Growth",
    postCount: 14,
    articles: [
      {
        title: "How to launch a community with referrals as the access key",
        image: ng1,
        excerpt:
          "TL; DR—Create a gated community/newsletter and a landing page to collect waitlist members. Then, give every member in…",
      },
      {
        title:
          "How to build a newsletter referral program with Campaign Monitor",
        image: ng2,
        excerpt:
          "This is an announcement and a tutorial for the integration of Campaign Monitor with The Newsletter Referral—our referral…",
      },
      {
        title: "How to build a newsletter referral program with ConvertKit",
        image: ng3,
        excerpt:
          "This is an announcement and a tutorial for the integration of ConvertKit with The Newsletter Referral—our referral marketing…",
      },
      {
        title: "How to build a newsletter referral program with Ghost",
        image: ng4,
        excerpt:
          "The headline of the article gives away its contents. This piece serves both as an announcement and a…",
      },
      {
        title: "Why online creators need email addresses",
        image: ng5,
        excerpt:
          "Week after week, the number of online creators that contacts us to help them grow their database raises.…",
      },
      {
        title: "How to build a newsletter referral program with HubSpot",
        image: ng6,
        excerpt:
          "Here’s to becoming better! If you’re following what we do in Viral Loops, I think you’ve noticed that…",
      },
    ],
  };

  return <CategoryPage {...pageData} />;
};

export default NewsletterGrowth;
