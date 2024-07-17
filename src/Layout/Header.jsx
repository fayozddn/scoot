import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Switcher from "../utils/Switcher";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  MobileNav,
} from "@material-tailwind/react";

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="flex gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 flex-col items-center">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-mono p-1 font-normal text-gray dark:text-snow dark:hover:text-orange hover:text-orange duration-300"
      >
        <a href="/about" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-mono p-1 font-normal text-gray dark:text-snow dark:hover:text-orange hover:text-orange duration-300"
      >
        <a href="/location" className="flex items-center">
          Location
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-mono p-1 font-normal text-gray dark:text-snow dark:hover:text-orange hover:text-orange duration-300"
      >
        <a href="/careers" className="flex items-center">
          Careers
        </a>
      </Typography>
    </ul>
  );

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
      delay: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Navbar className="dark:bg-footer duration-500 border-transparent outline-none sticky top-0 z-10 h-max max-w-full rounded-none shadow-none px-4 py-2 lg:px-8 lg:py-4">
      <header className="container">
        <div className="flex items-center justify-between py-2">
          <div className="lg:hidden flex">
            <IconButton
              variant="text"
              className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-orange"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
          <div className="flex flex-row gap-x-20 items-center">
            <Typography
              as="a"
              href="/"
              className="font-mono cursor-pointer pl-5 text-2xl font-semibold text-dark_gray dark:text-white"
            >
              scoot
            </Typography>
            <div className="hidden lg:block">{navList}</div>
          </div>
          <div className="flex items-center gap-4">
            <Switcher />
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="md"
                className="hidden lg:inline-block bg-orange text-white rounded-none border border-orange hover:bg-transparent hover:text-orange"
              >
                <span>Get Scootin</span>
              </Button>
            </div>
          </div>
        </div>
        <MobileNav
          open={openNav}
          className="flex flex-col items-center text-center"
        >
          {navList}
        </MobileNav>
      </header>
    </Navbar>
  );
}

export default Header;
