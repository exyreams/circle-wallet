import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

import Image from "next/image";
import { useRouter } from "next/router";

import { logo } from "@/assets";
import createAccount from "@/pages/createaccount";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const router = useRouter();

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-4 text-gray-200"
    >
      <div>
        <Image
          src={logo}
          alt="logo"
          style={{ objectFit: "contain" }}
          width={200}
          height={200}
          className="absolute top-0 left-10 "
        />
      </div>
      <div className="relative z-10 flex flex-col items-center p-20 mt-24">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-md font-poppins">
          Fresh Release!
        </span>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-4xl font-bold font-poppins leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          WELCOME TO <span className="text-blue-dark"> CIRCLE WALLET </span> -
          THE ULTIMATE SOLUTION FOR MANAGING YOUR FINANCES!
        </h1>
        <p className="my-4 max-w-xl font-poppins text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          Are you looking for a hassle-free and secure way to manage your crypto
          assets? Our smart and simple crypto solutions make it easy for you to
          stay on top of your investments and keep them safe. Say goodbye to
          complicated processes and hello to peace of mind with our reliable
          services.
        </p>

        <div className="flex justify-between space-x-6">
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
            handleClick={() => router.push("/createAccount")}
          >
            Create Wallet
            <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
          </motion.button>
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
            Login
            <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
          </motion.button>
        </div>
      </div>

      {/* Footer */}
      <div className="mx-auto w-full max-w-4xl px-5 mt-80">
        <div className="flex flex-col items-center bg-blue-600/20 rounded-md p-4 py-8">
          <div className="text-center text-md font-semibold max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:py-1">
            <a
              href="#"
              className="px-6 py-2 font-normal  font-poppins transition hover:text-[#acacaf]"
            >
              About
            </a>
            <a
              href="#"
              className="px-6 py-2 font-normal font-poppins transition hover:text-[#acacaf]"
            >
              Features
            </a>
            <a
              href="#"
              className="px-6 py-2 font-normal font-poppins transition hover:text-[#acacaf]"
            >
              Works
            </a>
            <a
              href="#"
              className="px-6 py-2 font-normal font-poppins transition hover:text-[#acacaf]"
            >
              Support
            </a>
            <a
              href="#"
              className="px-6 py-2 font-normal transition font-poppins hover:text-[#acacaf]"
            >
              Help
            </a>
          </div>
          <div className="mb-8 mt-8 w-48 border-b  border-solid border-b-white"></div>
          <p className="text-sm text-white font-poppins">
            © Copyright 2024. All rights reserved.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default AuroraHero;
