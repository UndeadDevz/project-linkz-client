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
        <div className='w-full h-screen flex flex-col bg-gray-200'>
          <div className='w-full p-2 flex items-center justify-center py-4'>
            <SideBar selected={selected} setSelected={setSelected} />
          </div>
          <div className='flex flex-row h-full'>
            <div className='grow flex justify-center pt-8'>
              {selected === "links" && <LinkSection />}
              {selected === "appearance" && <AppearanceSection />}
            </div>
            <div className='w-2/6 xl:max-w-[670px] max-w-[400px]  items-center justify-center flex  border-l border-gray-300'>
              <Preview />
            </div>
          </div>
        </div>
      </StyleProvider>
    </EditorProvider>
  );
};
