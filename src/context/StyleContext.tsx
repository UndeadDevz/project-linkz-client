import { createContext, useContext, useState } from 'react'

const StyleContext = createContext<IStyleContext>({
  appearance: { linkStyle: {}, headerStyle: {}, titleStyle: {} },
  changeAppearance: () => {}
})
interface IStyleContext {
  appearance: IAppearance
  changeAppearance: (
    field: keyof IAppearance,
    key: string,
    value: string
  ) => void
}
interface IAppearance {
  //TODO add type for each Style
  linkStyle: Record<string, any>
  headerStyle: Record<string, any>
  titleStyle: Record<string, any>
}
export const StyleProvider = ({ children }: { children: JSX.Element }) => {
  const [appearance, setAppearance] = useState<IAppearance>({
    linkStyle: { backgroundColor: '#FFFFFF' }, // TODO add mock for each one
    headerStyle: {},
    titleStyle: { backgroundColor: '#FFFFFF' }
  })

  const changeAppearance = (
    field: keyof IAppearance,
    key: string,
    value: string
  ) => {
    setAppearance((prev) => ({
      ...prev,
      [field]: { ...prev[field], [key]: value }
    }))
  }

  return (
    <StyleContext.Provider value={{ appearance, changeAppearance }}>
      {children}
    </StyleContext.Provider>
  )
}

export const useStyleContext = () => {
  return useContext(StyleContext)
}
