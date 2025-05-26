// components/Services.tsx
export default function Services() {
  return (
    <section className="text-[#0d1117] bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-2">
            Why Choose Us
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text">
              Perfect Choice
            </span>{" "}
            for Your Creative Needs
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We combine years of experience with cutting-edge technology to
            deliver exceptional results that exceed expectations and drive real
            business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group">
            <div className="flex items-start gap-4 p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#0d1117]">
                  Lightning-Fast Turnaround
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Get your professionally edited videos in record time without
                  compromising on quality. Our streamlined workflow ensures
                  rapid delivery while maintaining the highest standards.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group">
            <div className="flex items-start gap-4 p-6 rounded-2xl border border-gray-200 hover:border-pink-300 hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center group-hover:bg-pink-500/20 transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#0d1117]">
                  Industry-Leading Quality
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Our team of expert editors uses professional-grade tools and
                  techniques to create stunning visuals that captivate audiences
                  and drive engagement across all platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group">
            <div className="flex items-start gap-4 p-6 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#0d1117]">
                  Dedicated Support Team
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Enjoy personalized service with unlimited revisions and direct
                  communication with your dedicated editor. We're committed to
                  bringing your vision to life perfectly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
