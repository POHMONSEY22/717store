import Link from 'next/link'
import Image from 'next/image'
import { User } from 'lucide-react'

export default function Favoritos() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Image src="/img/717logo.png" alt="717" width={50} height={50} />
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="text-gray-600 hover:text-gray-900">INICIO</Link></li>
              <li><Link href="/productos" className="text-gray-600 hover:text-gray-900">PRODUCTO</Link></li>
              <li><Link href="/contacto" className="text-gray-600 hover:text-gray-900">CONTACTO</Link></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-gray-600 hover:text-gray-900"><User /></Link>
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900">Cerrar Sesión</button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold">717</h1>
            <nav className="flex space-x-4">
              <Link href="/perfil" className="text-gray-600 hover:text-gray-900">Mi Perfil</Link>
              <Link href="/pedidos" className="text-gray-600 hover:text-gray-900">Mis Pedidos</Link>
              <Link href="/favoritos" className="text-gray-900 font-medium">Mis Favoritos</Link>
            </nav>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <h2 className="text-xl font-semibold mb-4 sm:px-6 sm:py-5">Mis Favoritos</h2>
            <div className="sm:px-6 sm:py-5">
              <p className="text-gray-500">Actualmente no tienes favoritos</p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">DETALLES DE LA CUENTA</h3>
              <div className="mt-5 border-t border-gray-200">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">Nombre</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Juan Pérez</dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">juan@example.com</dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">Dirección</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Calle 123 #45-67</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

