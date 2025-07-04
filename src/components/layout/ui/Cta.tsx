type Props = {
  text: string;
  download?: boolean;
  variant?: string;
  href?: string;
};

export default function Cta({ text, download, variant, href }: Props) {
  return (
    <a
      href={href}
      className={
        variant === "outline"
          ? "px-6 py-2 border-1 border-white text-white w-fit rounded-2xl cursor-pointer"
          : "px-6 py-2 bg-green-200 text-black w-fit rounded-2xl cursor-pointer"
      }
      download={download}
    >
      {text}
    </a>
  );
}
