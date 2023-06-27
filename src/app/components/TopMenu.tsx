import React from "react";
import Logo from "../components/Logo";
import HamburgerMenu from "../components/HamburgerMenu";
// import Image from "next/image";
// import avatar from "../avatar.jpg";
const TopMenu: React.FC = () => {
  return (
    <div className="flex flex-row justify-between px-5 md:px-14 py-4 bg-white fixed top-0 w-full z-[2]">
      <Logo />
      <HamburgerMenu />
    </div>
  );
};
3;
export default TopMenu;
