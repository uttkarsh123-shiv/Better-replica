"use client"; // Required for state & useEffect in App Router

import { useState, useEffect } from "react";
import { PhoneCall } from "@deemlol/next-icons";
import "../globals.css";

const Navbar = ({
  bgColor = "white",
  textColor = "black",
  scrollTextColor = "black", // New prop for text color when scrolled
  highlight = "gray",
  animateOnScroll = false,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!animateOnScroll) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 845);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animateOnScroll]);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      style={{
        background: scrolled ? "#fff" : bgColor,
        color: scrolled ? scrollTextColor : textColor, // Dynamic text color
        transition: "background 0.3s ease-in-out",
      }}
    >
      <h1 style={{ color: scrolled ? scrollTextColor : textColor }}>Better</h1>
      <div className="menu">
        <ul>
          {["Buy", "Refinance", "HELOC", "Rates", "Better+"].map((item) => (
            <li key={item}>
              <a href="#" style={{ color: scrolled ? scrollTextColor : textColor }}>
                {item}
              </a>
            </li>
          ))}
        </ul>
        <ul>
          <li
            style={{
              border: `1px solid ${scrolled ? scrollTextColor : textColor}`,
              borderRadius: "50%",
              width: "55px",
              display: "flex",
              scale: 0.8,
            }}
          >
            <a href="#">
              <svg
                width="18"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5 13.5L18.5 17C18.5 17.55 18.05 18 17.5 18C8.11 18 0.500002 10.39 0.500002 1C0.500002 0.450001 0.950003 0 1.5 0L4.99 0C5.54 0 5.99 0.450001 5.99 1C5.99 2.24 6.19 3.45 6.56 4.57C6.6 4.67 6.61 4.78 6.61 4.88C6.61 5.14 6.51 5.39 6.32 5.59L4.12 7.79C5.57 10.62 7.88 12.94 10.71 14.38L12.91 12.18C13.19 11.9 13.58 11.82 13.93 11.93C15.05 12.3 16.25 12.5 17.5 12.5C18.05 12.5 18.5 12.95 18.5 13.5Z"
                  fill={scrolled ? scrollTextColor : "#292B29"}
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#" style={{ color: scrolled ? scrollTextColor : textColor }}>
              Sign in
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
