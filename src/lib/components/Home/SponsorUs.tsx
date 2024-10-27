function SponsorUs({ id = "synchrnonize-sponsor-us" }: { id?: string }) {
  return (
    <div
      id={id}
      className="flex flex-col font-[AdieuRegular] w-full px-3 sm:px-20 bg-dark-400 gap-3 pt-2"
    >
      {/* Heading */}
      <div className="flex flex-col w-fit">
        <span className="uppercase whitespace-nowrap text-primary-400 text-base sm:text-xl md:text-3xl w-fit mb-1">
          Sponsor Us
        </span>
        <div className="w-[75%] h-[1px] self-end bg-primary-400"></div>
      </div>

      {/* Description */}
      <p className="text-white font-[AdieuLight] text-sm sm:text-base">
        Be a part of our college’s premier tech fest and inspire the next
        generation of innovators! As a sponsor, you’ll have the opportunity to
        showcase your brand to a vibrant community of tech enthusiasts, future
        leaders, and industry experts. Join us in fueling creativity and
        groundbreaking ideas. Learn more in our sponsorship brochure!
      </p>

      <button className="mt-5 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-primary-400 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur origin-left hover:decoration-2 hover:text-primary-400 relative bg-neutral-800 h-fit w-fit border border-white text-left p-3 text-gray-50 text-xs sm:text-sm rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
        <span className="relative z-50">Download Brochure</span>
      </button>
    </div>
  );
}

export default SponsorUs;
