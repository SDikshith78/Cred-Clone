import React from "react";
import HeroSection from "../components/HeroSection";
import Header from "../components/HeroSection/common/Button/Header";
import ProductShowcase from "../components/HeroSection/ProductShowcase";
import FeelSpecial from "../components/FeelSpecial";
import CredExperience from "../components/CredExperience";
import CredSecurity from "../components/CredSecurity";
import BrandLove from "../components/Brands";
import WindowPeak from "../components/WindowPeak";
import MobileScroll from "../components/MobileScroll";
import CredStory from "../components/Cred Story";
import AppRating from "../components/Apprating";
import Footer from "../common/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <BrandLove />
      <CredExperience />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeak />
      </div>
      <CredSecurity />
      <CredStory />
      <AppRating />
      <Footer />
    </>
  );
};

export default HomePage;
