import { useEffect } from "react";
import { useEditorContext } from "../hooks/useEditorContext";
import { HeaderPreview } from "./HeaderPreview";
import { LinkPreview } from "./preview/linkPreview/LinkPreview";
import { getUserTemplates } from "../services/template.service";
import { nanoid } from "nanoid";
import { useStyleContext } from "../context/StyleContext";
import { TitlePreview } from "./TitlePreview";
import { HeaderImage } from "./preview/HeaderImage";
const componentMap = {
  link: LinkPreview,
  header: HeaderPreview,
};
export const Preview = () => {
  const { items, setSetItems, title, addTitle } = useEditorContext();

  const { loadAppearanceFromBack, appearance } = useStyleContext();

  useEffect(() => {
    (async () => {
      const response = await getUserTemplates();

      loadAppearanceFromBack({
        headerStyle: response[0].headerStyle,
        linkStyle: response[0].linkStyle,
        titleStyle: response[0].titleStyle,
      });

      addTitle(response[0].title);

      setSetItems(
        response[0].items.map((el: any) => ({
          ...el,
          id: nanoid(7),
          type: el.type,
        }))
      );
    })();
  }, []);

  const imageUrl =
    "http://res.cloudinary.com/dyawxpem7/image/upload/v1728151072/jtduhgzmz9fzhbi2ctcn.webp";

  return (
    <div className="xl:w-9/12 w-11/12 h-full bg-gray-800 rounded-[3rem] shadow-lg shadow-gray-400 px-4 py-10 ">
      <div className="overflow-auto scrollbar-none h-full w-full">
        <HeaderImage url={imageUrl} />
        <TitlePreview title={title} />
        {items
          .filter((el) => el.enabled)
          .map((item) => {
            // @ts-ignore
            const PreviewComponent = componentMap[item.type];

            if (!PreviewComponent) {
              return null; // Maneja un caso por defecto si es necesario
            }
            return <PreviewComponent item={item} key={item.id} />;
          })}
      </div>
    </div>
  );
};
