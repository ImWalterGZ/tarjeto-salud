"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { KeyboardArrowDown } from "@material-symbols-svg/react";
import { UnderLineElem } from "../ui/Button/ButtonNavLinks";
import Link from "next/link";
import config from "@/config";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <div className="border border-border-default rounded-4xl overflow-hidden hover:bg-btn-ghost-bg-hover active:bg-btn-ghost-bg-active duration-300 shadow-md hover:shadow-lg">
        <button
          className={`relative flex items-center justify-between w-full text-left min-h-10.5 py-4 pl-8 pr-4 cursor-pointer`}
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          aria-expanded={isOpen}
        >
          <h3
            className={`text-md font-medium text-content-text-primary ${isOpen ? "text-primary" : ""}`}
          >
            {item?.question}
          </h3>

          <KeyboardArrowDown
            className={`w-10 h-auto transform origin-center transition duration-300 ease-out text-content-icon-muted ${
              isOpen && "rotate-x-180 text-content-icon-secondary"
            }`}
          />
        </button>
        <div
          ref={accordion}
          className="overflow-clip transition-all duration-300 ease-in-out"
          style={
            isOpen
              ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
              : { maxHeight: 0, opacity: 0 }
          }
        >
          <div className="py-4 px-8 text-left">{item?.answer}</div>
        </div>
      </div>
    </li>
  );
};

const FAQ = ({ faqList }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="bg-surface-base mt-10 scroll-mt-28"
      id="faq"
    >
      <div className="w-full h-auto py-16 px-4 flex flex-col gap-8 md:px-32 items-center justify-center text-center ">
        <div className="flex flex-col items-center justify-center text-center gap-12">
          <h2 className="text-h1 font-domine font-bold text-content-text-brand">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-content-text-secondary">
            Esto es lo que más nos preguntan antes de empezar.
          </p>
        </div>

        <ul className="flex flex-col gap-8 w-full max-w-212.5">
          {faqList.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Item item={item} />
            </motion.div>
          ))}
        </ul>
        <div className="flex flex-col items-center text-center gap-3">
          <p className="text-md text-content-text-secondary">¿No encontraste lo que buscabas? </p>
          <Link
            href={`mailto:${config.mailAddress}`}
            className="group relative inline-flex items-center text-content-text-brand duration-150 active:scale-75"
          >
            <span className="text-md font-bold transition-transform duration-150 group-hover:-translate-y-0.5">
              Ir al centro de ayuda.
            </span>
            <UnderLineElem />
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default FAQ;
