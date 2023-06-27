"use client";
import React from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleScroll = (item) => {
    const targetElement = document.querySelector(`#${item}`);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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
              {["about", "skills", "work", "proto", "awards"].map(
                (item, index) => {
                  return (
                    <li className="" key={`${index}-menu-item`}>
                      <div
                        className="capitalize font-titillium-web cursor-pointer"
                        onClick={() => handleScroll(item)}
                      >
                        <div className={`${linkstyle}`}>
                          <span className="font-bold">{item}</span>
                        </div>
                      </div>
                    </li>
                  );
                }
              )}

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
