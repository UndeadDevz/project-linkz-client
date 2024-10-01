import { Dispatch, SetStateAction, useRef, useState } from "react";
import { useEditorContext } from "../hooks/useEditorContext";
import useOnClickOutside from "../hooks/useOnClickOutside";

interface Props {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setShowLink: Dispatch<SetStateAction<boolean>>;
}

export const AddHeader = ({ showModal, setShowModal, setShowLink }: Props) => {
  const { addHeader } = useEditorContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const header = new FormData(e.target as HTMLFormElement);

    addHeader(header.get("header") as string);
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
        + Header
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
          <h2 className='pb-2'>Enter Header</h2>
          <form onSubmit={handleSubmit} className='flex gap-2'>
            <input
              id='header'
              name='header'
              className='grow'
              autoComplete='off'
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
