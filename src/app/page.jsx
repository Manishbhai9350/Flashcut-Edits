"use client";
import Pricing from "./_components/Pricing";
import Expertise from "./_components/Expertise";
import FAQSection from "./_components/FAQ";
import { ReactLenis } from "lenis/dist/lenis-react";
import Footer from "./_components/Footer";
import Contact from "./_components/Contact";
import ICON3D from "./_components/3d/3D_Icon";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {

  const [IsClient, setIsClient ] = useState(false)
  const [Country, setCountry] = useState('')
  const [IsFetching, setIsFetching] = useState(false)
  const [Prices, setPrices] = useState({
    india:{
      starter:250,
      pro:600,
      premium:1500,
    },
    other:{
      starter:700,
      pro:800,
      premium:2000
    }
  })

  const [Price, setPrice] = useState(Prices['other'])


  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if(!IsClient) return;

    const userLanguage = navigator.language || navigator.userLanguage;
    const countryCode = userLanguage.split('-')[1]?.toUpperCase();

    console.log(navigator.geolocation.getCurrentPosition(
      e => {
        const {latitude,longitude} = e.coords
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        fetch(url).then(data => data.json()).then(cords => {
            console.log(cords?.address?.country.toLocaleLowerCase() || 'india')
            setCountry(cords?.address?.country.toLocaleLowerCase() || 'india')
        }).catch(e => {
          console.error(e)
          setCountry('other')
        })
      },
      e => setCountry('other')
    ))
  }, [IsClient])

  useEffect(() => {
    if(Country == 'india') {
      setPrice(Prices['india'])
    } else {
      setPrice(Prices['other'])
    }
    return () => {
      
    }
  }, [Country])
  
  

  if(!IsClient) return <></>
  

  return (
    <ReactLenis root>
      <main className="relative font-sans overflow-x-hidden">
        {/* Hero */}
        <section className="relative flex justify-start items-start flex-col lg:flex-row h-[110vh] w-screen z-20 bg-white text-[#0d1117] pt-20 px-6 md:px-20">
          <div className="3d w-full h-full absolute right-0 top-0">
            <ICON3D />
          </div>
          <div className="w-full h-1/2 lg:w-1/2 lg:h-full">
            <div className="relative z-30 w-full h-full">
              <h1 className="text-3xl pop  sm:text-5xl lg:text-6xl font-semibold mb-4">

                <span className="text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
                  Elevate
                </span> Your Brand with{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text">
                  Professional Video Editing
                </span>{" "}
                and{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
                  Graphic Design
                </span>
              </h1>
              <p className="text-sm md:text-xl mb-6 opacity-80 pop">
                Professional Video Editing and Graphic Design services to
                elevate your brand and captivate your audience with stunning
                visual content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://calendly.com/jaitanishq222/video-editing-consultation" target='_blank' className="px-8 py-3 text-white rounded-lg hover:border-blue-500 hover:bg-gray-50 transition-all duration-300 cursor-pointer font-medium bg-gradient-to-r from-blue-500 to-pink-500 text-xl hover:opacity-80">
                  Get Started
                </Link>
                <Link href='/services' className="px-8 py-3 text-white rounded-lg hover:border-blue-500 hover:bg-gray-50 transition-all duration-300 cursor-pointer font-medium bg-gradient-to-r from-blue-500 to-pink-500 text-xl hover:opacity-80">
                  View Portfolio
                </Link>
              </div>
            </div>
            {/* <img src="/hero-image.png" alt="Studio Setup" className="rounded-xl shadow-md" /> */}
            <div className="uncorn-3d-element w-full h-full z-20 absolute top-1/2 left-1/4 -translate-y-1/2">
              {/* <UnicornEmbed /> */}
            </div>
          </div>
          <div className="placer-mirror w-full h-1/2 lg:h-full lg:w-1/2">

          </div>
        </section>

        {/* About */}
        <section className="text-[#0d1117] w-full bg-white pb-16 px-6 md:px-20 text-center md:text-left">
          <div className="mx-auto">
            <h2 className="text-sm font-semibold mb-2 opacity-70 pop">OUR STORY</h2>
            <h3 className="text-3xl md:text-6xl mb-6 pop font-medium">
              About Flashcut Edits
            </h3>
            <div className="mb-12 pop">
              <p className="text-lg mb-4 opacity-80 leading-relaxed">
                Our mission is to provide premium video editing solutions that
                resonate with your audience, ensuring every frame captures the
                essence of your story while maintaining a sleek, modern
                aesthetic.
              </p>
              <p className="text-base opacity-70 leading-relaxed">
                Founded with a passion for visual storytelling, we've grown from
                a small creative team to a full-service digital content agency.
                Our journey has been driven by one core belief: exceptional
                content has the power to transform brands and connect with
                audiences on a deeper level.
              </p>
            </div>
            <div className="grid grid-cols-2 place-items-center sm:place-items-start md:grid-cols-4 gap-6 text-sm font-semibold">
              <div className="bg-gray-100 text-[#0d1117] p-6 shadow-sm w-[160px] md:w-[200px] aspect-square flex justify-center items-center rounded-full text-center hover:bg-gray-200 transition-colors duration-300">
                <div>
                  <div className="text-xl sm:text-3xl font-bold mb-1 pop">5+</div>
                  <div className="text-[.6rem] sm:text-md leading-tight pop font-medium">
                    Over 5 Years of Experience Crafting Engaging Visual Content
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 text-[#0d1117] p-6 shadow-sm w-[160px] md:w-[200px] aspect-square flex justify-center items-center rounded-full text-center hover:bg-gray-200 transition-colors duration-300">
                <div>
                  <div className="text-xl sm:text-3xl font-bold mb-1 pop">100+</div>
                  <div className="text-[.6rem] sm:text-md leading-tight pop font-medium">
                    Trusted by 100+ Clients Worldwide
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 text-[#0d1117] p-6 shadow-sm w-[160px] md:w-[200px] aspect-square flex justify-center items-center rounded-full text-center hover:bg-gray-200 transition-colors duration-300">
                <div>
                  <div className="text-xl sm:text-3xl font-bold mb-1 pop">50M+</div>
                  <div className="text-[.6rem] sm:text-md leading-tight pop font-medium">
                    Over 50 Million Views Generated
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 text-[#0d1117] p-6 shadow-sm w-[160px] md:w-[200px] aspect-square flex justify-center items-center rounded-full text-center hover:bg-gray-200 transition-colors duration-300">
                <div>
                  <div className="text-xl sm:text-3xl font-bold mb-1 pop">30+</div>
                  <div className="text-[.6rem] sm:text-md leading-tight pop font-medium">
                    A Dedicated Team of 30+ Creative Professionals
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <Expertise />

        {/* Pricing */}
        <Pricing Price={Price} />

        {/* Testimonials  */}
        <section className="bg-white text-gray-800 py-16 px-6 md:px-20">
          <div className="mx-auto text-center">
            <h3 className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-2">
              Client Testimonials
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text">
                Clients
              </span>{" "}
              Say
            </h2>
            <p className="text-gray-500 mx-auto mb-14">
              Don’t just take our word for it. Here's what creators and
              businesses say about working with us.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial Card 1 */}
              <div className="group bg-white border border-gray-200 shadow-lg rounded-2xl p-6 text-left transition duration-300 hover:bg-[#0d1117] hover:border-[#0d1117]">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="girl1.jpg"
                    className="w-12 h-12 rounded-full border object-cover"
                    alt="client"
                  />
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-white transition">
                      Sarah M.
                    </p>
                    <p className="text-sm text-gray-500 group-hover:text-white/70 transition">
                      YouTube Coach, California
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 group-hover:text-white/80 transition">
                  "I hired Flashcut Edits for my YouTube Shorts and within 2
                  weeks, I saw a massive jump in engagement! They understand how
                  to make content pop. Definitely recommend them for creators
                  who want professional edits without the hassle."
                </p>
                <div className="text-yellow-400 text-lg group-hover:text-yellow-500 transition">
                  ★★★★★
                </div>
              </div>

              {/* Testimonial Card 2 */}
              <div className="group bg-white border border-gray-200 shadow-lg rounded-2xl p-6 text-left transition duration-300 hover:bg-[#0d1117] hover:border-[#0d1117]">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="boy1.jpeg"
                    className="w-12 h-12 rounded-full border object-cover"
                    alt="client"
                  />
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-white transition">
                      Jason B.
                    </p>
                    <p className="text-sm text-gray-500 group-hover:text-white/70 transition">
                      Startup Founder, New York
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 group-hover:text-white/80 transition">
                  "Our promotional videos and IG reels were handled by Flashcut
                  Edits and they nailed it! The storytelling, transitions, and
                  graphics were top-tier. It saved my team tons of time and
                  looked super clean."
                </p>
                <div className="text-yellow-400 text-lg group-hover:text-yellow-500 transition">
                  ★★★★☆
                </div>
              </div>

              {/* Testimonial Card 3 */}
              <div className="group bg-white border border-gray-200 shadow-lg rounded-2xl p-6 text-left transition duration-300 hover:bg-[#0d1117] hover:border-[#0d1117]">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="girl2.jpg"
                    className="w-12 h-12 rounded-full border object-cover"
                    alt="client"
                  />
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-white transition">
                      Ananya R.
                    </p>
                    <p className="text-sm text-gray-500 group-hover:text-white/70 transition">
                      Content Creator, Mumbai
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 group-hover:text-white/80 transition">
                  "Flashcut Edits has been a game-changer for me. From reels to
                  long-form content, everything feels more polished and
                  professional. Plus, they always deliver before the deadline!"
                </p>
                <div className="text-yellow-400 text-lg group-hover:text-yellow-500 transition">
                  ★★★★★
                </div>
              </div>

              {/* Testimonial Card 4 */}
              <div className="group bg-white border border-gray-200 shadow-lg rounded-2xl p-6 text-left transition duration-300 hover:bg-[#0d1117] hover:border-[#0d1117]">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="boy3.jpg"
                    className="w-12 h-12 rounded-full border object-cover"
                    alt="client"
                  />
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-white transition">
                      Rohit S.
                    </p>
                    <p className="text-sm text-gray-500 group-hover:text-white/70 transition">
                      Tech YouTuber, Delhi
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 group-hover:text-white/80 transition">
                  "Many agencies tried, but Flashcut Edits truly took my video
                  quality to the next level. Their motion graphics and
                  thumbnails are complete game-changers!"
                </p>
                <div className="text-yellow-400 text-lg group-hover:text-yellow-500 transition">
                  ★★★★☆
                </div>
              </div>

              {/* Testimonial Card 5 */}
              <div className="group bg-white border border-gray-200 shadow-lg rounded-2xl p-6 text-left transition duration-300 hover:bg-[#0d1117] hover:border-[#0d1117]">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="girl1.jpg"
                    className="w-12 h-12 rounded-full border object-cover"
                    alt="client"
                  />
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-white transition">
                      Nikita B.
                    </p>
                    <p className="text-sm text-gray-500 group-hover:text-white/70 transition">
                      Artist, Pune
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 group-hover:text-white/80 transition">
                  "Flashcut Edits did an amazing job editing my promo video. The
                  transitions and effects looked professional, and they totally
                  captured the vibe I was going for. Super fast turnaround too.
                  Highly recommend!"
                </p>
                <div className="text-yellow-400 text-lg group-hover:text-yellow-500 transition">
                  ★★★★★
                </div>
              </div>

              {/* Testimonial Card 6 */}
              <div className="group bg-white border border-gray-200 shadow-lg rounded-2xl p-6 text-left transition duration-300 hover:bg-[#0d1117] hover:border-[#0d1117]">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="boy3.jpg"
                    className="w-12 h-12 rounded-full border object-cover"
                    alt="client"
                  />
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-white transition">
                      Virat K.
                    </p>
                    <p className="text-sm text-gray-500 group-hover:text-white/70 transition">
                      Social Media Manager, Haryana
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 group-hover:text-white/80 transition">
                  "Flashcut Edits nailed our social media graphics! Clean
                  design, great use of color, and matched our brand perfectly.
                  Quick revisions and smooth communication made the process
                  easy."
                </p>
                <div className="text-yellow-400 text-lg group-hover:text-yellow-500 transition">
                  ★★★★☆
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />

        {/* FAQ Section  */}
        <FAQSection />

        {/* Footer */}
        <Footer />
      </main>
    </ReactLenis>
  );
}
