import React from "react";
import Banner from "../components/Banner/Banner";
import Discount from "../components/Discount/Discount";
import Features from "../components/Features/Features";
import Services from "../components/Services/Services";
import Subscription from "../components/Subscription/Subscription";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <main>
      <Banner />
      <Services/>
      <Features/>
      <Discount/>
      <Testimonials/>
      <Subscription/>
    </main>
  );
};

export default Home;