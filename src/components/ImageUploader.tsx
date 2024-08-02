import React, { useState } from 'react'

interface UploadResponse {
  data: {
    link: string
  }
  success: boolean
  status: number
}

const ImageUploader: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const uploadImage = async (file: File) => {

    const formData = new FormData()

    formData.append('image', file)
    formData.append('user_id', "669ebd8ab02ecf5d52e7aa50")

    try {
      setLoading(true)
      setError(null)

      const response = await fetch('http://localhost:3000/image/upload', {
        method: 'POST',
        body: formData
      })

      const result: UploadResponse = await response.json()

      console.log("result", result)

      if (result.success) {
        setImageUrl(result.data.link)
      } else {
        setError('Error uploading image')
      }
    } catch (err) {
      setError('Error uploading image')
    } finally {
      setLoading(false)
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      uploadImage(file)
    }
  }

  return (
    <div>
      <input type='file' accept='image/*' onChange={handleFileChange} />
      {loading && <p>Uploading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {imageUrl && (
        <div>
          <p>Image uploaded successfully:</p>
          <a href={imageUrl} target='_blank' rel='noopener noreferrer'>
            {imageUrl}
          </a>
          <img
            src={imageUrl}
            alt='Uploaded'
            style={{ maxWidth: '300px', marginTop: '10px' }}
          />
        </div>
      )}
    </div>
  )
}

export default ImageUploader
