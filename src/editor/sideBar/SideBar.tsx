import { FaList } from 'react-icons/fa'
import { FaPaintBrush } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'

export const SideBar = ({
  selected,
  setSelected
}: {
  selected: string
  setSelected: (prev: string) => void
}) => {
  const listItems: { name: string; label: string; icon: any }[] = [
    {
      name: 'links',
      label: 'Links',
      icon: <FaList />
    },
    {
      name: 'appearance',
      label: 'Appearance',
      icon: <FaPaintBrush />
    },
    {
      name: 'settings',
      label: 'Settings',
      icon: <FaGear />
    }
  ]

  const handleSelect = (name: string) => {
    setSelected(name)
  }

  return (
    <div className='w-11/12 h-full rounded-3xl shadow-lg shadow-gray-400 bg-white'>
      <div className='h-10'></div>
      {listItems.map((item, key) => {
        return (
          <div
            onClick={() => handleSelect(item.name)}
            key={key}
            className={`cursor-pointer flex flex-row gap-2 text-base font-semibold h-8 text-gray-600`}
          >
            <div
              className={`${
                selected === item.name && 'bg-blue-600'
              } rounded-r-md w-1`}
            ></div>
            <div
              className={`flex h-full items-center justify-center ${
                selected === item.name && 'text-blue-600'
              }`}
            >
              {item.icon}
            </div>
            <div
              className={`flex h-full items-center justify-center ${
                selected === item.name && 'text-blue-600'
              }`}
            >
              {item.label}
            </div>
          </div>
        )
      })}
    </div>
  )
}
