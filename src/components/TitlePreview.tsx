import { useStyleContext } from "../context/StyleContext";

export const TitlePreview = ({ title }: { title: string }) => {
  const { appearance } = useStyleContext();
  return (
    <h2
      key={title}
      style={{
        ...appearance.titleStyle,
        color: appearance.titleStyle.fontColor
      }}
      className='block h-fit w-full my-0.5 text-center'
      onClick={() => appearance}
    >
      {title}
    </h2>
  );
};
