export default function ExpertiseSection() {
  return (
    <section className="text-[#0d1117] bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
            Expertise
          </span>{" "}
          in Creative Solutions
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          We specialize in turning ideas into captivating visuals through video
          editing and graphic design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border cursor-pointer border-gray-200 rounded-2xl p-6 text-left hover:bg-gray-50 hover:border-gray-300 transition duration-300">
            <div className="flex justify-start items-center gap-4 mb-4">
              <div>
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-blue-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 9V5.25m0 0L19.5 9m-3.75-3.75L12 9M4.5 15l3.75 3.75m0 0V14.25m0 4.5L12 15"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-[#0d1117]">Video Editing</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our dedicated video editing team works diligently to produce high-quality content,
              ensuring client satisfaction with every project. From jump cuts to cinematic grading —
              we bring stories to life with smooth transitions, pro-level sound, and engaging visuals.
            </p>
          </div>

          <div className="border cursor-pointer border-gray-200 rounded-2xl p-6 text-left hover:bg-gray-50 hover:border-gray-300 transition duration-300">
            <div className="flex justify-start items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-pink-500/10 border border-pink-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-pink-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 6.75L12 3l7.5 3.75m-15 0l7.5 3.75m-7.5-3.75v7.5L12 21l7.5-6.75v-7.5m-15 0l7.5 3.75m7.5-3.75l-7.5 3.75"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#0d1117]">Graphic Designing</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our graphic design team is committed to delivering creative and impactful designs
              tailored to your brand's needs. Stand out with scroll-stopping designs. We craft
              visuals that resonate, inspire, and elevate your brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
