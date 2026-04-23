import { NextPage } from "next";
import { Metadata } from "next";
import Prototypes from "../components/prototypes";
import Logo from "../components/Logo";
import { prototypes } from "../info";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prototypes — R. Cole Peterson",
  description:
    "A collection of prototypes and experiments by R. Cole Peterson, exploring AI, creative technology, and interactive experiences.",
  openGraph: {
    title: "Prototypes — R. Cole Peterson",
    description:
      "A collection of prototypes and experiments by R. Cole Peterson, exploring AI, creative technology, and interactive experiences.",
    url: "https://rcolepeterson.com/proto",
  },
};

const HomePage: NextPage = () => {
  return (
    <section>
      <div className="bg-white pt-2 md:py-16 px-4">
        <div className="mx-auto max-w-screen-xl">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </div>

      <div className="bg-gray-50 px-4">
        <div className="mx-auto max-w-screen-xl py-16">
          <Prototypes prototypes={prototypes} />
          <p className=""> and a ton more ...</p>
          <Link href="/">
            <div className="text-2xl flex items-center py-8 gap-x-2 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              BACK
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default HomePage;
