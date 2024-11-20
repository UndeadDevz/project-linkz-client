import { useEffect, useState } from "react";
import { useEditorContext } from "../hooks/useEditorContext";
import { HeaderPreview } from "./preview/HeaderPreview";
import { LinkPreview } from "./preview/linkPreview/LinkPreview";
import { getTemplate } from "../services/template.service";
import { nanoid } from "nanoid";
import { useStyleContext } from "../context/StyleContext";
import { HeaderImage } from "./preview/HeaderImage";
import { TitlePreview } from "./preview/TitlePreview";
import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import Tablet from "../models/Tablet";
import { OrbitControls } from "@react-three/drei";
const componentMap = {
  link: LinkPreview,
  header: HeaderPreview,
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
    setTemplate_id,
    photo,
  } = useEditorContext();
  const { appearance } = useStyleContext();
  const { template_id } = useParams();
  const { loadAppearanceFromBack } = useStyleContext();
  const [is3d, set3d] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await getTemplate(template_id || "");

      loadAppearanceFromBack({
        headerStyle: response.headerStyle,
        linkStyle: response.linkStyle,
        titleStyle: response.titleStyle,
      });

      addPhoto(response.photo);

      addBackground(response.background);

      setTemplate_id(response.template_id);

      addTitle(response.title);
      setSetItems(
        response.items.map((el: any) => ({
          ...el,
          id: nanoid(7),
          type: el.type,
        }))
      );
    })();
  }, []);

  return (
    <>
      <button
        className="absolute top-0 left-0 bg-slate-950 text-white px-4 py-2 rounded-md m-4 z-10"
        onClick={() => set3d(!is3d)}
      >
        3D
      </button>
      {is3d ? (
        <>
          <Canvas className="h-screen absolute">
            <ambientLight intensity={10} />
            <OrbitControls />
            <Tablet data={items} />
          </Canvas>
        </>
      ) : (
        <div
          style={{ backgroundColor: background }}
          className={`xl:w-9/12 w-11/12 h-full min-h-[500px] rounded-[3rem] shadow-lg shadow-gray-400 px-4 py-10`}
        >
          <div className="overflow-auto scrollbar-none h-full w-full">
            <HeaderImage photoprop={photo} />
            <TitlePreview title={title} appearanceProp={appearance} />
            {items
              .filter((el) => el.enabled)
              .map((item) => {
                // @ts-ignore
                const PreviewComponent = componentMap[item.type];

                if (!PreviewComponent) {
                  return null; // Maneja un caso por defecto si es necesario
                }
                return (
                  <PreviewComponent
                    item={item}
                    key={item.id}
                    style={appearance}
                  />
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};
