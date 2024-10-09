import { UniqueIdentifier } from "@dnd-kit/core";

interface Props {
  id: UniqueIdentifier;
  link: string;
  name: string;
  image: string;
  style: any;
}

export const LinkImagePreview = ({ name, image, style }: Props) => {
  return (
    <div className="overflow-hidden w-full h-32 relative">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
      />
      <p
        className="text-white absolute bottom-4 left-4"
        style={{ color: style.fontColor }}
      >
        {name}
      </p>
      :
    </div>
  );
};
