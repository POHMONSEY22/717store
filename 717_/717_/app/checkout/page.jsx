'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ShoppingBag } from 'lucide-react'

export default function Checkout() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || []
    setCart(storedCart)
  }, [])

  const renderCartItems = () => {
    return cart.map(item => (
      <div key={item.id} className="product-item">
        <Image src={item.image} alt={item.name} width={80} height={80} />
        <div className="product-details">
          <h3>{item.name}</h3>
          <p className="price">${item.price.toLocaleString()}</p>
          <p>Cantidad: {item.quantity}</p>
        </div>
      </div>
    ))
  }

  const calculateTotals = () => {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const shippingCost = 10000
    const total = subtotal + shippingCost
    return { subtotal, shippingCost, total }
  }

  const { subtotal, shippingCost, total } = calculateTotals()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Processing payment...')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Image src="/img/717logo.png" alt="Logo" width={50} height={50} />
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            <ArrowLeft className="inline-block mr-2" /> Volver
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">717</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                <ShoppingBag className="mr-2" /> Compra
              </h2>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                {renderCartItems()}
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Subtotal</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${subtotal.toLocaleString()}</dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Envío</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    ${shippingCost.toLocaleString()}
                    <p className="text-xs text-gray-500">Envío entre (5-7 días hábiles)</p>
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Total de compra</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${total.toLocaleString()}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">Iniciar Compra</h2>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <form onSubmit={handleSubmit} className="space-y-6 sm:px-6 sm:py-5">
                {/* Form fields go here */}
                <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
                  Pagar
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <Link href="/legal" className="text-gray-500 hover:text-gray-900">Legal</Link>
            <Link href="/" className="text-gray-500 hover:text-gray-900">Volver</Link>
            <Link href="/contacto" className="text-gray-500 hover:text-gray-900">Contacto</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

