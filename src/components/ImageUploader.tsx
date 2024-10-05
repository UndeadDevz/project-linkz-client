import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useEditorContext } from "../hooks/useEditorContext";
import { ILinkProps } from "../context/EditorProvider";
interface UploadResponse {
  data: {
    link: string;
  };
  success: boolean;
  status: number;
  url?: string;
}

interface Props {
  id: any;
}

const ImageUploader = ({ id }: Props) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const baseUrl = import.meta.env.VITE_API_URL;
  const { items, setSetItems } = useEditorContext();

  const uploadImage = async (file: File) => {
    console.log("upload", id);
    const formData = new FormData();

    formData.append("image", file);

    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${baseUrl}/image/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Cookies.get("authToken")}`
        },
        body: formData
      });

      const result: UploadResponse = await response.json();

      if (result.url) {
        handleChange(result.url);
        setImageUrl(result.url);
      } else {
        setError("Error uploading image");
      }
    } catch (err) {
      setError("Error uploading image");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      uploadImage(file);
    }
    console.log("filechange", id);
  };

  const handleChange = (imageUrl: string) => {
    const editIndex = items.findIndex((el: ILinkProps) => el.id === id);

    const modifiedItems = [...items];
    modifiedItems[editIndex] = { ...modifiedItems[editIndex], image: imageUrl };
    setSetItems(modifiedItems);
  };

  return (
    <div className='flex flex-row gap-2 items-center'>
      <input
        type='file'
        accept='image/*'
        id={id}
        onChange={handleFileChange}
        className='hidden'
      />
      <label htmlFor={id} className='custom-file-upload'>
        Upload Image
      </label>
      {loading && <p>Uploading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {imageUrl && (
        <div>
          <p>Image uploaded successfully:</p>
          <a href={imageUrl} target='_blank' rel='noopener noreferrer'>
            {imageUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
