import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_inner container_main">
        <div className="footer_left_section flex_center">
          <Link href="/">
            <div className="footer_logo special_font">
              Cro
              <span>
                <Image
                  src="/svgs/logo-icon.svg"
                  height={100}
                  className="logo_img"
                  width={100}
                  alt="logo"
                />
              </span>{" "}
              n <span className="red_text">Plan</span>
            </div>
          </Link>

          <div className="privacy_terms">
            <p>© 2020 Privacy — Terms</p>
          </div>
        </div>

        <div className="footer_middle_section flex_center">
          <Image
            src="/svgs/facebook.svg"
            width={30}
            height={30}
            alt="socials"
          />
          <Image src="/svgs/twitter.svg" width={30} height={30} alt="socials" />
          <Image
            src="/svgs/instagram.svg"
            width={30}
            height={30}
            alt="socials"
          />
          <Image src="/svgs/wimeo.svg" width={30} height={30} alt="socials" />
        </div>

        <div className="footer_right_section">
          <ul className="flex_center">
            <Link href="#about">
              <li>About Us</li>
            </Link>{" "}
            <Link href="#wedding_plan">
              <li>Services</li>
            </Link>
            <Link href="#real_wedding">
              <li>Our Works</li>
            </Link>
            <Link href="#reviews">
              <li>Reviews</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
