import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [open, SetOpen] = useState(false);

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
            src={`${open ? "/svgs/burger_close.svg" : "/svgs/burger.svg"}`}
            width={20}
            height={20}
            alt="harmurger"
            onClick={() => SetOpen(!open)}
          />
        </div>
      </div>

      {/* MOBILE-NAV */}

      <div className={`mobile_links ${open ? "open" : " "}`}>
        <ul>
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
