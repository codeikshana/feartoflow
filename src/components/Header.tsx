import imageRight from "../assets/images/robos.png";

const Header = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between md:px-[120px] px-5 md:h-[calc(100vh-80px)] relative md:pb-0 pb-16">
      
      {/* Left Content */}
      <div className="flex flex-col gap-6 md:ml-0 ml-0 md:mt-0 mt-8 text-center md:text-left">
        
        {/* Tagline */}
        <div className="flex items-center justify-center md:justify-start gap-2 border border-grayborder rounded-[24px] w-fit px-4 h-[55px] mx-auto md:mx-0">
          <span className="bg-primary w-[9px] h-[9px] rounded-full" />
          <span className="text-primary text-sm">
            The Dept. of CSE & CSBS, TMSL presents
          </span>
        </div>

        {/* Title */}
        <h1 className="text-light font-bold text-3xl sm:text-5xl md:text-[84px] max-w-[761px] leading-tight md:leading-[80px]">
          FEAR-TO-FLOW
        </h1>

        {/* Description */}
        <p className="text-gray1 text-base sm:text-lg max-w-[600px] mx-auto md:mx-0">
          An Event that goes beyond the ordinary, where you can showcase your
          coding skills and creativity to solve real-world problems.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4 z-99">
          <a href="https://lu.ma/jfh9tz8c">
            <button className="bg-primary text-black px-6 py-2 text-center cursor-pointer rounded-[40px] min-h-[50px] hover:opacity-90 transition">
              Register Now
            </button>
          </a>

          <a href="https://images.lumacdn.com/editor-attachments/l2/01e8e317-fad9-47e4-b620-5cf7d8e0a606.pdf">
            <button className="text-light border border-grayborder px-6 py-2 text-center cursor-pointer rounded-[40px] min-h-[50px] hover:bg-light hover:text-black transition">
              Event Guidelines
            </button>
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-8 md:mt-0 flex justify-center md:justify-end w-full md:w-auto">
        <img
          src={imageRight}
          alt="Event Illustration"
          className="max-w-full h-auto md:w-auto w-[80%] sm:w-[400px]"
        />
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-[-200px] -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-overlay/10 blur-3xl" />
    </div>
  );
};

export default Header;
