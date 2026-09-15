"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ProjectRole as ProjectRoleType } from "../info";

type Props = {
  role: ProjectRoleType;
};

const sections: { heading: string; key: keyof ProjectRoleType }[] = [
  { heading: "Role & Ownership", key: "whatIOwned" },
  { heading: "Engineering Impact", key: "whatISolved" },
  { heading: "Recognition", key: "outcome" },
];

const ProjectRole: React.FC<Props> = ({ role }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="btn bg-transparent font-bold leading-none text-white inline-flex items-center justify-center gap-2 border-2 border-white/60 hover:bg-white hover:text-black hover:border-white"
      >
        My role
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 8"
          fill="none"
          className={`h-2.5 w-2.5 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-full overflow-hidden"
          >
            <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-4 md:p-5">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {sections.map(({ heading, key }) => (
                  <div key={key}>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-white/50">
                      {heading}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-white/90">
                      {role[key]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectRole;
