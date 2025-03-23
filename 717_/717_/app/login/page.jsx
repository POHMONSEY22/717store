'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Header from '@/components/Header'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Implement login logic here
    console.log('Login attempt:', { email, password })
  }

  return (
    <div className="min-h-screen bg-[#4a4545]">
      <Header />
      <div className="flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">717</h2>
            <h3 className="text-xl text-white mb-8">MI CUENTA</h3>
          </div>
          
          <div className="bg-[#4a4545] p-8 rounded-lg space-y-6">
            <div className="flex space-x-4 justify-center text-white mb-6">
              <span className="border-b-2 border-white pb-1">INICIAR SESIÓN</span>
              <Link href="/register" className="text-gray-300 hover:text-white">
                REGISTRATE
              </Link>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm text-white mb-2">
                  Correo electrónico
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm text-white mb-2">
                  Contraseña
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/10 text-white"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-black/80"
              >
                INICIAR SESIÓN
              </Button>
            </form>

            <div className="flex items-center justify-center space-x-2 mt-4">
              <input type="checkbox" id="remember" className="rounded" />
              <label htmlFor="remember" className="text-sm text-white">
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

