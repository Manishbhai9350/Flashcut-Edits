import Pricing from "./_components/Pricing";
import UnicornEmbed from "./_components/Unicorn_3D";
import Expertise from './_components/Expertise'
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-[#0d1117] w-full z-50 fixed top-0 left-0 flex justify-between items-center p-6 border-b">
        <div className="text-xl font-bold">Flashcut Edits</div>
        <ul className="hidden md:flex gap-8 text-sm">
          <li>
            <Link href="#" className="text-white/60 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="text-white/60 hover:text-white">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="text-white/60 hover:text-white">
              Services
            </Link>
          </li>
        </ul>
        <button variant="outline">Schedule Call</button>
      </nav>

      {/* Hero */}
      <section className="relative z-20 bg-[#0d1117] h-fit w-full items-start px-6 py-32">
        <div className="relative z-30 w-full sm:w-[60%]">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
            Elevate Your Brand with Professional Video Editing and Graphic
            Design
          </h1>
          <p className="text-sm md:text-xl mb-6 opacity-80">
            Professional Video Editing and Graphic Design services to elevate
            your brand.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-transparent text-white border border-white hover:text-black hover:bg-white duration-150 cursor-pointer">
              Get Started
            </button>
            <button className="px-6 py-2 bg-transparent text-white border border-white hover:text-black hover:bg-white duration-150 cursor-pointer">
              View Work
            </button>
          </div>
        </div>
        {/* <img src="/hero-image.png" alt="Studio Setup" className="rounded-xl shadow-md" /> */}
        <div className="uncorn-3d-element w-full h-full z-20 absolute top-1/2 left-1/4 -translate-y-1/2">
          {/* <UnicornEmbed /> */}
        </div>
      </section>

      {/* About */}
      <section className="bg-[#0d1117] text-white px-6 pb-4 text-center md:text-left">
        <h2 className="text-sm font-semibold mb-2 opacity-70">Our Story</h2>
        <h3 className="text-3xl font-bold mb-4">About Flashcut Edits</h3>
        <p className="max-w-3xl mb-8 opacity-70">
          Our mission is to provide premium video editing solutions that
          resonate with your audience, ensuring every frame captures the essence
          of your story while maintaining a sleek, modern aesthetic.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm font-semibold">
          <div className="bg-indigo-800 text-white p-4 shadow w-[160px] md:w-[200px] aspect-square flex justify-center items-center rounded-full text-center">
            More Than 5 Years Of Experience
          </div>
          <div className="bg-indigo-800 text-white p-4 shadow w-[160px] md:w-[200px] aspect-square flex justify-center items-center rounded-full text-center">
            100+ Clients Trust With Our Service
          </div>
          <div className="bg-indigo-800 text-white p-4 shadow w-[160px] md:w-[200px] aspect-square flex justify-center items-center rounded-full text-center">
            Generated 50 Million+ Views
          </div>
          <div className="bg-indigo-800 text-white p-4 shadow w-[160px] md:w-[200px] aspect-square flex justify-center items-center rounded-full text-center">
            30+ Team Members
          </div>
        </div>
      </section>

      {/* Expertise */}
      <Expertise />


      {/* Pricing */}
      <Pricing />
    </main>
  );
}
