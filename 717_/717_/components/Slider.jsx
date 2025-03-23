'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  '/img/Misca_Con_Diseño.jpg',
  '/img/Misca_Con_Logo.jpg',
  '/img/Misca_Con_Nombre.jpg',
]

export default function Slider() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-64 mb-12">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Slide ${index + 1}`}
          fill
          style={{ objectFit: 'cover' }}
          className={`transition-opacity duration-500 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  )
}

