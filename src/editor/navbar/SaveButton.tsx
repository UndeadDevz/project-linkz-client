import { useStyleContext } from "../../context/StyleContext";
import { useEditorContext } from "../../hooks/useEditorContext";
import { updateTemplate } from "../../services/template.service";

export const SaveButton = () => {
  const { items, title, photo, background } = useEditorContext();
  const { appearance } = useStyleContext();

  const parsedItems = items.map((el: any) => {
    const { id, ...rest } = el;

    return rest;
  });

  const { ...rest } = appearance;

  const handleUpdateTemplate = async () => {
    await updateTemplate("66feccbbf9719079303b50fa", {
      items: parsedItems,
      title,
      photo,
      background,
      ...rest
    });
  };

  return (
    <button
      onClick={handleUpdateTemplate}
      className='bg-blue-600 text-white text-lg h-full px-4 rounded-md'
    >
      Save
    </button>
  );
};
