import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <nav>
      <div className="nav_inner flex">
        <div className="logo special_font">
          Cro{" "}
          <span>
            <Image
              src="/svgs/logo-icon.svg"
              height={25}
              width={25}
              alt="logo"
            />
          </span>{" "}
          nPlan
        </div>

        <div className="links_sec">
          <ul className="links">
            <li>Home</li>
            <li>Portfolio</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
