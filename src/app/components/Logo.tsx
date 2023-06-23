import Image from "next/image";
import avatar from "../avatar.jpg";
const Logo = () => {
  return (
    <div className="flex items-center gap-x-3 md:gap-x-4">
      <Image
        alt={"rcolepeterson"}
        src={avatar}
        placeholder="blur"
        priority
        className="w-[50px] md:w-[60px] rounded-full"
      />
      <h6 className="max-w-2xl text-base md:text-xl font-extrabold uppercase">
        R. Cole Peterson
      </h6>
    </div>
  );
};

export default Logo;
