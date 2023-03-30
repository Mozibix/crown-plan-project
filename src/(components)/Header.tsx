import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <nav>
      <div className="nav_inner  container_main">
        <div className="logo special_font">
          Cro
          <span>
            <Image
              src="/svgs/logo-icon.svg"
              height={45}
              className="logo_img"
              width={45}
              alt="logo"
            />
          </span>{" "}
          n <span className="red_text">Plan</span>
        </div>

        <div className="desktop_links">
          <ul className="links">
            <li>Home</li>
            <li>Portfolio</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="harmburger">
          <Image
            src="/svgs/burger.svg"
            width={20}
            height={20}
            alt="harmurger"
          />
        </div>
      </div>

      {/* MOBILE-NAV */}

      <div className="mobile_links">
        <ul className="links">
          <li>Home</li>
          <li>Portfolio</li>
          <li>Shop</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
