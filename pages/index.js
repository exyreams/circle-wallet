import Link from "next/link";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Home = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <div className="flex justify-center p-12 sm:px-4">
      <div className="relative z-10 flex flex-col items-center p-20 mt-10">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-md font-poppins">
          Fresh Release!
        </span>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-5xl font-bold font-poppins leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          WELCOME TO <span className="text-blue-400"> CIRCLE WALLET. </span>
          <br />{" "}
          <span className="text-2xl">
            THE ULTIMATE SOLUTION FOR MANAGING YOUR FINANCES!
          </span>
        </h1>
        <p className="my-4 max-w-xl font-poppins text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          Are you looking for a hassle-free and secure way to manage your crypto
          assets? Our smart and simple crypto solutions make it easy for you to
          stay on top of your investments and keep them safe. Say goodbye to
          complicated processes and hello to peace of mind with our reliable
          services.
        </p>

        <div className="flex justify-between space-x-6">
          <Link href="/createaccount">
            <motion.button
              style={{
                border,
                boxShadow,
              }}
              whileHover={{
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.985,
              }}
              className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 font-poppins transition-colors hover:bg-gray-950/50"
            >
              Create Your Wallet, Today!!!
              <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
