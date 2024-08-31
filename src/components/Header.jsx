import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import LangBtn from "./LangBtn";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false); // New state for submenu
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleClick = (location) => {
    navigate(location);
  };
  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubmenu = () => setIsSubmenuOpen(!isSubmenuOpen);

  return (
    <nav className="top-0 block py-3 w-full max-w-full rounded-none px-4 bg-black bg-opacity-50 text-white shadow-none fixed z-50 border-0">
      <div className="container mx-auto flex items-center justify-between">
        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-inherit">
          Material Tailwind
        </h6>
        <ul className="ml-10 hidden items-center gap-6 lg:flex">
          <li>
            <a
              href="#"
              className="block antialiased font-sans text-sm leading-normal text-inherit font-medium"
            >
              {t("header.1")}
            </a>
          </li>
          <li>
            <a
              href="#destinations"
              className="block antialiased font-sans text-sm leading-normal text-inherit font-medium"
            >
              {t("header.2")}
            </a>
          </li>
          <li>
            <a
              href="#tours"
              className="block antialiased font-sans text-sm leading-normal text-inherit font-medium"
            >
              {t("header.3")}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block antialiased font-sans text-sm leading-normal text-inherit font-medium"
            >
              {t("header.4")}
            </a>
          </li>
          <li>
            <Menu>
              <MenuHandler>
                <Button className="bg-transparent block antialiased font-sans text-sm leading-normal text-inherit font-medium p-0 m-0 shadow-none">
                  {t("header.5")}
                </Button>
              </MenuHandler>
              <MenuList>
                <MenuItem
                  onClick={() => handleClick("/FormRegisterRestaurantEgypt")}
                >
                  {t("menu.1")}
                </MenuItem>
                <MenuItem
                  onClick={() => handleClick("/FormRegisterHotelEgypt")}
                >
                  {t("menu.2")}
                </MenuItem>
                <MenuItem
                  onClick={() => handleClick("/FormRegisterMa3lemEgypt")}
                >
                  {t("menu.3")}
                </MenuItem>
              </MenuList>
            </Menu>
          </li>
          <li>
            <LangBtn />
          </li>
        </ul>
        <button
          className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 ml-auto inline-block lg:hidden"
          type="button"
          onClick={toggleMenu}
        >
          <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </span>
        </button>
      </div>
      {isOpen && (
        <div className="block w-full basis-full overflow-hidden mt-4">
          <div className="container mx-auto rounded-lg bg-white px-6 py-5">
            <ul className="flex flex-col gap-4 text-gray-900">
              <li>
                <a
                  href="#"
                  className="block antialiased font-sans text-sm leading-normal text-inherit font-medium"
                >
                  {t("header.1")}
                </a>
              </li>
              <li>
                <a
                  href="#destinations"
                  className="block antialiased font-sans text-sm leading-normal text-inherit font-medium"
                >
                  {t("header.2")}
                </a>
              </li>
              <li>
                <a
                  href="#tours"
                  className="block antialiased font-sans text-sm leading-normal text-inherit font-medium"
                >
                  {t("header.3")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block antialiased font-sans text-sm leading-normal text-inherit font-medium"
                >
                  {t("header.4")}
                </a>
              </li>
              <li>
                <button
                  onClick={toggleSubmenu}
                  className="block antialiased font-sans text-sm leading-normal text-inherit font-medium bg-transparent p-0 m-0 shadow-none"
                >
                  {t("header.5")}
                </button>
                {isSubmenuOpen && (
                  <ul className="relative bg-white text-gray-900 mt-2 rounded-lg shadow-none w-48">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm font-medium hover:bg-gray-200"
                      >
                        {t("menu.1")}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm font-medium hover:bg-gray-200"
                      >
                        {t("menu.2")}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm font-medium hover:bg-gray-200"
                      >
                        {t("menu.3")}
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
            <div className="mt-4 flex gap-2">
              <button
                className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
              >
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <i className="fa-brands fa-facebook text-base"></i>
                </span>
              </button>
              <button
                className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
              >
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <i className="fa-brands fa-instagram text-base"></i>
                </span>
              </button>
              <button
                className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
              >
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <i className="fa-brands fa-github text-base"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
