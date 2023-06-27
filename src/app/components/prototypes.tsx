import React from "react";
import { PrototypeProps } from "../info";

type Props = {
  prototypes: PrototypeProps[];
};

const Prototypes: React.FC<Props> = ({ prototypes }) => {
  return (
    <>
      <h4 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl">
        Prototypes
      </h4>
      <p className="max-w-2xl mb-4 font-light text-gray-600 md:text-lg lg:text-xl">
        List of some of prototypes my team at Wunderman Thompson has built for
        fun, pitches, and experiments. We mostly use React / NextJS, Firebase,
        various 3rd party APIs and some custom backend stuff.
      </p>
      {prototypes.map((proto, i) => (
        <div className="flex flex-col " key={`proto-stuff-${i}`}>
          <div className="pb-6">
            <h6 className="font-bold">{proto.name}</h6>
            <p>{proto.description}</p>

            <p>Tech: {proto.tech}</p>
            {proto.link && (
              <a
                href={proto.link}
                className="underline text-black inline-block border-transparent"
              >
                {proto.link}
              </a>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Prototypes;
