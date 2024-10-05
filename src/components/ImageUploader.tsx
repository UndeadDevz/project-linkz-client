import React, { useState } from "react";
import Cookies from "js-cookie";
interface UploadResponse {
  data: {
    link: string;
  };
  success: boolean;
  status: number;
  url?: string;
}

interface Props {
  index: number | undefined;
}

const ImageUploader = ({ index }: Props) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const baseUrl = import.meta.env.VITE_API_URL;
  const uploadImage = async (file: File) => {
    const formData = new FormData();

    formData.append("image", file);

    try {
      setLoading(true);
      setError(null);
      console.log("data", formData.get("image"));
      const response = await fetch(`${baseUrl}/image/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Cookies.get("authToken")}`
        },
        body: formData
      });

      const result: UploadResponse = await response.json();

      if (result.url) {
        setImageinElement(result.url);
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
  };

  const setImageinElement = async (url: string) => {
    console.log("index", index);
    const response = await fetch(`${baseUrl}/image/upload`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("authToken")}`
      },
      body: JSON.stringify({
        template_id: "66feccbbf9719079303b50fa",
        index: index,
        url: url
      })
    });
  };

  return (
    <div className='flex flex-row gap-2 items-center'>
      <input
        type='file'
        accept='image/*'
        id='file-input'
        onChange={handleFileChange}
        className='hidden' // Hides the default file input
      />
      <label htmlFor='file-input' className='custom-file-upload'>
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
