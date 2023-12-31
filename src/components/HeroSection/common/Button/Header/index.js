import React, { useState } from "react";
import "./header.css";
function Header() {
  const [showMobMenu, setShowMobMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobMenu(!showMobMenu);
  };
  return (
    <div>
      <div className="mobile-menu-wrapper">
        <div
          className={`mobile-menu only-mobile ${showMobMenu ? "overlay" : ""}`}
        >
          <div className="mobile-navbar">
            <div className="mobile-nav-item">credit score check</div>
            <div className="mobile-nav-item">CRED pay</div>
          </div>
        </div>
        <div className="flex max-width header">
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
            alt=""
            className="header-logo"
          />
          <div className="only-mobile mobile-menu-button-wrapper">
            <button
              className={`hamburger hamburger--spin ${
                showMobMenu ? "is-active" : ""
              }`}
              type="button"
              onClick={toggleMobileMenu}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
          <div className="non-mobile flex">
            <div className="header-nav-item">credit score check</div>
            <div className="header-nav-item">CRED pay</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
