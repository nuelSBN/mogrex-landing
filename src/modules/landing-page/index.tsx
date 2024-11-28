import { Link } from "react-router-dom";

import dummyUser from "../../assets/img/team-1-800x800.jpg";
import dummyUser2 from "../../assets/img/team-2-800x800.jpg";
import dummyUser3 from "../../assets/img/team-3-800x800.jpg";
import dummyUser4 from "../../assets/img/team-3-800x800.jpg";
import Navbar from "../../components/nav";
import LandingHero from "../../components/landing-page/hero";
import Footer from "../../components/landing-page/Footers";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <LandingHero />
      <Footer />
    </>
  );
}
