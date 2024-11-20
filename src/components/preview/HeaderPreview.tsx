import { useEffect, useState } from "react";
import { ILinkProps } from "../../context/EditorProvider";
import { useStyleContext } from "../../context/StyleContext";

export const HeaderPreview = ({
  item,
  style,
}: {
  item: ILinkProps;
  style: any;
}) => {
  const [styles, setStyles] = useState<Record<string, any>>();

  useEffect(() => {
    setStyles(style);
  }, [style]);
  console.log("style", styles);

  return (
    <h2
      key={item.id}
      style={{
        ...styles?.headerStyle,
        color: styles?.headerStyle.fontColor,
      }}
      className="block h-fit w-full my-0.5 text-center"
    >
      {item.name}
    </h2>
  );
};
