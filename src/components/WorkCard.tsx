import { motion } from "motion/react";
type Props = {
  title: string;
  preview: string;
  url: string;
  index: number;
  style?: string;
};

export default function WorkCard({ title, preview, url, index, style }: Props) {
  return (
    <motion.div
      className={`relative w-full overflow-hidden mb-8 md:mb-0 group ${index === 2 ? "" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: index % 2 === 0 ? 0 : 0.2 }}
    >
      <a
        href={url}
        className="relative"
        target={style === "modal" ? "_blank" : "_self"}
      >
        <div
          className={`img-wrapper overlay after:rounded-sm w-full shadow-lg ${style === "modal" ? "h-[200px]" : "h-[260px] md:h-[350px]"}`}
        >
          <img
            src={preview}
            alt="#"
            className="object-cover rounded-sm w-full h-full"
          />
        </div>
      </a>
      <motion.h3
        className="mt-2 text-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index % 2 === 0 ? 0.2 : 0.4 }}
      >
        {title}
      </motion.h3>
    </motion.div>
  );
}
