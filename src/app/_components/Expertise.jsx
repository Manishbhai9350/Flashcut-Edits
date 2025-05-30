export default function ExpertiseSection() {
  return (
    <section className="text-[#0d1117] bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-500 mb-4 text-lg">
          We specialize in editing short-form videos, such as social media clips, promotional content, and more.
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Our{" "}
          <span className="text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text">
            Expertise
          </span>{" "}
          In Creative Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Video Editing Card */}
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Background Image */}
            <div className="h-80 bg-gradient-to-br from-gray-800 to-gray-900 relative">
              {/* Simulated video editing interface background */}
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-4 left-4 right-4">
                <div className="bg-gray-700/80 rounded p-2 mb-2">
                  <div className="flex gap-1 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 bg-blue-400 rounded w-3/4"></div>
                    <div className="h-2 bg-green-400 rounded w-1/2"></div>
                    <div className="h-2 bg-purple-400 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-1">
                  <div className="h-12 bg-gray-600/60 rounded"></div>
                  <div className="h-12 bg-gray-600/60 rounded"></div>
                  <div className="h-12 bg-gray-600/60 rounded"></div>
                  <div className="h-12 bg-gray-600/60 rounded"></div>
                </div>
              </div>
            </div>

            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <h3 className="text-2xl font-bold mb-3">Video Editing</h3>
              <p className="text-sm leading-relaxed">
                We specialize in editing short-form videos, such as social media clips,
                promotional content, and YouTube Shorts. Our dedicated video editing team
                works tirelessly to deliver exceptional results that exceed client expectations.
              </p>
            </div>
          </div>

          {/* Graphic Designing Card */}
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Background Image */}
            <div className="h-80 bg-gradient-to-br from-gray-800 to-gray-900 relative">
              {/* Simulated graphic design interface background */}
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-4 left-4 right-4">
                <div className="bg-gray-700/80 rounded p-2 mb-2">
                  <div className="flex gap-1 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-blue-500 rounded"></div>
                    <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
                    <div className="w-8 h-8 bg-yellow-500 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-gradient-to-r from-blue-500/60 to-pink-500/60 rounded"></div>
                  <div className="flex gap-2">
                    <div className="h-8 bg-purple-500/60 rounded flex-1"></div>
                    <div className="h-8 bg-green-500/60 rounded flex-1"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
              <h3 className="text-2xl font-bold mb-3">Graphic Designing</h3>
              <p className="text-sm leading-relaxed">
                With our graphic designing team dedicated to deliver some good things to client. It could be a good match for you. We provide Graphic Designs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
