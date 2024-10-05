import { useStyleContext } from "../../context/StyleContext";
import { useEditorContext } from "../../hooks/useEditorContext";
import { updateTemplate } from "../../services/template.service";

export const SaveButton = () => {
  const { items, title } = useEditorContext();
  const { appearance } = useStyleContext();

  const parsedItems = items.map((el: any) => {
    const { id, ...rest } = el;

    return rest;
  });

  const { ...rest } = appearance;

  const handleUpdateTemplate = async () => {
    console.log("rest", rest);
    await updateTemplate("66feccbbf9719079303b50fa", {
      items: parsedItems,
      title,
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
