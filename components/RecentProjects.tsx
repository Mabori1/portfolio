import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading text-3xl font-bold">
        Небольшая подборка {"  "}
        <span className="text-purple">последних проектов</span>
      </h1>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
        {projects.map(({ id, title, des, img, link, iconLists }) => (
          <div
            key={id}
            className="flex h-[32rem] w-[80vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[35.5rem]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px]">
                <div className="h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                  <Image width={552} height={330} src="/bg.png" alt="bg-img" />
                </div>
                <Image
                  src={img}
                  width={464}
                  height={300}
                  alt={title}
                  className="absolute bottom-0 z-10"
                />
              </div>
              <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                {title}
              </h1>
              <p className="line-clamp-2 text-sm lg:text-xl lg:font-normal">
                {des}
              </p>
              <div className="mb-3 mt-7 flex items-center justify-between">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      key={icon}
                    >
                      <Image src={icon} width={27} height={24} alt={icon} />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <p className="flex text-sm text-purple md:text-xs lg:text-xl">
                    Посмотреть готовую реализацию
                  </p>
                  <FaLocationArrow className="ms-3" color="#cbacf9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
