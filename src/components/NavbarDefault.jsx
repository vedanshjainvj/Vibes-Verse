// Imports of react
import React from "react";
// Importing Material Tailwind for Navbar
import {Navbar, MobileNav, Typography, Button, IconButton} from "@material-tailwind/react";
// Importing react-router-dom for routing
import { Link, Outlet, NavLink } from "react-router-dom";
// Importing components from folder structure
import logo from "../assets/logo.png";

function NavbarDefault() { // Code for responsive Navbar
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="bg-black text-xl border-0 mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link className="text-white navlink text-xl" to="/">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-xl"
      >
        <Link className="text-white navlink" to="/about">
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-xl"
      >
        <Link className="text-white navlink" to="/internship">
          Internship
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-xl"
      >
        <Link className="text-white navlink" to="/swagkit">
          Swag Kit
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-xl"
      >
        <Link className="text-white navlink text-xl" to="/contact">
          Contact
        </Link>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="mt-8 bg-black border-0 mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
        <div className="bg-black container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img className="w-[14vw]" src={logo} alt="" />
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block loginbtn border-none text-[1.1vw]"
          >
            Login
          </Button>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
        <MobileNav open={openNav}>
          <div className="container mx-auto bg-black">
            {navList}
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <span className="">Login</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
      <Outlet />
    </>
  );
}
export default NavbarDefault;
