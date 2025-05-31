'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle, ChevronDown, Play, Palette } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(null);
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const servicesMenu = {
    videoEditing: {
      title: "Video Editing",
      icon: <Play className="w-4 h-4" />,
      href: "/services#video-editing",
      submenu: [
        { title: "Ads & Promotional Videos", href: "/services/video_editing/ads_promotional" },
        { title: "3D Edit", href: "/services/video_editing/3d" },
        { title: "Documentary", href: "/services/video_editing/documentary" },
        { title: "Ecommerce", href: "/services/video_editing/ecommerce" },
        { title: "Educational", href: "/services/video_editing/educational" },
        { title: "Faceless", href: "/services/video_editing/faceless" },
        { title: "High Level Motion Graphics", href: "/services/video_editing/high_level_motion_graphics" },
        { title: "Podcasts", href: "/services/video_editing/podcasts" },
        { title: "Real Estate", href: "/services/video_editing/real_estate" },
      ]
    },
    graphicDesign: {
      title: "Graphic Design",
      icon: <Palette className="w-4 h-4" />,
      href: "/services#graphic-design",
      submenu: [
        { title: "Catalogs", href: "/services/graphic_designing/catalogs" },
        { title: "Banners", href: "/services/graphic_designing/banners" },
        { title: "Cover Image", href: "/services/graphic_designing/cover" },
        { title: "Flyers & Brochures", href: "/services/graphic_designing/flyers_brochures" },
        { title: "Logo Designing", href: "/services/graphic_designing/logo_designing" },
        { title: "Poster Creatives", href: "/services/graphic_designing/poster_creatives" },
        { title: "Thumbnails", href: "/services/graphic_designing/thumbnails" },
      ]
    }
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services', hasDropdown: true },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className="text-[#0d1117] w-full z-50 fixed top-0 left-0 border-b border-gray-200 backdrop-blur-sm bg-white/95">
      <div className="px-6 md:px-20 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold text-[#0d1117] hover:opacity-80 transition-opacity duration-200">
            Flashcut Edits
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href} className="relative group">
                {link.hasDropdown ? (
                  <div className="relative">
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 transition-all duration-200 hover:text-[#0d1117] ${
                        isActive(link.href)
                          ? 'text-[#0d1117] font-semibold opacity-100'
                          : 'text-[#0d1117]/70 opacity-70 hover:opacity-100'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
                    </Link>

                    {/* Services Dropdown */}
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="p-2">
                        {Object.entries(servicesMenu).map(([key, service]) => (
                          <div key={key} className="relative group/submenu">
                            <Link
                              href={service.href}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group/submenu"
                            >
                              <div className="text-blue-500">
                                {service.icon}
                              </div>
                              <span className="font-medium text-[#0d1117]">{service.title}</span>
                              <ChevronDown className="w-3 h-3 ml-auto rotate-[-90deg] transition-transform duration-200 group-hover/submenu:rotate-0" />
                            </Link>

                            {/* Sub-submenu */}
                            <div className="absolute left-full top-0 ml-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200 z-50">
                              <div className="p-2">
                                {service.submenu.map((item, index) => (
                                  <Link
                                    key={index}
                                    href={item.href}
                                    className="block p-2 text-sm text-gray-700 hover:text-[#0d1117] hover:bg-gray-50 rounded transition-colors duration-200"
                                  >
                                    {item.title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`transition-all duration-200 hover:text-[#0d1117] ${
                      isActive(link.href)
                        ? 'text-[#0d1117] font-semibold opacity-100'
                        : 'text-[#0d1117]/70 opacity-70 hover:opacity-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="https://calendly.com/jaitanishq222/video-editing-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 cursor-pointer text-sm font-medium text-[#0d1117] border border-gray-300 rounded-lg hover:bg-green-500 hover:text-white transition-colors duration-200"
            >
              Book a Call
            </Link>
            <Link
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
              <MessageCircle size={16} />
              WhatsApp
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#0d1117] transition-transform duration-200 hover:scale-105"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="transition-transform duration-300">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-screen opacity-100 transform translate-y-0'
            : 'max-h-0 opacity-0 transform -translate-y-2 overflow-hidden'
        }`}>
          <div className={`transition-all duration-300 ${
            isMobileMenuOpen ? 'mt-4 pb-4 border-t border-gray-200' : 'mt-0 pb-0'
          }`}>
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={`flex items-center justify-between w-full transition-all duration-200 hover:text-[#0d1117] ${
                          isActive(link.href)
                            ? 'text-[#0d1117] font-semibold opacity-100'
                            : 'text-[#0d1117]/70 opacity-70 hover:opacity-100'
                        }`}
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          mobileServicesOpen ? 'rotate-180' : ''
                        }`} />
                      </button>

                      {/* Mobile Services Submenu */}
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="mt-2 ml-4 space-y-2">
                          {Object.entries(servicesMenu).map(([key, service]) => (
                            <div key={key}>
                              <button
                                onClick={() => setMobileSubMenuOpen(mobileSubMenuOpen === key ? null : key)}
                                className="flex items-center justify-between w-full p-2 text-sm text-gray-700 hover:text-[#0d1117] hover:bg-gray-50 rounded transition-colors duration-200"
                              >
                                <div className="flex items-center gap-2">
                                  <div className="text-blue-500">
                                    {service.icon}
                                  </div>
                                  {service.title}
                                </div>
                                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                                  mobileSubMenuOpen === key ? 'rotate-180' : ''
                                }`} />
                              </button>

                              {/* Mobile Sub-submenu */}
                              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                mobileSubMenuOpen === key ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                              }`}>
                                <div className="mt-1 ml-6 space-y-1">
                                  {service.submenu.map((item, index) => (
                                    <Link
                                      key={index}
                                      href={item.href}
                                      className="block p-2 text-xs text-gray-600 hover:text-[#0d1117] hover:bg-gray-50 rounded transition-colors duration-200"
                                      onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setMobileServicesOpen(false);
                                        setMobileSubMenuOpen(null);
                                      }}
                                    >
                                      {item.title}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`transition-all duration-200 hover:text-[#0d1117] ${
                        isActive(link.href)
                          ? 'text-[#0d1117] font-semibold opacity-100'
                          : 'text-[#0d1117]/70 opacity-70 hover:opacity-100'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Link
                  href="https://calendly.com/jaitanishq222/video-editing-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 cursor-pointer text-sm font-medium text-[#0d1117] border border-gray-300 rounded-lg hover:bg-green-500 hover:text-white transition-colors duration-200 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book a Call
                </Link>
                <Link
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
