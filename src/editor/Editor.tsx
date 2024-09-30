import { SideBar } from "./sideBar/SideBar";
import { LinkSection } from "../components/LinkSection";
import { Preview } from "../components/Preview";
import { useState } from "react";
import { AppearanceSection } from "../components/AppearanceSection";
import { StyleProvider } from "../context/StyleContext";
import { EditorProvider } from "../context/EditorProvider";

export const Editor = () => {
  const [selected, setSelected] = useState("links");

  return (
    <EditorProvider>
      <StyleProvider>
        <div className="w-full h-screen flex flex-row bg-gray-200">
          <div className="w-1/6 p-2 max-w-[400px] flex items-center justify-center py-4">
            <SideBar selected={selected} setSelected={setSelected} />
          </div>
          <div className="grow flex justify-center pt-8">
            {selected === "links" && <LinkSection />}
            {selected === "appearance" && <AppearanceSection />}
          </div>
          <div className="w-2/6 xl:max-w-[570px] max-w-[400px]  items-center justify-center flex  border-l border-gray-300">
            <Preview />
          </div>
        </div>
      </StyleProvider>
    </EditorProvider>
  );
};
