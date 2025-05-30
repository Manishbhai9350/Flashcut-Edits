// components/Footer.tsx
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Flashcut Edits</h2>
          <p className="text-sm text-gray-400">
            We combine technical skills with creativity to improve clients'
            online presence. These agencies typically provide a diverse set of
            services.
          </p>
          <div className="flex space-x-4 mt-6 text-gray-400">
            <a href="https://www.instagram.com/tanishqjain" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
            </a>
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-medium mb-4">Information</h3>
          <div className="flex items-start space-x-3 mb-2">
            <Phone className="w-4 h-4 mt-1 text-gray-400" />
            <span className="text-sm text-gray-400">(+91 9867009961)</span>
          </div>
          <div className="flex items-start space-x-3 mb-2">
            <Mail className="w-4 h-4 mt-1 text-gray-400" />
            <span className="text-sm text-gray-400">flashcutedits@gmail.com</span>
          </div>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-xl font-medium mb-4">Subscribe Now</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-l-sm border-r-none text-white border border-white focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-violet-500 px-4 py-2 rounded-r-md hover:bg-violet-600"
            >
              <Mail className="w-4 h-4 text-white" />
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-2">
            ✅ by signing up, you agree to receive mail
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        <p>2023 Flashcut Edits. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a href="#" className="hover:text-white">WHO WE ARE</a>
          <a href="#" className="hover:text-white">OUR WORK</a>
          <a href="#" className="hover:text-white">OUR PARTNERS</a>
          <a href="#" className="hover:text-white">CAPABILITIES</a>
        </div>
      </div>
    </footer>
  );
}
