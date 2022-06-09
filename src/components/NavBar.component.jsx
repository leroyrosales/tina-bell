import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
  return (
    <header className="bg-indigo-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <NavLink to="/" exact>
              <span className="sr-only">Vite &amp; Sanity</span>
              <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt=""
              />
            </NavLink>
            <div className="hidden ml-10 space-x-8 lg:block">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-bold"
                    : "text-base font-medium text-white hover:text-indigo-400"
                }
                exact
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-bold"
                    : "text-base font-medium text-white hover:text-indigo-400"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-bold"
                    : "text-base font-medium text-white hover:text-indigo-400"
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/posts"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-bold"
                    : "text-base font-medium text-white hover:text-indigo-400"
                }
              >
                Blog
              </NavLink>
            </div>
          </div>
          <div className="ml-10 space-x-4">
          <SocialIcon
              url="#"
              network="facebook"
              className="hover:opacity-75"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="#"
              network="linkedin"
              className="hover:opacity-75"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />

<SocialIcon
              url="#"
              network="twitter"
              className="hover:opacity-75"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          <a
            href="#"
            className="text-base font-medium text-white hover:text-indigo-50"
          >
            {" "}
            Solutions{" "}
          </a>

          <a
            href="#"
            className="text-base font-medium text-white hover:text-indigo-50"
          >
            {" "}
            Pricing{" "}
          </a>

          <a
            href="#"
            className="text-base font-medium text-white hover:text-indigo-50"
          >
            {" "}
            Docs{" "}
          </a>

          <a
            href="#"
            className="text-base font-medium text-white hover:text-indigo-50"
          >
            {" "}
            Company{" "}
          </a>
        </div>
      </nav>
    </header>
  );
}
