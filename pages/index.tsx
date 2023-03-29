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

        {/* WEDDING PLANNING SECTION */}

        <div className="wedding_planning_sec">
          <div className="wedding_planning_sec_inner my-10 lg:my-16">
            <div className="header_sec ml-5">
              <h3 className="header_text">WEDDING PLANNING</h3>
              <div className="line"></div>
            </div>

            <h3 className="text-center special_font text text-3xl lg:text-5xl font-medium italic my-8 lg:my-16">
              Services
            </h3>

            <div className="container_main flex lg:grid grid-cols-3 flex-wrap  gap-y-28 justify-center  align-middle service_flexbox">
              {serviceData.map((serviceInfo, key) => (
                <div
                  key={key}
                  className="service_box grid place-items-center text-center gap-2 justify-center align-middle"
                >
                  <div className="service_icon">
                    <Image
                      src={serviceInfo.icon}
                      width={70}
                      height={70}
                      alt="icon"
                    />
                  </div>

                  <div className="service_box_header special_font font-medium  italic text-2xl capitalize">
                    {serviceInfo.header}
                  </div>

                  <div className="service_quotes max-w-xs">
                    {serviceInfo.quotes}
                  </div>
                </div>
              ))}
            </div>

            <div className="wedding_planning_btns flex justify-center gap-4 place-items-center my-16 font-medium container_main">
              <div className="border-2 border-red-500 text-center text-red-500 hover:text-white hover:bg-red-500 w-80 px-6 py-2">
                BOOK SERVICE
              </div>
              <div className="border-2 border-red-500 text-center text-red-500 hover:text-white hover:bg-red-500 w-80 px-6 py-2">
                CONTACT US
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

const serviceData = [
  {
    id: 1,
    icon: "/svgs/checklist.svg",
    header: "checklist",
    quotes: "The ultimate wedding checklist to make sure everything gets done.",
  },
  {
    id: 2,
    icon: "/svgs/checklist.svg",
    header: "checklist",
    quotes: "The ultimate wedding checklist to make sure everything gets done.",
  },
  {
    id: 3,
    icon: "/svgs/checklist.svg",
    header: "checklist",
    quotes: "The ultimate wedding checklist to make sure everything gets done.",
  },
  {
    id: 4,
    icon: "/svgs/checklist.svg",
    header: "checklist",
    quotes: "The ultimate wedding checklist to make sure everything gets done.",
  },
  {
    id: 5,
    icon: "/svgs/checklist.svg",
    header: "checklist",
    quotes: "The ultimate wedding checklist to make sure everything gets done.",
  },
  {
    id: 6,
    icon: "/svgs/checklist.svg",
    header: "checklist",
    quotes: "The ultimate wedding checklist to make sure everything gets done.",
  },
];
