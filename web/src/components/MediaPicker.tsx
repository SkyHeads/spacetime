'use client'

import React, { ChangeEvent, useState } from 'react'

interface MediaPickerProps {
  previewInitialValue?: string | undefined
  setIsFileSelected?: (value: boolean) => any
}

export function MediaPicker({
  previewInitialValue,
  setIsFileSelected,
}: MediaPickerProps) {
  const [preview, setPreview] = useState<string | null>(
    previewInitialValue || null,
  )

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    const urlPreview = URL.createObjectURL(files[0])

    if (setIsFileSelected) {
      setIsFileSelected(true)
    }

    setPreview(urlPreview)
  }

  return (
    <>
      <input
        onChange={onFileSelected}
        type="file"
        name="coverUrl"
        id="media"
        accept="image/*"
        className="invisible h-0 w-0"
      />
      {preview && (
        <img
          src={preview}
          alt=""
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
    </>
  )
}
