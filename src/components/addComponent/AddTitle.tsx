import { Dispatch, SetStateAction, useRef, useState } from "react";
import { useEditorContext } from "../../hooks/useEditorContext";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { ILinkProps } from "../../context/EditorProvider";

interface Props {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setShowLink: Dispatch<SetStateAction<boolean>>;
  items: ILinkProps[];
}

export const AddTitle = ({ showModal, setShowModal, setShowLink }: Props) => {
  const { addTitle, title } = useEditorContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const title = new FormData(e.target as HTMLFormElement);
    addTitle(title.get("title") as string);
    setShowModal(false);
  };

  const divRef = useRef(null);

  useOnClickOutside(divRef, () => setShowModal(false));

  return (
    <>
      <div
        onClick={() => {
          setShowModal(true), setShowLink(false);
        }}
        className='w-fit h-fit p-2 text-md bg-blue-700 hover:bg-blue-800 rounded-lg text-center text-white justify-center flex items-center cursor-pointer'
      >
        Edit Title
      </div>
      {showModal && (
        <div
          ref={divRef}
          className='absolute w-96 h-40 top-[20%] left-1/2 -translate-x-1/2 bg-gray-100 px-8 py-4 z-10 shadow-sm shadow-black rounded-lg'
        >
          <div
            className='w-full text-right text-red-500 cursor-pointer'
            onClick={() => setShowModal(false)}
          >
            x
          </div>
          <h2 className='pb-2'>Enter Title</h2>
          <form onSubmit={handleSubmit} className='flex gap-2'>
            <input
              id='title'
              name='title'
              className='grow'
              autoComplete='off'
              value={title}
              onChange={(e) => addTitle(e.target.value)}
            />
            <button
              type='submit'
              className=' py-2 px-3 bg-blue-600 rounded-xl disabled:bg-gray-200 '
            >
              add
            </button>
          </form>
        </div>
      )}
    </>
  );
};
