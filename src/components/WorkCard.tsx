import { motion } from "motion/react";
type Props = {
  title: string;
  description: string;
  preview: string;
  color: string;
  url: string;
  index: number;
  style?: string;
  tags?: string[];
};

export default function WorkCard({
  title,
  description,
  preview,
  color,
  url,
  index,
  style,
  tags,
}: Props) {
  return (
    <motion.div
      className={`relative w-full overflow-hidden mb-8 md:mb-0 group ${index === 2 ? "" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.4, delay: index * 0.2 }}
    >
      <a
        href={url}
        className="relative"
        target={style === "modal" ? "_blank" : "_self"}
      >
        <div
          className={`img-wrapper overlay after:rounded-sm w-full ${style === "modal" ? "h-[200px]" : "h-[260px] md:h-[350px]"}`}
        >
          <img
            src={preview}
            alt="#"
            className="object-cover rounded-sm w-full h-full"
          />
        </div>
        <div
          className={`absolute top-[-100%] group-hover:top-0 transition-all duration-350 ease-out rounded-sm left-0 w-full h-full flex p-4 flex-col ${style !== "modal" ? "justify-between" : "justify-center"}`}
          style={{ backgroundColor: color }}
        >
          {style !== "modal" && (
            <>
              <p className="text-slate-200 text-xl group-hover:opacity-100 opacity-0 delay-300 transition-opacity pr-4">
                {description}
              </p>
              {tags && (
                <div className="flex-1 mt-3 ">
                  {tags?.map((tag) => {
                    return (
                      <p className="bg-black mr-2 text-slate-200 text-xs py-0.5 px-2 rounded-md w-fit inline-flex items-center justify-center">
                        {tag}
                      </p>
                    );
                  })}
                </div>
              )}
            </>
          )}
          <div className="px-4 py-2 font-bold bg-slate-50  hover:bg-slate-200 transition-all inline-block rounded-md text-center max-w-[320px] mx-auto">
            Découvrir
          </div>
        </div>
      </a>
      <h3 className="mt-2 text-xl">{title}</h3>
    </motion.div>
  );
}
