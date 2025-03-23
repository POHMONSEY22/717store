import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-zinc-900 text-white py-4">
      <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/img/717logo.png" alt="717 Logo" width={50} height={50} />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-gray-300">INICIO</Link></li>
            <li><Link href="/productos" className="hover:text-gray-300">PRODUCTO</Link></li>
            <li><Link href="/contacto" className="hover:text-gray-300">CONTACTO</Link></li>
            <li><Link href="/login" className="hover:text-gray-300">INICIO DE SESIÓN</Link></li>
            <li>
              <Link href="/carrito" className="hover:text-gray-300">
                <ShoppingCart className="inline-block" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

