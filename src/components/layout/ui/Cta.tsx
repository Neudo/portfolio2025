type Props = {
  text: string;
  download?: boolean;
  variant?: string;
  href?: string;
  onClick?: () => void;
  classes?: string;
};

export default function Cta({
  text,
  download,
  variant,
  href,
  onClick,
  classes,
}: Props) {
  const className =
    variant === "outline"
      ? "px-6 py-2 border-1 border-white text-white w-fit rounded-2xl cursor-pointer"
      : "px-6 py-2 bg-green-200 text-black w-fit rounded-2xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-green-100";

  // If onClick is provided, render as button
  if (onClick) {
    return (
      <button onClick={onClick} className={className + " " + classes}>
        {text}
      </button>
    );
  }

  // Otherwise render as anchor
  return (
    <a href={href} className={className} download={download}>
      {text}
    </a>
  );
}
