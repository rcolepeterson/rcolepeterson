import { projects, awards, prototypes, build } from "./info";
import clsx from "clsx";
import Image from "next/image";
import { GitHubIcon, TwitterIcon, LinkedinIcon } from "./components/icons";
import Mailto from "./components/mailto";
import Prototypes from "./components/prototypes";
import Link from "next/link";
import ScrollIndicator from "./components/scrollIndicator";
import TopMenu from "./components/TopMenu";

export default function HomePage() {
  const pStyle = "max-w-2xl font-light text-gray-600 md:text-lg lg:text-xl";
  const headerStyle =
    "max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl";
  return (
    <section>
      <TopMenu />
      <div className="hero min-h-screen bg-black">
        <div className="text-center">
          <div className="text-container">
            <h1>MAKER</h1>
          </div>
        </div>
        <ScrollIndicator />
      </div>

      <div className="px-4" id="about">
        <div className="mx-auto max-w-screen-xl py-16">
          <h2 className={headerStyle}>About</h2>
          <p className="mb-6 md:my-6 text-gray-400 max-w-2xl md:text-lg lg:text-xl">
            Responsible for leading highly collaborative teams to create
            world-class digital products and experiences. I work closely with
            designers, product managers, strategists, and developers to concept,
            prototype, and execute on a range of products.
          </p>
          <p className="text-gray-400 max-w-2xl md:text-lg lg:text-xl">
            I build web apps with cool people. These creations end up as
            experiments, prototypes for pitches, and sometimes in production for
            clients.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 px-4" id="skills">
        <div className="mx-auto max-w-screen-xl py-16">
          <h2 className={headerStyle}>Skills</h2>
          <p className={pStyle}>
            JavaScript, TypeScript, React, Next.js, Node, AI integration.
          </p>
          <p className={clsx(pStyle, "mt-6")}>
            Expert in integrating various 3rd party APIs with innovative
            technology and relevant data to develop novel and imaginative
            applications.
          </p>
        </div>
      </div>

      <div className="bg-black text-white px-4" id="work">
        <div className="mx-auto max-w-screen-xl py-16">
          <h2 className={headerStyle}>Work</h2>
          {projects.map((project, i) => (
            <div
              className="flex flex-col md:flex-row pt-8"
              key={`project-${i}`}
            >
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={225}
              />
              <div className="py-6 md:ml-6">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <Link
                  href={project.link}
                  className="btn mt-6 bg-primary font-bold text-black pt-4 inline-block border-transparent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 px-4" id="proto">
        <div className="mx-auto max-w-screen-xl py-16">
          <Prototypes prototypes={prototypes.filter((_, index) => index < 3)} />
          <Link href={"/proto"} className="mt-6 underline">
            More
          </Link>
        </div>
      </div>

      <div className="bg-white px-4" id="awards">
        <div className="mx-auto max-w-screen-xl py-16">
          <h2 className={headerStyle}>Awards</h2>
          {awards.map((award, i) => (
            <div className="flex flex-col" key={`award-${i}`}>
              <div className="pb-6">
                <h3 className="font-bold">{award.name}</h3>
                <p>Project: {award.description}</p>
                <p>Client: {award.client}</p>
                <p>Issued By: {award.issuedBy}</p>
                <Link
                  href={award.link}
                  className="mt-6 font-bold text-black underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
          <Link
            className="underline"
            target="_blank"
            href="https://www.linkedin.com/in/petersoncolerobert/details/honors/"
          >
            More
          </Link>
        </div>
      </div>

      <div className="px-4 bg-gray-50" id="build">
        <div className="mx-auto max-w-screen-xl py-16">
          <h2 className={headerStyle}>What can I build for you?</h2>
          {build.map((item, i) => (
            <div className="flex flex-col" key={`build-item-${i}`}>
              <div className="pb-6">
                <h3 className="font-bold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black text-white px-4" id="contact">
        <div className="mx-auto max-w-screen-xl py-16">
          <div className="flex flex-col mb-8">
            <h2 className="uppercase font-bold mb-2">social</h2>
            <div className="flex flex-row gap-x-4 items-center">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/colepetersonrocks/"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/rcolepeterson/"
                aria-label="GitHub Profile"
              >
                <GitHubIcon />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/rcolepeterson"
                aria-label="Twitter Profile"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>
          <h3 className="max-w-2xl text-4xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-2xl">
            R. Cole Peterson
          </h3>
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
}
