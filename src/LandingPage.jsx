import AnimeGradient from "./components/AnimeGradient";

function LandingPage() {
  const handleClick = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <AnimeGradient />
      <div className="mx-auto min-h-screen max-w-screen-xl flex flex-col justify-center items-center px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <p className="font-sans font-bold text-orange mb-2">アルテミエフ</p>
        <h1 className="font-logo font-bold text-5xl">
          ARTMYV<span className="text-base text-orange">©</span>
        </h1>
        <p className="font-sans font-bold tracking-wider text-center">
          GRAPHIC DESIGNER | FRONT END DEVELOPER
        </p>
        <p className="mb-6 font-light">FROM ISTANBUL, TURKEY</p>
        <a href="#about" onClick={(e) => handleClick(e, "about")}>
          <button className="py-1 pl-4 duration-200 pr-2 gap-6 border-accent-500 bg-orange hover:text-black h-12 hover:bg-white text-white justify-between uppercase border-2 hover:border-white rounded-full inline-flex items-center ">
            SCROLL TO DISCOVER
            <div className="bg-black h-8 w-8 text-white inline-flex items-center justify-center rounded-full">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 origin-center rotate-90"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}

export default LandingPage;
