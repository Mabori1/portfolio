import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorder";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="py-20" id="experience">
      <h1 className="heading mb-10 text-3xl font-bold">
        Мой
        <span className="text-purple"> опыт работы</span>
      </h1>
      <div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-4">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            className="flex-1 border-neutral-200 text-white dark:border-slate-800"
            borderRadius="1.75rem"
          >
            <div className="flex flex-col gap-2 p-3 py-6 md:p-5 lg:flex-row lg:items-center lg:p-10">
              <Image
                src={card.thumbnail}
                alt={card.thumbnail}
                width={95}
                height={87}
                className="w-16 md:w-20 lg:w-32"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl font-bold md:text-2xl">
                  {card.title}
                </h1>
                <p className="mt-3 text-start font-semibold text-white-100">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
