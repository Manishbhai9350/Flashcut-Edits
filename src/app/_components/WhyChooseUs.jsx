'use client'

export default function WhyChooseUs() {
  return (
    <section className="text-[#0d1117] bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block mb-6">
            <div className="border-2 border-[#0d1117] rounded-2xl px-6 py-3 transform -rotate-1">
              <h3 className="text-lg font-bold text-[#0d1117]">
                Why Choose Us
              </h3>
            </div>
          </div>

          <div className="mb-8">
            <div className="border-2 border-[#0d1117] rounded-3xl px-8 py-6 bg-gray-50">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1117]">
                The Perfect Choice for Your Creative Needs
              </h2>
            </div>
          </div>

          <div className="mb-12">
            <div className="border-2 border-[#0d1117] rounded-2xl px-6 py-4 bg-gray-50">
              <p className="text-gray-600 text-lg leading-relaxed">
                We combine years of experience with cutting-edge technology to deliver exceptional results that exceed expectations and drive real business growth.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="space-y-6">
          {/* Feature 1 */}
          <div className="group">
            <div className="flex items-start gap-6 p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-[#0d1117]">
                  Lightning-Fast Turnaround
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Get your professionally edited videos in record time without compromising on quality. Our streamlined workflow ensures rapid delivery while maintaining the highest standards that exceed industry expectations.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group">
            <div className="flex items-start gap-6 p-8 rounded-2xl border border-gray-200 hover:border-pink-300 hover:shadow-lg transition-all duration-300 bg-white">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center group-hover:bg-pink-500/20 transition-colors duration-300">
                <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-[#0d1117]">
                  Industry-Leading Quality
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our team of expert editors uses professional-grade tools and techniques to create stunning visuals that captivate audiences and drive engagement across all platforms. Every project receives meticulous attention to detail.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group">
            <div className="flex items-start gap-6 p-8 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 bg-white">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-[#0d1117]">
                  Dedicated Support Team
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Enjoy personalized service with unlimited revisions and direct communication with your dedicated editor. We're committed to bringing your vision to life perfectly and ensuring complete satisfaction with every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
