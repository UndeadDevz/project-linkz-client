import { useEditorContext } from "../../hooks/useEditorContext";

interface Props {
  photoprop?: string;
}

export const HeaderImage = ({ photoprop }: Props) => {
  const { photo } = useEditorContext();
  return (
    <div className="w-[150px] h-[150px] rounded-full m-auto mt-4">
      <img
        src={photoprop || photo}
        alt=""
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  );
};
