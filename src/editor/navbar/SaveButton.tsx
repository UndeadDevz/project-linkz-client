import { useStyleContext } from "../../context/StyleContext";
import { useEditorContext } from "../../hooks/useEditorContext";
import { updateTemplate } from "../../services/template.service";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SaveButton = () => {
  const { items, title, photo, background, template_id } = useEditorContext();
  const { appearance } = useStyleContext();

  const parsedItems = items.map((el: any) => {
    const { id, ...rest } = el;

    return rest;
  });

  const { ...rest } = appearance;

  const handleUpdateTemplate = async () => {
    try {
      await updateTemplate(template_id, {
        items: parsedItems,
        title,
        photo,
        background,
        ...rest
      });
      toast.success("Template updated successfully!");
    } catch (error) {
      toast.error("Failed to update the template!");
    }
  };

  return (
    <button
      onClick={handleUpdateTemplate}
      className='bg-blue-600 text-white text-lg h-8 px-4 rounded-md'
    >
      Save
      <ToastContainer />
    </button>
  );
};
