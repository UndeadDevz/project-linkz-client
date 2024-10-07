import { ILinkProps } from "../../../context/EditorProvider";
import { useStyleContext } from "../../../context/StyleContext";
import { LinkImagePreview } from "./LinkImagePreview/LinkImagePreview";

export const LinkPreview = ({ item }: { item: ILinkProps }) => {
  const { appearance } = useStyleContext();
  return (
    <a
      href={item.url}
      key={item.id}
      style={appearance.linkStyle}
      className="h-auto min-h-14 w-full text-center my-4 rounded-md flex items-center justify-center border-none overflow-hidden"
    >
      {item && item.image ? (
        <LinkImagePreview
          id={item.id}
          image={item.image as string}
          name={item.name as string}
          link={item.url as string}
        />
      ) : (
        <p>{item.name}</p>
      )}
    </a>
  );
};
