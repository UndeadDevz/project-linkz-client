import { useEffect } from 'react'
import { useEditorContext } from '../hooks/useEditorContext'
import { HeaderPreview } from './preview/HeaderPreview'
import { LinkPreview } from './preview/linkPreview/LinkPreview'
import { getTemplate } from '../services/template.service'
import { nanoid } from 'nanoid'
import { useStyleContext } from '../context/StyleContext'
import { HeaderImage } from './preview/HeaderImage'
import { TitlePreview } from './preview/TitlePreview'
import { useParams } from 'react-router-dom'
const componentMap = {
  link: LinkPreview,
  header: HeaderPreview
}
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
  } = useEditorContext()
  const { template_id } = useParams()
  const { loadAppearanceFromBack } = useStyleContext()

  useEffect(() => {
    ;(async () => {
      const response = await getTemplate(template_id || '')

      loadAppearanceFromBack({
        headerStyle: response.headerStyle,
        linkStyle: response.linkStyle,
        titleStyle: response.titleStyle
      })

      addPhoto(response.photo)

      addBackground(response.background)

      setTemplate_id(response.template_id)

      addTitle(response.title)
      setSetItems(
        response.items.map((el: any) => ({
          ...el,
          id: nanoid(7),
          type: el.type
        }))
      )
    })()
  }, [])

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
            const PreviewComponent = componentMap[item.type]

            if (!PreviewComponent) {
              return null // Maneja un caso por defecto si es necesario
            }
            return <PreviewComponent item={item} key={item.id} />
          })}
      </div>
    </div>
  )
}
