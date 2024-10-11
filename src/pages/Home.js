import { Box, Typography, Link } from "@mui/material";
import React from "react";
import main from "../assets/images/main_img.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import guide from "../assets/images/guide.png";
import hero from "../assets/images/hero.gif";
import mobile from "../assets/images/mobile.png";
import thanks from "../assets/images/thanks.jpg";
import startup from "../assets/images/startup.png";

import ContactUs from "../views/home/ContactUs";

const Home = () => {
  const customStyles = {
    body_para: {
      color: "#212529",
      fontSize: "18px",
      mb: 4,
      fontFamily: "Lora",
      textAlign: "justify",
    },
    list_para: {
      color: "#212529",
      fontSize: "18px",
      fontFamily: "Lora",
      textAlign: "justify",
    },
    img: {
      textAlign: "center",
      mb: 4,
    },
    span: {
      color: "black",
      fontSize: "18px",
      fontWeight: "bolder",
    },
    span_italic: {
      color: "black",
      fontWeight: "bolder",
      fontStyle: "italic",
    },
    heading: {
      mb: 4,
      fontWeight: "bolder",
      fontSize: "32px",
      fontFamily: "Neunhaas_e",
    },
    subheading: {
      mb: 4,
      fontWeight: "bolder",
      fontSize: "24px",
      fontFamily: "Neunhaas_e",
    },
  };

  return (
    <>
      <Box marginTop={"50px"}>
        <Box marginBottom={"1.5rem"}>
          <img
            src={main}
            alt="main"
            width={"100%"}
            style={{ borderRadius: "5px" }}
          />
        </Box>

        <Box
          sx={{
            maxWidth: "660px",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
              mb: "1.5rem",
              color: "#a8aab2",
              fontSize: "14px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "black",
                display: "flex",
                color: "white",
                width: "64px",
                height: "64px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: "48px" }}>R</Typography>
            </Box>
            <Box>-</Box>
            <Box>
              <Typography>REFERRAL MARKETING CASE STUDY</Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 2, marginBottom: "32px" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "24px", sm: "36px", md: "48px" },
                lineHeight: "1",
              }}
            >
              How Robinhood’s referral program brought 1 million users before
              launch
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                mt: 3,
                color: "#a8aab2",
                fontFamily: "Neunhaas_d",
                alignItems: { xs: "flex-start", sm: "center" }, 
              }}
            >
              <Typography sx={{ fontFamily: "inherit", mb: { xs: 1, sm: 0 } }}>
                by{""}
              </Typography>
              <Typography
                sx={{
                  mr: { sm: 1 },
                  ml: { sm: 1 },
                  color: "black",
                  fontFamily: "inherit",
                  mb: { xs: 1, sm: 0 },
                }}
              >
                Apostle Mengoulis
              </Typography>
              <Typography sx={{ fontFamily: "inherit", mb: { xs: 1, sm: 0 } }}>
                · June 12, 2018 ·
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ml: { sm: 1 },
                  mb: { xs: 1, sm: 0 },
                }}
              >
                <AccessTimeIcon fontSize="small" sx={{ mr: 0.5 }} />
                <Typography sx={{ fontFamily: "inherit" }}>
                  4 min read
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ mt: 3, mb: 4 }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "18px",
                pb: 2,
                fontFamily: "Lora",
              }}
            >
              It’s a tale as old as time:
            </Typography>

            <Box sx={{ mt: 1 }}>
              <ol>
                <li>
                  <Typography sx={customStyles.list_para}>
                    You get an idea for a revolutionary product or service.
                  </Typography>
                </li>
                <li>
                  <Typography sx={customStyles.list_para}>
                    You launch the next big thing on your website.
                  </Typography>
                </li>
                <li>
                  <Typography sx={customStyles.list_para}>
                    You invite your family, friends—perhaps even your LinkedIn
                    network — to download your app or buy from your store.
                  </Typography>
                </li>
                <li>
                  <Typography sx={customStyles.list_para}>
                    Despite your efforts, your launch ends up being less “big
                    thing” and more small potatoes.
                  </Typography>
                </li>
              </ol>
            </Box>
          </Box>

          <Box>
            <img src={guide} alt="guide" width={"100%"} />
          </Box>

          <Box sx={{ mt: 3, mb: 4, width: "100%" }}>
            <Typography sx={customStyles.body_para}>
              Commission-free stock-trading app Robinhood managed to rewrite
              this classic narrative with an enviable and explosive
              go-to-market.
            </Typography>
            <Typography sx={customStyles.body_para}>
              In the year prior to launch, Robinhood built a waiting list
              amounting to nearly…one…million…
            </Typography>

            <Box sx={customStyles.img}>
              <img src={hero} alt="hero gif" width={"100%"} />
            </Box>

            <Typography sx={customStyles.body_para}>…users.</Typography>
            <Typography sx={customStyles.body_para}>
              That’s <span style={customStyles.span}>one million users</span>{" "}
              before the company{" "}
              <span style={{ fontStyle: "italic" }}> even existed.</span>
            </Typography>
            <Typography sx={customStyles.body_para}>
              <span style={customStyles.span}>Sound nuts?–</span> I’d say so.
            </Typography>
            <Typography sx={customStyles.body_para}>
              Gaining one million potential users during prelaunch is perhaps a
              lofty target for a small startup. But you can certainly expand
              your {""}
              <Link
                href="/"
                target="_blank"
                sx={{ color: "black", textDecoration: "underline" }}
              >
                prelaunch
              </Link>{" "}
              reach—and your waiting list—by imitating some of Robinhood’s
              techniques.
            </Typography>
            <Typography sx={customStyles.body_para}>
              Just like Robinhood stole from the rich and gave to the poor,
              we’re stealing/ borrowing from Robinhood’s {""}
              <Link
                href="/"
                target="_blank"
                sx={{ color: "black", textDecoration: "underline" }}
              >
                refferal marketing
              </Link>{" "}
              program tactics and giving to you.
            </Typography>

            <Typography sx={customStyles.heading}>
              Compel Immediate Action
            </Typography>
            <Typography sx={customStyles.body_para}>
              <span style={customStyles.span}>FOMO :</span> Fear Of Missing Out.
            </Typography>
            <Typography sx={customStyles.body_para}>
              It’s a powerful force.
            </Typography>
            <Typography sx={customStyles.body_para}>
              So powerful, in fact, that simply making potential customers{" "}
              <span style={customStyles.span_italic}>feel</span> like they{" "}
              <span style={customStyles.span_italic}>might</span> be missing out
              on something can often move them to action.
            </Typography>
            <Typography sx={customStyles.body_para}>
              56% of surveyed adults admit that FOMO impacts their {""}
              <Link
                href="/"
                target="_blank"
                sx={{ color: "black", textDecoration: "underline" }}
              >
                media usage
              </Link>{" "}
              habits, for example, compelling them to look at social media again
              and again.
            </Typography>
            <Typography sx={customStyles.body_para}>
              Marketers can harness FOMO by creating an impression of
              exclusivity through the use of wait lists, limited supply, and
              time limits.
            </Typography>
            <Typography sx={customStyles.body_para}>
              And that’s exactly what Robinhood’s referral did.
            </Typography>
            <Typography sx={customStyles.body_para}>
              As a part of their {""}
              <Link
                href="/"
                target="_blank"
                sx={{ color: "black", textDecoration: "underline" }}
              >
                pre-launch strategy
              </Link>{" "}
              , the Robinhood team invited potential app lovers to gain
              invitation-only, early access to its {""}
              <Link
                href="/"
                target="_blank"
                sx={{ color: "black", textDecoration: "underline" }}
              >
                private beta
              </Link>{" "}
              .
            </Typography>
            <Typography sx={customStyles.body_para}>
              Instead of inviting potential Robinhood users to join a mailing
              list, the company appealed to its interested fans’ desire to be
              the first to benefit from what Robinhood had to offer.
            </Typography>
            <Typography sx={customStyles.body_para}>
              And this offer was so enticing, that it {""}
              <Link
                href="/"
                target="_blank"
                sx={{ color: "black", textDecoration: "underline" }}
              >
                got the attention
              </Link>{" "}
              of Hacker News, which was “Every engineer’s dream in the Valley,”
              according to co-founder Vlad Tenev.
            </Typography>
            <Typography sx={customStyles.heading}>
              Keep the Process Simple
            </Typography>
            <Typography sx={customStyles.body_para}>
              So how did Robinhood‘s referral draw in the first
              eager-to-gain-early-access few?
            </Typography>
            <Typography sx={customStyles.body_para}>
              Robinhood kept the sign-up process short, sweet, and simple.
            </Typography>
            <Typography sx={customStyles.body_para}>
              When a person arrived on the early-access landing page, only one
              task stood between them and the chance to be the first to use the
              Robinhood app: entering their email address.
            </Typography>
            <Typography sx={customStyles.body_para}>
              Let’s face it: people aren’t that great at paying attention—not
              for long periods of time, anyway.
            </Typography>
            <Typography sx={customStyles.body_para}>
              In fact, our attention span is only about 8 seconds. That’s
              shorter than the {""}
              <Link
                href="/"
                target="_blank"
                sx={{ color: "black", textDecoration: "underline" }}
              >
                attention span
              </Link>{" "}
              of a goldfish.
            </Typography>
            <Typography sx={customStyles.body_para}>
              The brainpower behind building Robinhood’s waiting list knew this
              fact and designed a sign-up page so straightforward that it could
              be completed before any person (or fish, for that matter) could
              lose interest.
            </Typography>

            <Box sx={customStyles.img}>
              <img src={mobile} alt="mobile" width={"100%"} />
            </Box>

            <Typography sx={customStyles.body_para}>
              The page was simple to use. Not full of jargon or length copy,
              just one powerful hook—”Robinhood $0 commission stock trading.
              Stop paying up to $10 per trade.”
            </Typography>
            <Typography sx={customStyles.body_para}>
              give users only <span style={customStyles.span}>one option</span>;
              To opt-in.
            </Typography>
            <Typography sx={customStyles.heading}>
              Get People to Share and Re-engage
            </Typography>
            <Typography
              variant="h5"
              sx={{ mb: 4, fontWeight: "bolder", fontSize: "24px" }}
            >
              Gaining access was simple.
            </Typography>
            <Typography sx={customStyles.body_para}>
              With Robinhood’s referral and like many other pre-launches, the
              first few sign-ups were acquired from family, friends, and as a
              result of press mentions.
            </Typography>
            <Typography sx={customStyles.body_para}>
              But how did Robinhood (with their {""}
              <Link
                href="/"
                target="_blank"
                sx={{ color: "black", textDecoration: "underline" }}
              >
                refferal marketing
              </Link>{" "}
              program) turn those first few to thousands, hundreds of thousands
              and then nearly a million?
            </Typography>
            <Typography sx={customStyles.subheading}>
              Gaining access was simple.
            </Typography>
            <Typography sx={customStyles.body_para}>
              People. Love. Playing. Games. ⚽
            </Typography>
            <Typography sx={customStyles.body_para}>
              Especially when those games are tied to{" "}
              <Link
                href="/"
                target="_blank"
                sx={{ color: "black", textDecoration: "underline" }}
              >
                rewards actually they want
              </Link>
              .
            </Typography>
            <Typography sx={customStyles.body_para}>
              Robinhood created a referral-based viral loop that looked
              something like this:
            </Typography>
            <ol>
              <li>
                <Typography sx={customStyles.body_para}>
                  When users signed up for Robinhood’s Referral, they were put
                  on the waiting list. The higher on a person’s position on the
                  list, the earlier the Robinhood fan got access to the beta.
                </Typography>
              </li>
              <li>
                <Typography sx={customStyles.body_para}>
                  After entering an email address, the “thank you page” allowed
                  individuals to see is their position on the waiting list.
                </Typography>
              </li>
            </ol>
            <Typography sx={customStyles.body_para}>
              Conveniently located under their waiting list placement? A
              reward-based invitation to share Robinhood’s exclusive offer with
              others in just one click. The more a person shared, the higher
              waiting-list position. The higher the position, the sooner one
              would gain access to Robinhood. And who doesn’t want to jump ahead
              in the queue?
            </Typography>
            <Typography sx={customStyles.body_para}>
              And that’s what led to{" "}
              <span style={customStyles.span}>exponential growth.</span>{" "}
            </Typography>
            <Box sx={customStyles.img}>
              <img src={thanks} alt="thanks" width={"100%"} />
            </Box>
            <Typography sx={customStyles.heading}>
              Bonus: Embrace What Makes You Different
            </Typography>
            <Typography sx={customStyles.body_para}>
              All of these tips and tricks got Robinhood part of the way. But
              people flocked to Robinhood because they saw something different.
              Meaningful. Useful.
            </Typography>
            <Typography sx={customStyles.body_para}>
              <span style={customStyles.span}>Robinhood’s referral</span>{" "}
              program wanted to make things easier for people.
            </Typography>
            <Typography sx={customStyles.body_para}>
              And people love easy.
            </Typography>
            <Typography sx={customStyles.body_para}>
              When describing the function of Robinhood, co-founder Vladimir
              Tenev said they built it aiming to “[make] trading as frictionless
              as possible.”
            </Typography>
            <Typography
              sx={{
                color: "#212529",
                fontSize: "18px",
                mb: 8,
                fontFamily: "Lora",
              }}
            >
              In the end, the app’s team built their waiting list using a
              similar tactic. By providing a frictionless portal for customer
              sign-up and giving potential customers lots of reasons to become
              actual customers, Robinhood moved beyond a humdrum launch and
              accomplished something truly spectacular with its{" "}
              <Link
                href="/"
                target="_blank"
                sx={{ color: "black", textDecoration: "underline" }}
              >
                refferal marketing
              </Link>{" "}
              program.
            </Typography>
            <Typography sx={customStyles.heading}>
              So, do you want to create a pre-launch campaign similar to
              Robinhood’s referral program?
            </Typography>
            <Typography sx={customStyles.body_para}>
              <Link
                href="/"
                target="_blank"
                sx={{ color: "black", textDecoration: "underline" }}
              >
                This template
              </Link>{" "}
              is inspired by{" "}
              <Link
                href="/"
                target="_blank"
                sx={{ color: "black", textDecoration: "underline" }}
              >
                Robinhood
              </Link>{" "}
              ‘s referral program. People can join your{" "}
              <Link
                href="/"
                target="_blank"
                sx={{ color: "black", textDecoration: "underline" }}
              >
                waitlist
              </Link>{" "}
              , just by putting in their info. Then, the more friends they
              invite, the higher they climb up the list.
            </Typography>
            <Typography sx={customStyles.span} marginBottom={"2rem"}>
              It’s that simple!
            </Typography>

            <Box sx={customStyles.img}>
              <img src={startup} alt="startup" width={"100%"} />
            </Box>

            <Typography sx={customStyles.body_para}>
              In case you’re interested to{" "}
              <Link
                href="/"
                target="_blank"
                sx={{ color: "black", textDecoration: "underline" }}
              >
                build a pre-launch
              </Link>{" "}
              like Robinhood’s referral, we have your back! Save yourself some
              time.
            </Typography>
            <Typography
              sx={{
                color: "#212529",
                fontSize: "18px",
                mb: 8,
                fontFamily: "Lora",
              }}
            >
              Cheers!
            </Typography>
          </Box>

          <ContactUs />
        </Box>
      </Box>
    </>
  );
};

export default Home;
