type Props = {
  title: string;
  description: string;
  preview: string;
  color: string;
  tags: string[];
  url: string;
};
export default function WorkCard({
  title,
  description,
  preview,
  color,
  tags,
  url,
}: Props) {
  return (
    <div className="relative w-full">
      <a href={url}>
        <div className="img-wrapper">
          <img src={preview} alt="#" className="object-cover rounded-sm" />
        </div>
        <div className="absolute top-2 left-2">
          <p>{description}</p>
        </div>
      </a>
      <h3 className="mt-2 text-xl">{title}</h3>
    </div>
  );
}
