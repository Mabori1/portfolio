import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading mb-10 text-3xl font-bold">
        Добрые слова от {"  "}
        <span className="text-purple">довольных клиентов</span>
      </h1>
      <div className="flex flex-col items-center">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed={"slow"}
        />
        <div className="md:ga16 flex flex-wrap items-center justify-center gap-4 max-lg:my-10">
          {companies.map(({ id, name, img, nameImg }) => (
            <div className="flex max-w-32 gap-2 md:max-w-60" key={id}>
              <img src={img} className="w-5 md:w-10" alt={name} />
              <img src={nameImg} className="w-20 md:w-24" alt={name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
