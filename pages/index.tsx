import MainLayout from "@/src/layouts/MainLayout";
import Image from "next/image";
export default function Home() {
  return (
    <MainLayout>
      <div className="body">
        <div className="hero_section">
          <div className="hero_section_inner ">
            <div className="text_section">
              <div className="hero_left special_font">
                <h3>Wedding Planner</h3>
              </div>

              <div className="hero_right">
                <p>
                  The #1 ranked. Helped over 50,000 couples around the country
                  aand we look forward to supporting you along your wedding
                  planning journey.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ABOUT SECTION */}

        <div className="about_sec">
          <div className="about_sec_inner container_main">
            <div className="header_sec">
              <h3 className="header_text">ABOUT US</h3>
              <div className="line"></div>
            </div>

            <div className="about_info">
              <div className="about_left">
                <Image
                  src="/images/about-image.png"
                  width={500}
                  height={500}
                  className="about_image"
                  alt="about"
                />
              </div>

              <div className="about_right">
                <div className="about_right_inner">
                  <div className="about_right_header">
                    <h3 className="special_font">
                      Let&apos;s Plan Your Perfect Wedding
                    </h3>
                  </div>
                  <div className="about_right_quotes">
                    <p>Wr&apos;re here to serve you, step-by-step</p>
                    <p>
                      Many people create notes on a computer and print them or
                      send them through the internet. However, I believe the
                      most effective notes are handwritten. A handwritten note
                      is personal and rare. Due to this, it will be given more
                      attention.
                    </p>

                    <p>
                      A few weeks ago I was in Michigan for my dad&apos;s
                      funeral. While there I attended my mom&apos;s church on
                      Sunday and met her pastor for the second time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
