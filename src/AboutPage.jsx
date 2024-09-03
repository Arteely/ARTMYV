import { useEffect, useState } from "react";

function AboutMe() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 5 &&
          rect.bottom >= window.innerHeight / 5
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };
  return (
    <div
      className="mx-auto min-h-screen max-w-screen-2xl px-6 my-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 "
      id="about"
    >
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-8 lg:pr-16 ">
          <div className="bg-white flex flex-col justify-between rounded-3xl py-16 px-8 inset-0 h-full w-full bg-[linear-gradient(to_right,#1A1A1A12_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A12_1px,transparent_1px)] bg-[size:36px_36px]">
            <div>
              <h1 className="text-4xl font-header uppercase tracking-normal text-black sm:text-5xl">
                Artem <strong>Artemyev</strong>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-wide text-orange sm:text-xl">
                Graphic Designer - Front End Developer
              </h2>
              <p className="mt-4 max-w-xs tracking-wide leading-normal text-black font-light">
                I like working on unique projects (or motorcycles) and build
                cool stuff.
              </p>
            </div>
            <nav class="nav hidden lg:block" aria-label="In-page jump links">
              <ul class="mt-16 w-max">
                <li>
                  <a
                    className={`group flex items-center py-3 ${
                      activeSection === "about" ? "active" : ""
                    }`}
                    href="#about"
                    onClick={(e) => handleClick(e, "about")}
                  >
                    <span class="nav-indicator mr-4 h-px w-8 bg-black transition-all group-hover:w-16 group-hover:bg-orange group-focus-visible:w-16 group-focus-visible:bg-orange motion-reduce:transition-none"></span>
                    <span class="nav-text text-xs font-bold uppercase tracking-widest text-black group-hover:text-orange group-focus-visible:text-orange">
                      About
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className={`group flex items-center py-3 ${
                      activeSection === "experience" ? "active" : ""
                    }`}
                    href="#experience"
                    onClick={(e) => handleClick(e, "experience")}
                  >
                    <span class="nav-indicator mr-4 h-px w-8 bg-black transition-all group-hover:w-16 group-hover:bg-orange group-focus-visible:w-16 group-focus-visible:bg-orange motion-reduce:transition-none"></span>
                    <span class="nav-text text-xs font-bold uppercase tracking-widest text-black group-hover:text-orange group-focus-visible:text-orange">
                      Experience
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="group flex items-center hidden py-3"
                    href="#projects"
                  >
                    <span class="nav-indicator mr-4 h-px w-8 bg-black transition-all group-hover:w-16 group-hover:bg-orange group-focus-visible:w-16 group-focus-visible:bg-orange motion-reduce:transition-none"></span>
                    <span class="nav-text text-xs font-bold uppercase tracking-widest text-black group-hover:text-orange group-focus-visible:text-orange">
                      Projects
                    </span>
                  </a>
                </li>
              </ul>
            </nav>

            <ul class="ml-1 mt-8 flex items-center" aria-label="Social media">
              <li class="mr-5 text-xs shrink-0">
                <a
                  class="block hover:text-orange"
                  href="https://github.com/Arteely"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub (opens in a new tab)"
                  title="GitHub"
                >
                  <span class="sr-only">GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="h-8 w-8"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </li>
              <li class="mr-5 text-xs shrink-0">
                <a
                  class="block hover:text-orange"
                  href="https://www.linkedin.com/in/artem-artemyev-9439b8129/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn (opens in a new tab)"
                  title="LinkedIn"
                >
                  <span class="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-8 w-8"
                    aria-hidden="true"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
              </li>
              <li class="mr-5 text-xs shrink-0">
                <a
                  class="block hover:text-orange"
                  href="https://www.instagram.com/artm.yv/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Instagram (opens in a new tab)"
                  title="Instagram"
                >
                  <span class="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 1000"
                    fill="currentColor"
                    class="h-8 w-8"
                    aria-hidden="true"
                  >
                    <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </header>
        <main className="pt-24 lg:w-1/2 lg:py-24 text-text leading-relaxed">
          <section
            id="about"
            aria-label="About Me"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <p className="mb-4">
              Hi there, I’m Artem Artemyev, a Digital Designer and a Front End
              Dev from Cheboksary, Russia. Currently working as a Front End
              Developer at ADAMO in Istanbul and as a freelance helping brands
              and businesses become unique.
            </p>
            <p className="mb-4">
              I am passionate about anything that has to do with Digital Design.
              I enjoy working with agencies and enthusiastic people who want to
              solve problems through beautiful design and experiences.
            </p>
            <p className="mb-4">
              Beyond my professional work, I’m constantly exploring the latest
              trends in design and front-end development, always seeking new
              ways to innovate and push the boundaries of what’s possible.
              Whether it’s refining the user experience of a website or creating
              a visually stunning digital interface, I thrive on the challenge
              of bringing ideas to life with creativity and precision.
            </p>
          </section>
          <section
            id="experience"
            aria-label="Work Experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <div>
              <ol class="group/list">
                <li class="mb-12">
                  <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:group-hover:shadow-inner shadow-orange lg:block lg:border-orange/0 lg:group-hover:border-orange/50 lg:group-hover:border lg:group-hover:bg-[#1E1E1E] lg:group-hover:drop-shadow-lg"></div>
                    <header
                      class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-text font-header sm:col-span-2"
                      aria-label="2024 to Present"
                    >
                      2021 — Present
                    </header>
                    <div class="z-10 sm:col-span-6">
                      <h3 class="font-medium font-header leading-snug text-white">
                        <div>
                          <a
                            class="inline-flex items-baseline font-medium leading-tight text-white hover:text-orange focus-visible:text-orange  group/link text-base"
                            href="https://www.adamoonline.com"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Frontend Developer, E-Commerce Operations Specialist at ADAMO (opens in a new tab)"
                          >
                            <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Frontend Developer ·{" "}
                              <span class="inline-block">
                                ADAMO
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </div>
                        <div>
                          <div
                            class="text-orange lg:group-hover:text-white"
                            aria-hidden="true"
                          >
                            E-Commerce Operations Specialist
                          </div>
                        </div>
                      </h3>
                      <p class="mt-2 text-sm leading-normal">
                        Led the development and continuous improvement of the
                        company’s e-commerce website, ensuring it met the
                        evolving needs of the company. I was responsible for
                        managing site performance and ensuring the accuracy and
                        efficiency of order processing and fulfillment, which
                        maintained a high level of customer satisfaction. I also
                        designed and executed marketing automation workflows,
                        including weekly email campaigns and customer win-back
                        strategies, which significantly contributed to sustained
                        customer engagement and sales growth. Adittionaly I
                        collaborated closely with external marketing agencies to
                        refine digital marketing strategies.
                      </p>
                      <ul
                        class="mt-2 flex flex-wrap"
                        aria-label="Technologies used"
                      >
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-orange/25 px-3 py-1 text-xs font-medium leading-5 text-orange">
                            Liquid
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-orange/25 px-3 py-1 text-xs font-medium leading-5 text-orange">
                            Shopify
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-orange/25 px-3 py-1 text-xs font-medium leading-5 text-orange">
                            HTML, CSS & JS
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-orange/25 px-3 py-1 text-xs font-medium leading-5 text-orange">
                            Klaviyo
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="mb-12">
                  <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:border-orange/0 lg:group-hover:border-orange/50 lg:group-hover:border lg:group-hover:bg-[#1E1E1E] lg:group-hover:drop-shadow-lg"></div>
                    <header
                      class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-text font-header sm:col-span-2"
                      aria-label="2018 to 2024"
                    >
                      2020 — 2021
                    </header>
                    <div class="z-10 sm:col-span-6">
                      <h3 class="font-medium font-header leading-snug text-white">
                        <div>
                          <a
                            class="inline-flex items-baseline font-medium leading-tight text-white hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                            href="https://www.fiverr.com/artemeister/design-a-stream-overlay-package-for-you"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Digital Marketing Specialist at Park Inn (opens in a new tab)"
                          >
                            <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Freelance Graphic Designer ·{" "}
                              <span class="inline-block">
                                Fiverr
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </div>
                      </h3>
                      <p class="mt-2 text-sm leading-normal">
                        I have created custom graphics and animated overlays for
                        streamers, including webcam kits, animated streaming
                        screens, and branding assets. My work is focused on
                        delivering visually appealing and cohesive designs that
                        enhance the streaming experience. I have worked on
                        multiple projects during my time as a freelance
                        designer, ensuring timely delivery while maintaining
                        high-quality standards, and have developed expertise in
                        digital design tools such as Adobe Photoshop,
                        Illustrator, and After Effects.
                      </p>
                      <ul
                        class="mt-2 flex flex-wrap"
                        aria-label="Technologies used"
                      >
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-orange/25 px-3 py-1 text-xs font-medium leading-5 text-orange">
                            Adobe Photoshop
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-orange/25 px-3 py-1 text-xs font-medium leading-5 text-orange">
                            Adobe Illustrator
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-orange/25 px-3 py-1 text-xs font-medium leading-5 text-orange">
                            Adobe After Effects
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="mb-12">
                  <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:border-orange/0 lg:group-hover:border-orange/50 lg:group-hover:border lg:group-hover:bg-[#1E1E1E] lg:group-hover:drop-shadow-lg"></div>
                    <header
                      class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-text font-header sm:col-span-2"
                      aria-label="2018 to 2024"
                    >
                      2017 — 2018
                    </header>
                    <div class="z-10 sm:col-span-6">
                      <h3 class="font-medium font-header leading-snug text-white">
                        <div>
                          <a
                            class="inline-flex items-baseline font-medium leading-tight text-white hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                            href="https://www.radissonhotels.com/tr-tr/oteller/park-inn-istanbul-ataturk-airport"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Digital Marketing Specialist at Park Inn (opens in a new tab)"
                          >
                            <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Park Inn by Radisson{" "}
                              <span class="inline-block">
                                Istanbul Atatürk Airport
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </div>
                        <div>
                          <div
                            class="text-orange lg:group-hover:text-white"
                            aria-hidden="true"
                          >
                            Digital Marketing Intern
                          </div>
                        </div>
                      </h3>
                      <p class="mt-2 text-sm leading-normal">
                        Managed the updating and oversight of social media and
                        all web-based platforms. Created and designed graphics
                        for upcoming events, social media updates, posters, and
                        mailings. Handled the entry and organization of customer
                        data for future sales or mailing campaigns.
                      </p>
                      <ul
                        class="mt-2 flex flex-wrap"
                        aria-label="Technologies used"
                      >
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-orange/25 px-3 py-1 text-xs font-medium leading-5 text-orange">
                            Adobe Photoshop
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-orange/25 px-3 py-1 text-xs font-medium leading-5 text-orange">
                            Adobe Illustrator
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-orange/25 px-3 py-1 text-xs font-medium leading-5 text-orange">
                            Klaviyo
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ol>
              <div class="mt-12">
                <a
                  class="inline-flex items-baseline font-header font-medium leading-tight text-white hover:text-orange focus-visible:text-orange group/link text-base"
                  href="/ArtemArtemyev_Resume.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="View Full Résumé (opens in a new tab)"
                >
                  <span class="inline-block">
                    View Full Résumé
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </section>
          <section className="flex flex-col lg:items-center items-start text-white">
            <p>Would you like to work together?</p>
            <h2 className="text-2xl font-bold">
              <span>[</span>
              <a
                className="font-bold font-logo text-orange transition-all lg:text-white"
                href="mailto:artem@artmyv.com"
              >
                ARTEM@ARTMYV.COM
              </a>
              <span>]</span>
            </h2>
          </section>
          <footer className="max-w-full flex justify-center py-8 text-sm text-text sm:pb-0 md:text-center transition-all">
            <p className=" max-w-md">
              Designed in{" "}
              <a
                href="https://www.figma.com/"
                class="font-medium text-white hover:text-orange focus-visible:text-orange"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Figma (opens in a new tab)"
              >
                Figma{" "}
              </a>
              and brought to life in{" "}
              <a
                href="https://code.visualstudio.com/"
                class="font-medium text-white hover:text-orange focus-visible:text-orange"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Visual Studio Code (opens in a new tab)"
              >
                Visual Studio Code{" "}
              </a>
              by yours truly. Built with {" "}
              <a
                href="https://vitejs.dev/"
                class="font-medium text-white hover:text-orange focus-visible:text-orange"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Vite (opens in a new tab)"
              >
                Vite,{" "}
              </a>
              <a
                href="https://react.dev/"
                class="font-medium text-white hover:text-orange focus-visible:text-orange"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="React.js (opens in a new tab)"
              >
                React{" "}
              </a>
              and{" "}
              <a
                href="https://tailwindcss.com/"
                class="font-medium text-white hover:text-orange focus-visible:text-orange"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Tailwind CSS (opens in a new tab)"
              >
                Tailwind CSS
              </a>
              , deployed using{" "}
              <a
                href="https://netlify.com/"
                class="font-medium text-white hover:text-orange focus-visible:text-orange"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Netlify (opens in a new tab)"
              >
                Netlify
              </a>
              .
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default AboutMe;
