export default function Pricing({Price}) {
  return (
    <section className="text-[#0d1117] bg-white py-16 px-6 md:px-20">
      <div className="mx-auto text-center">
      <h2 className="text-4xl font-bold text-center mb-4">
        Simple,{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Transparent
        </span>{" "}
        Pricing
      </h2>
      <p className="text-gray-400  mb-12 w-full text-center">
        Choose the package that fits your needs. Custom solutions available for
        larger projects.
      </p>

      <div className="grid text-white grid-cols-1 md:grid-cols-3 gap-8 w-full ">
        {/* Starter Plan */}
        <div className="text-[#161b22] hover:bg-[#161b22] hover:text-white relative rounded-2xl p-6 flex flex-col duration-150 border-2 border-indigo-500/30 hover:border-indigo-500 text-left">
          <h3 className="text-xl font-semibold mb-2">Starter</h3>
          <p className="text-gray-400 mb-4">Perfect for new Creators</p>
          <h4 className="text-3xl font-bold mb-6">
            ${Price.starter} <span className="text-base font-medium">/Month</span>
          </h4>
          <ul className="space-y-3 text-sm mb-6">
            <li>✓ 7 Short Form Videos</li>
            <li>✓ 7 Cover Images</li>
            <li>✓ Personal Manager</li>
            <li>✓ 24x7 Support</li>
            <li>✓ 2 Revisions</li>
            <li>✓ Good Editing</li>
            <li>✓ SFX & Typography</li>
            <li>✓ Basic Color Correction</li>
            <li>✓ Basic Animations</li>
          </ul>
          <a
            href="https://calendly.com/jaitanishq222/video-editing-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto cursor-pointer text-white bg-gray-700 hover:bg-indigo-600 rounded-lg py-2 text-center"
          >
            Get Started
          </a>
        </div>

        {/* Pro Plan */}
        <div className="text-[#161b22] hover:bg-[#161b22] hover:text-white relative rounded-2xl p-6 flex flex-col duration-150 border-2 border-indigo-500/30 hover:border-indigo-500 text-left">
          <div className="self-end absolute right-5 top-5  bg-indigo-500 text-xs px-2 py-1 rounded-md text-white font-semibold mb-2">
            POPULAR
          </div>
          <h3 className="text-xl font-semibold mb-2">Pro</h3>
          <p className="text-gray-400 mb-4">
            For growing Channels & Businesses
          </p>
          <h4 className="text-3xl font-bold mb-6">
            ${Price.pro} <span className="text-base font-medium">/Month</span>
          </h4>
          <ul className="space-y-3 text-sm mb-6">
              <li>✓ 15 Short Form Videos </li>
              <li>✓ 15 Cover Images </li>
              <li>✓ 2 Personal Managers </li>
              <li>✓ 24x7 Support</li>
              <li>✓ 5 Revisions</li>
              <li>✓ SFX & Typography + Background Music</li>
              <li>✓ Color Correction</li>
              <li>✓ Animations & Transitions</li>
              <li>✓ Basic Motion Graphics</li>
          </ul>
          <a
            href="https://calendly.com/jaitanishq222/video-editing-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto cursor-pointer text-white bg-gray-700 hover:bg-indigo-600 rounded-lg py-2 text-center"
          >
            Get Started
          </a>
        </div>

        {/* Premium Plan */}
        <div className="text-[#161b22] hover:bg-[#161b22] hover:text-white relative rounded-2xl p-6 flex flex-col duration-150 border-2 border-indigo-500/30 hover:border-indigo-500 text-left">
          <h3 className="text-xl font-semibold mb-2">Premium</h3>
          <p className="text-gray-400 mb-4">
            For established Brands & Agencies
          </p>
          <h4 className="text-3xl font-bold mb-6">
            ${Price.premium} <span className="text-base font-medium">/Month</span>
          </h4>
          <ul className="space-y-3 text-sm mb-6">
            <li>✓ 30 High-Quality Short Form Videos</li>
            <li>✓ 30 Cover Images</li>
            <li>✓ 3 Dedicated Personal Managers</li>
            <li>✓ 24x7 Priority Support</li>
            <li>✓ Unlimited Revisions</li>
            <li>✓ SFX & Typography + Background Music</li>
            <li>✓ Professional Color Correction</li>
            <li>✓ Smooth Animations & Transitions</li>
            <li>✓ High-Level Motion Graphics</li>
          </ul>
          <a
            href="https://calendly.com/jaitanishq222/video-editing-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto cursor-pointer text-white bg-gray-700 hover:bg-indigo-600 rounded-lg py-2 text-center"
          >
            Get Started
          </a>
        </div>
      </div>

        <p className="text-gray-800 text-sm mt-12">
          Need something custom? We offer bulk discounts and monthly retainers. <br/>
          <a href="https://calendly.com/jaitanishq222/video-editing-consultation"
                target="_blank" className="text-indigo-400 underline">
            Contact us for custom pricing →
          </a>
        </p>
      </div>
    </section>
  )
}
