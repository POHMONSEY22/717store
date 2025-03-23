'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Minus, Plus } from 'lucide-react'
import Header from '@/components/Header'

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "ESQUINA THE BEGINNING",
      price: 70000,
      quantity: 1,
      image: "/t-shirt-1.jpg"
    },
    {
      id: 2,
      name: "BIG HIT THE BEGINNING",
      price: 70000,
      quantity: 1,
      image: "/t-shirt-2.jpg"
    }
  ])

  const updateQuantity = (id, increment) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: increment ? item.quantity + 1 : Math.max(0, item.quantity - 1) }
          : item
      )
    )
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div className="min-h-screen bg-[#4a4545] text-white">
      <Header />
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-8">Carrito</h1>
        
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-[#3a3535] p-4 rounded-lg">
              <div className="flex items-center space-x-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded"
                />
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-300">${item.price.toLocaleString()}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateQuantity(item.id, false)}
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateQuantity(item.id, true)}
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total de compra</span>
            <span>${subtotal.toLocaleString()}</span>
          </div>
          
          <Button className="w-full bg-black text-white hover:bg-black/80">
            Proceder al pago
          </Button>
        </div>
      </div>
    </div>
  )
}

