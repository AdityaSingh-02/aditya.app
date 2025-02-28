"use client";
import React from "react";
import Image from "next/image";
import WorkExperience from "./_components/work-exp";
import AboutMe from "./_components/about-me";
import TechStack from "./_components/tech-stack";
import Socials from "./_components/socials";
import Link from "next/link";

const Landing = () => {
  const text = "$ npm install resume";
  return (
    <div className="flex flex-col justify-center mx-auto lg:max-w-[60%] space-y-10">
      <div className="flex flex-col space-y-10 md:flex-row justify-center items-center md:space-x-10 md:space-y-0">
        <div className="border-[5px] rounded-full border-emerald-400">
          <Image
            src="/Aditya.jpeg"
            alt="Aditya Singh"
            width={300}
            height={200}
            blurDataURL="data:..."
            placeholder="blur"
            priority
            className="rounded-full border-[5px] border-gray-300"
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">
            Hii, I&apos;m Aditya Singh
          </h1>
          <p className="text-gray-600 md:text-lg">Doing what I love ❤️ </p>
          <p className="text-gray-600">
            Software Engineer, Open source contributor
          </p>
          <p className="text-gray-500 md:text-lg">📍 India</p>
        </div>
      </div>
      <Link
        href={
          "https://drive.google.com/file/d/16egfDIg45JT35KSerkV8RccxcZ1Dyg7B/view?usp=sharing"
        }
        target="_blank"
        className="border-2 py-5 px-10 bg-gradient-to-br from-gray-50 to-gray-200 rounded-md mx-auto font-semibold">
        {text}
      </Link>
      <AboutMe />
      <WorkExperience />
      <TechStack />
      <Socials />
      <p className="mx-auto">Made with ❤️ by Aditya Singh</p>
    </div>
  );
};

export default Landing;
