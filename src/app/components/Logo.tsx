import Image from "next/image";
import avatar from "../avatar.jpg";
const Logo = () => {
  return (
    <div className="flex items-center gap-x-4">
      <Image
        alt={"rcolepeterson"}
        className="rounded-full my-4"
        src={avatar}
        placeholder="blur"
        width={100}
        priority
      />
      <h1 className="max-w-2xl text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl">
        R. Cole Peterson
      </h1>
    </div>
  );
};

export default Logo;
