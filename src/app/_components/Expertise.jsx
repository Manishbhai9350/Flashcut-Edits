import Image from "next/image";

export default function ExpertiseSection() {
  return (
    <section className="text-[#0d1117] bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-500 mb-4 text-lg">
          Discover how Flashcut Edits transforms your vision into reality with our specialized services.
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
            <div className="h-96 bg-gradient-to-br from-gray-800 to-gray-900 relative">
              <Image className='object-cover object-center' fill src='/video-editing.jpg' alt='Image' />
            </div>

            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <h3 className="text-2xl font-bold mb-3">Video Editing</h3>
              <p className="text-sm leading-relaxed">
                Our video editing team works 12 hours a day to create great things while also managing the client and also providing client a satisfaction on their face.
              </p>
            </div>
          </div>

          {/* Graphic Designing Card */}
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Background Image */}
            <div className="h-96 bg-gradient-to-br from-gray-800 to-gray-900 relative">
              <Image className='object-cover object-center' fill src='/graphic-design.jpg' alt='Image' />
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
