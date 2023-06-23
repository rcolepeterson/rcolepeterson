import { NextPage } from "next";
import { projects, awards, prototypes } from "./info";
import Image from "next/image";
import { GitHubIcon, TwitterIcon, LinkedinIcon } from "./components/icons";
import Logo from "./components/Logo";
import Mailto from "./components/mailto";
import Prototypes from "./components/prototypes";
import Link from "next/link";

import TopMenu from "./components/TopMenu";

const HomePage: NextPage = () => {
  return (
    <section>
      <TopMenu />
      {/* <div className="bg-zinc-100 py-16 md:py-32 px-4 flex justify-center items-center relative">
        <div className="mx-auto max-w-screen-xl text-left">
          <h1 className="uppercase text-6xl">r. cole peterson</h1>
          <p className="max-w-2xl mb-6 md:my-6 font-light text-gray-600 md:text-lg lg:text-xl">
            Responsible for leading highly collaborative teams to create
            world-class digital products and experiences. I work closely with
            designers, product managers, strategists, and developers to concept,
            prototype, and execute on a range of products.
          </p>
          <p className="max-w-2xl font-light text-gray-600 md:text-lg lg:text-xl">
            In other words, I build web apps with cool people. These creations
            end up as experiments, prototypes for pitches, and sometimes in
            production for a client.
          </p>
        </div>
        <div className="hidden md:block absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/francis_peterson.jpeg')",
            }}
          />
        </div>
        <div className="md:hidden mt-8">
          <img
            className="w-full"
            src="/images/francis_peterson.jpeg"
            alt="Mountains"
          />
        </div>
      </div> */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url('/images/francis_peterson.jpeg')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white">
            {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Maker</p> */}
          </div>
        </div>
      </div>

      <div className="px-4" id="about">
        <div className="mx-auto lg:col-span-7 max-w-screen-xl py-16">
          <h4 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl">
            About
          </h4>
          <p className="max-w-2xl mb-6 md:my-6 font-light text-gray-600 md:text-lg lg:text-xl">
            Responsible for leading highly collaborative teams to create
            world-class digital products and experiences. I work closely with
            designers, product managers, strategists, and developers to concept,
            prototype, and execute on a range of products.
          </p>
          <p className="max-w-2xl font-light text-gray-600 md:text-lg lg:text-xl">
            In other words, I build web apps with cool people. These creations
            end up as experiments, prototypes for pitches, and sometimes in
            production for a client.
          </p>
        </div>
      </div>
      <div className="bg-gray-50 px-4" id="skills">
        <div className="mx-auto lg:col-span-7 max-w-screen-xl py-16">
          <h4 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl">
            Skills
          </h4>

          <p className="max-w-2xl font-light text-gray-600 md:text-lg lg:text-xl">
            JavaScript, TypeScript, React, Next.js, Node.
          </p>
          <p className="max-w-2xl mt-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl">
            Expert in integrating various 3rd party APIs with innovative
            technology and relevant data to develop novel and imaginative
            applications.
          </p>
        </div>
      </div>
      <div className="bg-gray-900 text-white px-4" id="work">
        <div className="mx-auto max-w-screen-xl py-16">
          <h4 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl">
            Work
          </h4>
          {projects.map((project, i) => (
            <div
              className="flex flex-col md:flex-row pt-8 "
              key={`project-stuff-${i}`}
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
                  className="btn mt-6 bg-primary font-bold text-black pt-4 inline-block border-transparent"
                >
                  Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 px-4" id="proto">
        <div className="mx-auto  max-w-screen-xl py-16">
          <Prototypes
            prototypes={prototypes.filter((item, index) => index < 3)}
          />
          <Link href={"/proto"} className="mt-6 underline">
            More
          </Link>
        </div>
      </div>
      <div className="bg-white px-4" id="awards">
        <div className="mx-auto  lg:col-span-7 max-w-screen-xl py-16">
          <h4 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl">
            Awards
          </h4>
          {awards.map((award, i) => (
            <div className="flex flex-col " key={`award-stuff-${i}`}>
              <div className="pb-6">
                <h6 className="font-bold">{award.name}</h6>
                <p>Project: {award.description}</p>
                <p>Client: {award.client}</p>
                <p>Issued By: {award.issuedBy}</p>
                <Link
                  href={award.link}
                  className="mt-6  font-bold text-black underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
          <Link
            className="underline "
            href="https://www.linkedin.com/in/colepetersonrocks/details/honors/"
          >
            More
          </Link>
        </div>
      </div>
      <div className="bg-gray-900 text-white px-4" id="contact">
        <div className="mx-auto  lg:col-span-7 max-w-screen-xl py-16">
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

          <p className="max-w-2xl font-light md:text-lg lg:text-xl">
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
