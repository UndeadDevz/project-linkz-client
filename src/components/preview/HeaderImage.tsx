import { useEditorContext } from "../../hooks/useEditorContext";

export const HeaderImage = () => {
  const { photo } = useEditorContext();
  return (
    <div className='w-[150px] h-[150px] rounded-full m-auto mt-4'>
      <img
        src={photo}
        alt='header'
        className='w-full h-full object-cover rounded-full'
      />
    </div>
  );
};
