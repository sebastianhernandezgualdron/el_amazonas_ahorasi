import React, { useEffect, useState } from "react";
import logo from "../assets/icono-principal.png";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // set toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  // navitems array
  const navItems = [
    { link: "Inicio", path: "inicio", isRouterLink: true, isHero: true },
    { link: "Servicios", path: "servicios", isRouterLink: false },
    { link: "Blog", path: "blog", isRouterLink: false },
    { link: "Nosotros", path: "nosotros", isRouterLink: true },
    { link: "Contacto", path: "contacto", isRouterLink: true },
  ];
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="w-screen bg-white md:bg-transparent fixed top-0 left-0 right-0  ">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border bg-white duration-300"
            : ""
        } `}

      >
        <div className="flex justify-between items-center text-base gap-8  ">
          <RouterLink
            to="/"
            key="inicio"
            className="text-3xl font-semibold flex items-center space-x-3  "
          >
            <img
              src={logo}
              alt="logo de la página"
              className="w-10 inline-block items-center  "
            />
            <span className="font-mbf-canno text-[#263238]">amaxonia</span>
          </RouterLink>
          {/* nav items for large devices  */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path, isRouterLink, isHero }) =>
              isRouterLink ? (
                <RouterLink
                  to={path}
                  key={path}
                  className="block cursor-pointer text-base text-gray900 hover:text-brandPrimary first:font-medium"
                  onClick={(e) => {
                    if (isHero) {
                      e.preventDefault();
                      if (location.pathname !== "/") {
                        navigate("/");
                      }
                      scroll.scrollToTop();
                    }
                  }}
                >
                  {link}
                </RouterLink>
              ) : (
                <ScrollLink
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={path}
                  className="block cursor-pointer text-base text-gray900 hover:text-brandPrimary first:font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    if (location.pathname !== "/") {
                      navigate("/");
                    }
                    scroll.scrollToTop();
                  }}
                >
                  {link}
                </ScrollLink>
              )
            )}
          </ul>
          {/* btn for large devices */}
          <div className="space-x-12 hidden lg:flex items-center  ">
            <a
              href="https://api.whatsapp.com/send/?phone=50760192070&text&type=phone_number&app_absent=0"
              className="hidden lg:flex items-center text-brandPrimary hover:text-gray900 "
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir demo
            </a>
            <button className="bg-brandPrimary text-white py-2 px-6 transition-all duration-300 rounded hover:bg-neutralDGrey ">
              Cotizar
            </button>
          </div>
          {/* menu btn for only mobile devices  */}
          <div className="md:hidden ">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500  "
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 " />
              ) : (
                <FaBars className="h-6 w-6 " />
              )}
            </button>
          </div>
        </div>
        {/* nav items for mobile devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0 " : "hidden"
          } `}
        >
          {navItems.map(({ link, path, isRouterLink, isHero }) =>
            isRouterLink ? (
              <RouterLink
                to={path}
                key={path}
                className="block text-base text-white hover:text-brandPrimary first:font-medium"
                onClick={(e) => {
                  if (isHero) {
                    e.preventDefault();
                    navigate("/");
                    scroll.scrollToTop();
                  }
                }}
              >
                {link}
              </RouterLink>
            ) : (
              <ScrollLink
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base text-white hover:text-brandPrimary first:font-medium"
              >
                {link}
              </ScrollLink>
            )
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
