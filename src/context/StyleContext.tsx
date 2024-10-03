import { createContext, useContext, useState } from "react";

const StyleContext = createContext<IStyleContext>({
  appearance: { linkStyle: {}, headerStyle: {}, titleStyle: {} },
  changeAppearance: () => {},
  loadAppearanceFromBack: () => {},
});
interface IStyleContext {
  appearance: IAppearance;
  changeAppearance: (
    field: keyof IAppearance,
    key: string,
    value: string
  ) => void;
  loadAppearanceFromBack: (style: any) => void;
}
interface IAppearance {
  //TODO add type for each Style
  linkStyle: Record<string, any>;
  headerStyle: Record<string, any>;
  titleStyle: Record<string, any>;
}
export const StyleProvider = ({ children }: { children: JSX.Element }) => {
  const [appearance, setAppearance] = useState<IAppearance>({
    linkStyle: { background: "#FFFFFF" }, // TODO add mock for each one
    headerStyle: {},
    titleStyle: { background: "#FFFFFF" },
  });

  const loadAppearanceFromBack = (style: any) => {
    setAppearance((prev) => ({
      ...prev,
      ...style,
    }));
  };

  const changeAppearance = (
    field: keyof IAppearance,
    key: string,
    value: string
  ) => {
    setAppearance((prev) => ({
      ...prev,
      [field]: { ...prev[field], [key]: value },
    }));
  };

  return (
    <StyleContext.Provider
      value={{ appearance, changeAppearance, loadAppearanceFromBack }}
    >
      {children}
    </StyleContext.Provider>
  );
};

export const useStyleContext = () => {
  return useContext(StyleContext);
};
