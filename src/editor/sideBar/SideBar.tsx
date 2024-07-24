import { useState } from "react";
import { FaList } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

export const SideBar = () => {
  const listItems: { name: string; label: string; icon: any }[] = [
    {
      name: "links",
      label: "Links",
      icon: <FaList />
    },
    {
      name: "appearance",
      label: "Appearance",
      icon: <FaPaintBrush />
    },
    {
      name: "settings",
      label: "Settings",
      icon: <FaGear />
    }
  ];

  const [selected, setSelected] = useState("links");

  const handleSelect = (name: string) => {
    setSelected(name);
  };

  return (
    <div className='w-full shadow rounded-md'>
      <div className='h-10'></div>
      {listItems.map((item) => {
        return (
          <div
            onClick={() => handleSelect(item.name)}
            className={`cursor-pointer flex flex-row gap-2 text-base font-semibold text-gray-600 ${
              selected === item.name && "text-blue-600"
            }`}
          >
            <div
              className={`${
                selected === item.name && "bg-blue-600"
              } rounded-r-md w-1`}
            ></div>
            <div className='flex h-full items-center justify-center'>
              {item.icon}
            </div>
            {item.label}
          </div>
        );
      })}
    </div>
  );
};
