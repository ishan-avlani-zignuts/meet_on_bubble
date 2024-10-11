import { Container } from "@mui/material";
import "./App.css";
import Home from "./pages/Home";
import WaitlistSignup from "./pages/WaitlistSignup";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import ReferralMarketing from "./pages/ReferralMarketing";
import Prelaunch from "./pages/PreLaunch";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsletterGrowth from "./pages/NewsletterGrowth";
import CaseStudies from "./pages/CaseStudies";
import NewsUpdates from "./pages/News&Studies";
function App() {
  return (
    <Container sx={{ maxWidth: { xs: "100%", md: "1200px" } }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/waitlist" element={<WaitlistSignup />}></Route>
          <Route
            path="/referral-marketing"
            element={<ReferralMarketing />}
          ></Route>
          <Route path="/prelaunch" element={<Prelaunch />}></Route>
          <Route
            path="/newsletter-growth"
            element={<NewsletterGrowth />}
          ></Route>
          <Route path="/case-studies" element={<CaseStudies />}></Route>
          <Route path="/news-updates" element={<NewsUpdates />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Container>
  );
}

export default App;
