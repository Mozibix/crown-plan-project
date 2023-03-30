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

            <div className="container_main flex lg:grid grid-cols-3 flex-wrap gap-20 lg:gap-y-28 justify-center  align-middle service_flexbox">
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

                  <div className="service_quotes max-w-xs px-2 lg:px-1">
                    {serviceInfo.quotes}
                  </div>
                </div>
              ))}
            </div>

            <div className="wedding_planning_btns flex justify-center gap-4 place-items-center my-16 font-medium container_main">
              <div className="border-2 border-red-500 text-center text-red-500 hover:text-white hover:bg-red-500 w-80 px-6 py-4">
                BOOK SERVICE
              </div>
              <div className="border-2 border-red-500 text-center text-red-500 hover:text-white hover:bg-red-500 w-80 px-6 py-4">
                CONTACT US
              </div>
            </div>
          </div>
        </div>

        {/* REAL WEDDINGS SECTION */}

        <div className="real_weeding_sec">
          <div className="real_weeding_sec_inner py-20">
            <h3 className="text-center special_font text text-3xl lg:text-5xl font-medium italic mt-8 lg:mt-16">
              Real Weddings{" "}
            </h3>
            <h6 className="text-center my-5 light_text font-normal">
              OUR AMAZING WORK
            </h6>

            <div className="container_main flex  gap-x-9 flex-wrap place-items-center  gap-8 justify-center  align-middle wedding_flexbox">
              {weddingsData.map((weddingsInfo, key) => (
                <div
                  key={key}
                  className="wedding_card text-center w-96 h-full grid place-items-center shadow-md"
                >
                  <div className="card_image">
                    <Image
                      src={weddingsInfo.cardImage}
                      width={500}
                      height={500}
                      alt="weddings"
                      className="w-96"
                    />
                  </div>

                  <div className="card_texts w-full py-10">
                    <h6 className="name special_font italic font-semibold text-2xl">
                      {weddingsInfo.name}
                    </h6>
                    <p className="location text-base mt-4 font-normal leading-6">
                      {weddingsInfo.location}
                    </p>
                    <p className="date text-base font-normal">
                      {weddingsInfo.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="view_wedding_btn flex justify-center gap-4 place-items-center my-16 font-normal hover:font-medium container_main">
              <div className="border-2 border-red-500 text-center text-white bg-red-500 w-80 px-6 py-4">
                VIEW WEDDINGS{" "}
              </div>
            </div>
          </div>
        </div>

        {/* VENDORS SECTION */}
        <div className="vendors_sec">
          <div className="vendors_sec_inner pb-20 lg:flex">
            <div className="vendors_left lg:w-5/6 light_bg container_main grid justify-center items-center lg:items-start lg:place-items-start place-items-center">
              <h3 className="text-left py-4 lg:pb-12 special_font text text-3xl lg:text-5xl font-medium italic mt-8 lg:mt-16">
                Wedding Vendors{" "}
              </h3>

              <p className="text_quotes font-light text-center lg:text-left text-xl max-w-md">
                Millions of engaged couples turn to CrownPlan as their trusted
                wedding resource, with the largest directory of local wedding
                vendors.
              </p>

              <ul className="grid font-medium text-center lg:text-left text-sm lg:text-base grid-cols-2 gap-x-2 lg:gap-5 gap-y-5 max-w-lg mt-5 lg:mt-8">
                <li>BEAUTY & HEALTH</li>
                <li>CATERING</li>
                <li>VIDEOGRAPHY</li>
                <li>PHOTOGRAPHY</li>
              </ul>

              <div className="vendors_left_btn  flex justify-start gap-4 place-items-start mt-7 pb-4 lg:pb-20 font-normal hover:font-medium">
                <div className="border-2 border-red-500 text-center text-white bg-red-500 w-80 px-6 py-4">
                  VIEW ALL VENDORS{" "}
                </div>
              </div>
            </div>

            <div className="vendors_right hidden border-2 w-full h-max lg:block">
              <Image
                src="/images/vendors-img.png"
                width={500}
                height={500}
                alt="vendors-bg"
                className="w-full vendor_img"
              />
            </div>
          </div>
        </div>

        {/* REVIEWS SECTION */}

        <section className="reviews_sec pb-10 md:pb-16 lg:pt-10">
          <div className="reviews_sec_inner container_main flex gap-3 flex-wrap justify-center lg:justify-evenly place-items-center text-center lg:text-left">
            <div className="reviews_left grid justify-center">
              <Image
                src="/images/reviews-img.png"
                width={500}
                height={500}
                alt="reviews"
                className="w-full lg:w-96"
              />
            </div>

            <div className="reviews_right">
              <div className="reviews_header">
                <h6 className="my-8 light_text font-normal">
                  OVER 3 MILLION REVIEWS{" "}
                </h6>

                <div className="reviews_quotes font-medium lg:max-w-md lg:leading-10 max-w-prose">
                  <p>
                    &quot;Such a great community to be part of. The commitment
                    and services you all provide to the community is just
                    outstanding. &quot;
                  </p>
                </div>

                <div className="reviews_right_bottom_text flex items-center place-items-center lg:justify-start justify-center mt-4 gap-3 font-semibold italic text-xs lg:text-lg ">
                  <div className="border border-black w-4"></div>
                  <span className="reviewer_name">Jimoh Lawal</span>
                  <span className="reviewer_data light_text special_font italic">
                    Wedding 6/8/19
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WEDDING GALLERY SECTION */}

        <section className="wedding_gala_sec">
          <div className="wedding_gala_sec_inner grid justify-center text-center">
            <div className="flex flex-col gap-4 justify-center place-items-center ">
              <h3 className="wedding_gala_header text-sm lg:text-base">
                WEDDING DRESS GALLERY
              </h3>
              <p className="wedding_gala_middle text-2xl lg:leading-loose lg:text-7xl">
                Ready to walk down the aisle?
              </p>

              <p className="wedding_gala_bottom text-xs  lg:text-sm ">
                DISCOVER THE LATEST TRENDS IN DRESSES
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact">
          <div className="contact_inner light_bg container_main text-center">
            <h3 className="contact_header pt-10 sm:mb-4 sm:pt-28 special_font italic font-medium sm:leading-loose text-3xl tracking-wider lg:text-5xl">
              Contact Us
            </h3>
            <p className="contact_middle_text light_text text-sm sm:text-base tracking-wider">
              REACH OUT TO US
            </p>

            <div className="contact_form_card sm:mt-8 py-4 sm:py-20 sm:bg-white w-full sm:shadow-lg  sm:flex flex-col items-center">
              <form>
                <div className="max-w-lg sm:w-96">
                  <div className="grid grid-cols-1 gap-2">
                    <label className="block">
                      <input
                        type="email"
                        className="outline-none mt-1 block w-full rounded-md container_form"
                        placeholder="Your Name"
                      />
                    </label>

                    <label className="block">
                      <input
                        type="email"
                        className="outline-none mt-1 block w-full rounded-md container_form"
                        placeholder="Your Email"
                      />
                    </label>

                    <label className="block">
                      <input
                        type="email"
                        className="outline-none mt-1 block w-full rounded-md container_form"
                        placeholder="Subject"
                      />
                    </label>

                    <label className="block">
                      <textarea
                        placeholder="Message"
                        className="container_form outline-none mt-1 block w-full rounded-md h-40"
                        rows={Number("3")}
                      ></textarea>
                    </label>

                    <button className="flex justify-center sm:justify-start sm:w-64 gap-4 sm:place-items-start mt-3 font-normal hover:font-medium">
                      <div className="border-2 border-red-500 text-center text-white bg-red-500 w-80 sm:px-6 py-3">
                        SEND MESSAGE
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

/* SECTIONS DATA */

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

const weddingsData = [
  {
    id: 1,
    cardImage: "/images/wedding-pic1.png",
    name: "Nicole & Michael",
    location: "South Enugu, Nigeria",
    date: "07/07/2020",
  },
  {
    id: 2,
    cardImage: "/images/wedding-pic1.png",
    name: "Nicole & Michael",
    location: "South Enugu, Nigeria",
    date: "07/07/2020",
  },
  {
    id: 3,
    cardImage: "/images/wedding-pic1.png",
    name: "Nicole & Michael",
    location: "South Enugu, Nigeria",
    date: "07/07/2020",
  },
];
