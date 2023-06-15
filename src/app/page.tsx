import { NextPage } from "next";
import { projects } from "./info";
import Image from "next/image";
import { GitHubIcon, TwitterIcon, LinkedinIcon } from "./components/icons";
import Mailto from "./components/mailto";
import Link from "next/link";
import avatar from "./avatar.jpg";
// import HamburgerMenu from "./components/HamburgerMenu";

const HomePage: NextPage = () => {
  // const handleScroll = () => {
  //   const targetElement = document.querySelector("#prototypes");
  //   if (targetElement) {
  //     targetElement.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  // };
  return (
    <section className="">
      {/* <HamburgerMenu onClick={handleScroll} /> */}
      <div className="bg-white py-4 mx-auto px-4" id="about">
        <div className="mx-auto place-self-center lg:col-span-7 max-w-screen-xl">
          <div className="flex items-center gap-x-4">
            <Image
              alt={"name"}
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
          <p className="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Responsible for leading highly collaborative teams to create
            world-class digital products and experiences. I work closely with
            designers, product managers, strategists, and developers to concept,
            prototype, and execute on a range of products.
          </p>
          <p className="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            In other words, I build web apps with cool people. These creations
            end up as experiments, prototypes for pitches, and sometimes in
            production for a client.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 px-4">
        <div className="mx-auto place-self-center lg:col-span-7 max-w-screen-xl py-16">
          <h4 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl dark:text-white">
            Skills
          </h4>
          <p className="max-w-2xl font-light text-gray-600 md:text-lg lg:text-xl dark:text-gray-400">
            JavaScript, TypeScript, React, Next.js, Node, Tailwind among others.
          </p>
          <p className="max-w-2xl mt-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Expert in integrating various 3rd party APIs with innovative
            technology and relevant data to develop novel and imaginative
            applications.
          </p>
        </div>
      </div>
      <div className="bg-gray-900 text-white px-4" id="work">
        <div className="mx-auto place-self-center max-w-screen-xl py-16">
          <h4 className="max-w-2xl text-4xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl dark:text-white mb-8 md:mt-0">
            Work
          </h4>
          {projects.map((project, i) => (
            <div
              className="flex flex-col md:flex-row pt-8 "
              key={`work-stuff-${i}`}
            >
              <Image
                src={project.image}
                alt="Shoes"
                width={400}
                height={225}
              ></Image>
              <div className="py-6 md:ml-6">
                <h5>{project.name}</h5>
                <p>{project.description}</p>
                <Link
                  href={project.link}
                  className="btn mt-6 bg-primary font-bold text-black pt-4 inline-block border-b-2 border-transparent hover:border-primary transition duration-300 ease-in-out"
                >
                  Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-50 px-4" id="prototypes">
        <div className="mx-auto place-self-center lg:col-span-7 max-w-screen-xl py-16">
          <h4 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl dark:text-white">
            Prototypes
          </h4>
          <p className="max-w-2xl font-light text-gray-600 md:text-lg lg:text-xl dark:text-gray-400">
            JavaScript, TypeScript, React, Next.js, Node, Tailwind among others.
          </p>
          <p className="max-w-2xl mt-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Expert in integrating various 3rd party APIs with innovative
            technology and relevant data to develop novel and imaginative
            applications.
          </p>
        </div>
      </div>
      <div className="bg-white px-4">
        <div className="mx-auto place-self-center lg:col-span-7 max-w-screen-xl py-16">
          <h4 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl dark:text-white">
            Awards
          </h4>
          <p className="max-w-2xl font-light text-gray-600 md:text-lg lg:text-xl dark:text-gray-400">
            JavaScript, TypeScript, React, Next.js, Node, Tailwind among others.
          </p>
          <p className="max-w-2xl mt-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Expert in integrating various 3rd party APIs with innovative
            technology and relevant data to develop novel and imaginative
            applications.
          </p>
        </div>
      </div>
      <div className="bg-gray-900 text-white px-4" id="contact">
        <div className="mx-auto place-self-center lg:col-span-7 max-w-screen-xl py-16">
          <div className="flex flex-col mb-8">
            <h6 className="uppercase font-bold mb-2">social</h6>
            <div className="flex flex-row gap-x-4 items-center">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/colepetersonrocks/"
              >
                <LinkedinIcon />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/rcolepeterson/"
              >
                <GitHubIcon />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/rcolepeterson"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>
          <h5 className="max-w-2xl text-4xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-2xl ">
            R. Cole Peterson
          </h5>

          <p className="max-w-2xl font-light md:text-lg lg:text-xl dark:text-gray-400 ">
            <span className="font-bold">Contact: </span>
            <Mailto email="rcolepeterson@gmail.com" />
          </p>
          <p className="text-sm pt-4">
            Responsible for leading highly collaborative teams to create
            world-class digital products and experiences. I work closely with
            designers, product managers, strategists, and developers to concept,
            prototype, and execute on a range of products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
