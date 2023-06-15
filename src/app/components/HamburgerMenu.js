"use client";
import React from "react";
import Link from "next/link";

const HamburgerMenu = ({ onClick }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const linkstyle = `flex text-xl py-2 hover:text-primary`;
  return (
    <div className="hamburger">
      <div
        className={`button_container ${!isOpen ? "" : "active"}`}
        id="toggle"
        onClick={handleClick}
      >
        <span className={`top`} />
        <span className={`middle`} />
        <span className={`bottom`} />
      </div>
      <div className={`overlay ${isOpen ? " open" : ""}`} id="overlay">
        <nav
          className="mt-[100px] overlay-menu overflow-y-scroll"
          onClick={handleClick}
        >
          <ul>
            <div className="flex flex-col">
              {[1, 2, 3].map((item, index) => {
                return (
                  <li className="" key={`${index}-menu-item`}>
                    <div
                      className="capitalize font-titillium-web"
                      onClick={onClick}
                    >
                      <div className={`${linkstyle}`}>
                        <span className="font-bold">Home</span>
                      </div>
                    </div>
                  </li>
                );
              })}

              <li>
                <a
                  className={`${linkstyle}`}
                  href="mailto:info@bantercaas.com?subject=Hello&body=Dear%20BanterCAAS%20Team,"
                >
                  <span className="font-bold text-primary">Contact</span>
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
