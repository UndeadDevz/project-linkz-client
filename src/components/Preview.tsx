import { useEffect } from "react";
import { useEditorContext } from "../hooks/useEditorContext";
import { HeaderPreview } from "./HeaderPreview";
import { LinkPreview } from "./LinkPreview";
import { getUserTemplates } from "../services/template.service";
import { nanoid } from "nanoid";
import { useStyleContext } from "../context/StyleContext";
import { TitlePreview } from "./TitlePreview";
const componentMap = {
  link: LinkPreview,
  header: HeaderPreview
};
export const Preview = () => {
  const { items, setSetItems, title, addTitle } = useEditorContext();

  const { loadAppearanceFromBack, appearance } = useStyleContext();

  useEffect(() => {
    (async () => {
      const response = await getUserTemplates();
      console.log("links", response);

      loadAppearanceFromBack({
        headerStyle: response[0].headerStyle,
        linkStyle: response[0].linkStyle,
        titleStyle: response[0].titleStyle
      });

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
      className='xl:w-9/12 w-11/12 h-full bg-blue-500 rounded-[3rem] shadow-lg shadow-gray-400 px-2 py-10 '
      onClick={() => console.log(appearance)}
    >
      <div className='overflow-auto scrollbar-none h-full w-full'>
        <TitlePreview title={title} />
        {items
          .filter((el) => el.enabled)
          .map((item) => {
            //@ts-ignore
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
