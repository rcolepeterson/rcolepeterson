import { NextPage } from "next";
import Prototypes from "../components/prototypes";
import Logo from "../components/Logo";
import { prototypes } from "../info";
import Link from "next/link";
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
        </div>
      </div>
    </section>
  );
};
export default HomePage;
