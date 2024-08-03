import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const text = "Преобразование концепций в единый пользовательский опыт";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* Spotlight */}
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[80vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[80vw]" fill="blue" />
      </div>

      {/* grid */}
      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.3] dark:bg-black-100 dark:bg-grid-white/[0.1]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>
      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vh] flex-col items-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="max-w-80 text-center text-xl font-bold uppercase tracking-wide text-blue-100">
            Магические и динамичные сайты с Next.js
          </h2>
          <TextGenerateEffect
            words={text}
            className="mt-6 text-center text-[40px] font-bold text-white md:text-5xl lg:text-6xl"
          />
          <p className="my-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            Привет! Я Алексей. Веб разработчик из Краснодара
          </p>
          <a href="#projects" className="">
            <MagicButton
              title="Показать мои работы"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
