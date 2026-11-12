"use client";
import Icon from "../ui/Icon/Icon";
import Pill from "../ui/Pill/Pill";

const Feature = ({ PrimarySymbol, reverse = true, Title, Description, Pills, Visual }) => {
  return (
    <div
      className={`w-full h-1/3 flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center md:justify-center md:gap-16`}
    >
      <div className="w-full max-w-150 h-auto flex flex-col gap-4">
        {PrimarySymbol && <Icon PrimarySymbol={PrimarySymbol} />}

        <h3 className="text-h1 font-domine font-bold">{Title}</h3>
        <p className="text-md">{Description}</p>
        {Pills &&
          Pills.map((pill, i) => {
            const PillIcon = pill.icon;
            return (
              <Pill
                key={i}
                icon={<PillIcon className="size-5 text-content-icon-brand" />}
                label={pill.label}
                width={pill.width}
                delay={0.1 * (i + 1)}
              />
            );
          })}
      </div>
      <div
        className={`w-full max-w-105 ${reverse ? "md:-rotate-2" : "md:rotate-2"}`}
      >
        {Visual}
      </div>
    </div>
  );
};

export default Feature;
