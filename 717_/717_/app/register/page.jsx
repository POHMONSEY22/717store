'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Header from '@/components/Header'

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Implement registration logic here
    console.log('Register attempt:', formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">717</h2>
            <h3 className="text-xl text-white mb-8">CREAR CUENTA</h3>
          </div>
          
          <div className="bg-zinc-900 p-8 rounded-lg space-y-6">
            <div className="flex space-x-4 justify-center text-white mb-6">
              <Link href="/login" className="text-gray-300 hover:text-white">
                INICIAR SESIÓN
              </Link>
              <span className="border-b-2 border-white pb-1">REGISTRATE</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-white mb-2">
                  Nombre completo
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/10 text-white border-zinc-700"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-white mb-2">
                  Correo electrónico
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/10 text-white border-zinc-700"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm text-white mb-2">
                  Contraseña
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-white/10 text-white border-zinc-700"
                  required
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm text-white mb-2">
                  Confirmar contraseña
                </label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="bg-white/10 text-white border-zinc-700"
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="rounded bg-white/10 border-zinc-700"
                  required 
                />
                <label htmlFor="terms" className="text-sm text-white">
                  Acepto los términos y condiciones
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-white/90"
              >
                CREAR CUENTA
              </Button>
            </form>

            <div className="flex items-center justify-center space-x-2 mt-4">
              <input type="checkbox" id="robot" className="rounded bg-white/10 border-zinc-700" />
              <label htmlFor="robot" className="text-sm text-white">
                No soy un robot
              </label>
              <div className="w-16 h-8 bg-white/10 rounded"></div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Image
              src="/img/717logo.png"
              alt="717 Logo"
              width={60}
              height={60}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

