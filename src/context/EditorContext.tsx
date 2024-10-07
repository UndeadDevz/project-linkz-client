import { UniqueIdentifier } from "@dnd-kit/core";

import { createContext } from "react";
import { ILinkProps } from "./EditorProvider";

export const EditorContext = createContext<IEditorContext>({
  items: [],
  title: "",
  setSetItems: () => {},
  addLink: () => {},
  addHeader: () => {},
  addTitle: () => {},
  deleteElement: () => {},
  photo: "string",
  addPhoto: () => {},
  background: "",
  addBackground: () => {},
  template_id: "",
  setTemplate_id: () => {}
});
export interface IEditorContext {
  items: ILinkProps[];
  title: string;
  setSetItems: (value: ILinkProps[]) => void;
  addLink: (url: string) => void;
  addHeader: (header: string) => void;
  addTitle: (title: string) => void;
  deleteElement: (value: UniqueIdentifier) => void;
  photo: string;
  addPhoto: (url: string) => void;
  background: string;
  addBackground: (color: string) => void;
  template_id: string;
  setTemplate_id: (id: string) => void;
}
