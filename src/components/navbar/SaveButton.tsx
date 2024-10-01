import { useStyleContext } from "../../context/StyleContext";
import { useEditorContext } from "../../hooks/useEditorContext";
import { updateTemplate } from "../../services/template.service";

export const SaveButton = () => {
  const { items } = useEditorContext();
  const { appearance } = useStyleContext();

  const parsedItems = items.map((el: any) => {
    const { id, ...rest } = el;

    return rest;
  });

  const { titleStyle, ...rest } = appearance;

  const handleUpdateTemplate = async () => {
    await updateTemplate("66fb117f2a4aa0d98c0a0e1d", {
      items: parsedItems,
      ...rest,
    });
  };

  return (
    <button
      onClick={handleUpdateTemplate}
      className="bg-blue-600 text-white text-lg h-full px-4 rounded-md"
    >
      Save
    </button>
  );
};
