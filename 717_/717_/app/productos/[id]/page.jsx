'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const products = {
  'big-hit': {
    name: 'BIG HIT THE BEGINNING',
    price: 70000,
    image: '/img/BIGHIT.jpg',
    description: 'Una de las primeras camisetas de nuestra colección, representa el inicio de algo grande. Con un diseño único que combina elementos urbanos y un toque de elegancia, esta pieza es perfecta para aquellos que buscan destacar con estilo.'
  },
  'esquina': {
    name: 'ESQUINA THE BEGINNING',
    price: 70000,
    image: '/img/esquina.jpg',
    description: 'Inspirada en las calles y la cultura urbana, esta camiseta representa la esencia de la vida en la ciudad. Su diseño único captura la energía y el espíritu de la calle, perfecta para aquellos que viven y respiran la cultura urbana.'
  }
}

export default function ProductDetails({ params }) {
  const [selectedSize, setSelectedSize] = useState(null)
  const product = products[params.id]

  if (!product) {
    return <div>Producto no encontrado</div>
  }

  const addToCart = () => {
    if (!selectedSize) {
      alert('Por favor selecciona una talla')
      return
    }
    
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push({
      id: params.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.image
    })
    localStorage.setItem('cart', JSON.stringify(cart))
    alert('Producto agregado al carrito')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="product-image">
            <Image src={product.image} alt={product.name} width={500} height={500} className="rounded-lg" />
          </div>
          <div className="product-info">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold mb-4">${product.price.toLocaleString()}</p>
            
            <div className="mb-6">
              <p className="font-semibold mb-2">Talla:</p>
              <div className="flex space-x-2">
                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 border rounded ${selectedSize === size ? 'bg-black text-white' : 'bg-white text-black'}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={addToCart}
              className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 mb-6"
            >
              Agregar a la bolsa
            </button>

            <div className="product-description">
              <h2 className="text-xl font-semibold mb-2">Descripción del producto</h2>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

