import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pb-10 pt-20" id="contact">
      <div className="absolute -bottom-72 left-0 min-h-72 w-full">
        <img
          src="/footer-grid.svg"
          alt="footer"
          className="size-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Готов вывести <span className="text-purple">Ваше</span> цифровое
          присутствие на новый уровень
        </h1>
        <p className="mt-5 text-center text-lg text-white-200 md:mt-10">
          Свяжитесь со мной сегодня, и давайте обсудим, как я могу помочь вам
          достичь ваших целей
        </p>
        <a href="mailto:makeevhome@gmail.com">
          <MagicButton
            title="Связаться сейчас"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="mt-16 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright © 2024 Алексей Макеев
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="saturate-180 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
            >
              <a href={info.href} className="">
                <img src={info.img} alt="icons" sizes="20px" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
