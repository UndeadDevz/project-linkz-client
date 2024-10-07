import { Dispatch, SetStateAction, useRef, useState } from "react";
import { useEditorContext } from "../../hooks/useEditorContext";
import useOnClickOutside from "../../hooks/useOnClickOutside";

interface Props {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setShowHeader: Dispatch<SetStateAction<boolean>>;
}

export const AddLink = ({ showModal, setShowModal, setShowHeader }: Props) => {
  const { addLink } = useEditorContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = new FormData(e.target as HTMLFormElement);

    addLink(url.get("url") as string);
    setShowModal(false);
  };

  const divRef = useRef(null);

  useOnClickOutside(divRef, () => setShowModal(false));

  return (
    <>
      <div
        onClick={() => {
          setShowModal(true), setShowHeader(false);
        }}
        className='w-full h-16 text-xl bg-red-700 rounded-lg text-center cursor-pointer hover:bg-red-800 text-white justify-center flex items-center'
      >
        + add link
      </div>
      {showModal && (
        <div
          ref={divRef}
          className='absolute w-full top-[20%] left-0 bg-gray-100 px-8 py-4 rounded-lg z-10 shadow-sm shadow-black font-nunito'
        >
          <div
            className='w-full text-right text-red-500 cursor-pointer'
            onClick={() => setShowModal(false)}
          >
            x
          </div>
          <h2 className='pb-2'>Enter Url</h2>
          <form onSubmit={handleSubmit} className='flex gap-2'>
            <input id='url' name='url' className='grow outline-none' />
            <button
              type='submit'
              className=' py-2 px-3 bg-blue-600 rounded-xl text-white disabled:bg-gray-200 '
            >
              add
            </button>
          </form>
        </div>
      )}
    </>
  );
};
