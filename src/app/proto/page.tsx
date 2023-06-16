import { NextPage } from "next";
import Prototypes from "../components/prototypes";
import { projects, awards, prototypes } from "../info";
const HomePage: NextPage = () => {
  return (
    <div className="pt-2 pb-16 md:py-16 px-4">
      <div className="mx-auto max-w-screen-xl">
        <Prototypes prototypes={prototypes} />
      </div>
    </div>
  );
};
export default HomePage;
