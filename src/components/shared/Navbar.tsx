"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle scroll to show navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={`mx-auto navbar bg-base-100 bg-transparent lg:w-[960px] sticky top-0 left-0 right-0 z-50  transition-all duration-300 ${
        isScrolled ? "shadow-lg rounded-md backdrop-blur-md bg-opacity-80" : ""
      }`}
    >
      <div className="container mx-auto  flex justify-between items-center">
        {/* Navbar Start */}
        <div className="navbar-start " >
          {/* Mobile Menu Button */}
          <div className="dropdown  lg:hidden">
            <button
              tabIndex={0}
              className="btn btn-ghost"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 transition-opacity duration-300 ${
                isDropdownOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/Pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/Login">Login</Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link href="/" className="btn btn-ghost  text-xl">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.9979 0V13.716L11.9979 20.573L-0.0020752 13.715L23.9979 0Z"
                fill="#431F5A"
              />
              <path
                d="M12 20.572L24 27.429V41.143L12 34.286L0 27.429V13.714L12 20.572Z"
                fill="#722ED1"
              />
              <path
                d="M35.999 34.2859V47.9989L23.999 41.1429V27.429L35.999 34.2859Z"
                fill="#722ED1"
              />
              <path
                d="M23.9979 0V13.714L35.9979 20.57L47.9979 27.426V13.715L23.9979 0Z"
                fill="#722ED1"
              />
              <path
                d="M47.9969 13.714V27.43L35.9969 34.287L23.9969 27.429L35.9969 20.571L47.9969 13.714Z"
                fill="#431F5A"
              />
              <path
                d="M35.999 34.2859L23.999 41.1429V27.429L35.999 34.2859Z"
                fill="#431F5A"
              />
            </svg>
          </Link>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center">
          <Link
            href="/"
            className="border py-1 border-[#722ED1] text-[#722ED1] rounded-full px-3 mr-2 lg:hidden"
          >
            Start Free Trial
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/Pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/Login">Login</Link>
              </li>
            </ul>
            <Link
              href="/"
              className="border py-1 border-[#722ED1] text-[#722ED1] rounded-full px-4"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>

      {/* Backdrop for dropdown */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        ></div>
      )}
    </motion.div>
  );
};

export default Navbar;
