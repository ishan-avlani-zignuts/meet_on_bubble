import React from "react";
import CategoryPage from "./CategoryPage";
import cs1 from "../assets/images/cs1.jpg";
import cs2 from "../assets/images/cs2.jpg";
import cs3 from "../assets/images/cs3.jpg";
import cs4 from "../assets/images/cs4.jpeg";
import cs5 from "../assets/images/cs5.jpeg";
import cs6 from "../assets/images/cs6.webp";

const CaseStudies = () => {
  const pageData = {
    category: "Case Studies",
    postCount: 31,
    articles: [
      {
        title:
          "Using a referral waitlist before lunch to get traction at low CAC",
        image: cs1,
        excerpt:
          "The following is a summary of my talk with Roy Povarchik, Director of Growth at Sequence. Sequence is…",
      },
      {
        title: "Prentus’ reward-based waiting list (20% Referral Rate)",
        image: cs2,
        excerpt:
          "The following is a summary of my talk with Rod H. Danan, founder of Prentus, who created  What…",
      },
      {
        title:
          "Interview: Getting pre-sale signups before a festival launch with referral giveaways",
        image: cs3,
        excerpt:
          "The following is a comprehensive summary of our interview with Sian Bennett and Rory Palmer Rowe from Mustard…",
      },
      {
        title: "B2B referral program with an interactive twist",
        image: cs4,
        excerpt:
          "This article was originally written by a Viral Loops customer here. Viral Loops has not altered or influenced…",
      },
      {
        title:
          "ultimate.money: Getting 500K early adopters with a prelaunch waitlist",
        image: cs5,
        excerpt:
          "Abstract ultimate.money is developing a crypto wallet super app to allow non-web3 experts to participate in Decentralised Finance…",
      },
      {
        title: "How Revolut grew 150x with referral marketing—a case study",
        image: cs6,
        excerpt:
          "",
      },
    ],
  };

  return <CategoryPage {...pageData} />;
};

export default CaseStudies;
