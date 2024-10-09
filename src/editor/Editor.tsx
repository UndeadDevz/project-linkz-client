import { Navbar } from "./navbar/Navbar";
import { LinkSection } from "../components/LinkSection";
import { Preview } from "../components/Preview";
import { useState } from "react";
import { AppearanceSection } from "../components/AppearanceSection";
import { StyleProvider } from "../context/StyleContext";
import { EditorProvider } from "../context/EditorProvider";
import { AddLink } from "@/components/addComponent/AddLink";
import { AddHeader } from "@/components/addComponent/AddHeader";
import { AddTitle } from "@/components/addComponent/AddTitle";
import ImageUploader from "@/components/ImageUploader";
import { useEditorContext } from "@/hooks/useEditorContext";

export const Editor = () => {
  const { items } = useEditorContext();

  const [selected, setSelected] = useState("links");

  const [showHeader, setShowHeader] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  return (
    <EditorProvider>
      <StyleProvider>
        <div className="w-full h-full min-h-screen flex flex-col bg-gray-700">
          <div className="w-full flex items-center justify-center">
            <Navbar selected={selected} setSelected={setSelected} />
          </div>
          <div className="flex flex-row h-full pt-2">
            <div className="w-[10%] pt-2 xl:max-w-[670px] max-w-[400px]  items-start justify-center flex  border-l border-gray-300">
              <div className="flex flex-col gap-4">
                <AddLink
                  showModal={showLink}
                  setShowModal={setShowLink}
                  setShowHeader={setShowHeader}
                />
                <AddHeader
                  showModal={showHeader}
                  setShowModal={setShowHeader}
                  setShowLink={setShowLink}
                />
                <AddTitle
                  showModal={showTitle}
                  setShowModal={setShowTitle}
                  setShowLink={setShowLink}
                  items={items}
                />
                <ImageUploader id="photo" />
              </div>
            </div>
            <div className="grow flex justify-center">
              {selected === "links" && <LinkSection />}
              {selected === "appearance" && <AppearanceSection />}
            </div>
            <div className="w-2/6 pt-2 xl:max-w-[670px] max-w-[400px]  items-center justify-center flex  border-l border-gray-300">
              <Preview />
            </div>
          </div>
        </div>
      </StyleProvider>
    </EditorProvider>
  );
};
