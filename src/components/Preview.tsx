import { useEffect } from "react";
import { useEditorContext } from "../hooks/useEditorContext";
import { HeaderPreview } from "./preview/HeaderPreview";
import { LinkPreview } from "./preview/linkPreview/LinkPreview";
import { getUserTemplates } from "../services/template.service";
import { nanoid } from "nanoid";
import { useStyleContext } from "../context/StyleContext";
import { HeaderImage } from "./preview/HeaderImage";
import { TitlePreview } from "./preview/TitlePreview";
const componentMap = {
  link: LinkPreview,
  header: HeaderPreview
};
export const Preview = () => {
  const {
    items,
    setSetItems,
    title,
    addTitle,
    addPhoto,
    background,
    addBackground,
    setTemplate_id
  } = useEditorContext();

  const { loadAppearanceFromBack, appearance } = useStyleContext();

  useEffect(() => {
    (async () => {
      const response = await getUserTemplates();

      console.log(response[0].background);

      loadAppearanceFromBack({
        headerStyle: response[0].headerStyle,
        linkStyle: response[0].linkStyle,
        titleStyle: response[0].titleStyle
      });

      addPhoto(response[0].photo);

      addBackground(response[0].background);

      setTemplate_id(response[0].template_id);

      addTitle(response[0].title);
      setSetItems(
        response[0].items.map((el: any) => ({
          ...el,
          id: nanoid(7),
          type: el.type
        }))
      );
    })();
  }, []);

  return (
    <div
      style={{ backgroundColor: background }}
      className={`xl:w-9/12 w-11/12 h-full rounded-[3rem] shadow-lg shadow-gray-400 px-4 py-10`}
      onClick={() => console.log(background)}
    >
      <div className='overflow-auto scrollbar-none h-full w-full'>
        <HeaderImage />
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
