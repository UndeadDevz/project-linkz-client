import { IAppearance, useStyleContext } from "../../context/StyleContext";

export const TitlePreview = ({
  title,
  appearanceProp,
}: {
  title: string;
  appearanceProp?: IAppearance;
}) => {
  const { appearance } = useStyleContext();
  let styles = appearanceProp || appearance;
  return (
    <h2
      key={title}
      style={{
        ...styles.titleStyle,
        color: styles.titleStyle.fontColor,
        fontFamily: styles.titleStyle.fontStyle,
      }}
      className="block h-fit w-full my-0.5 text-center"
    >
      {title}
    </h2>
  );
};
