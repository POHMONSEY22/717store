import Header from '../components/Header'
import Slider from '../components/Slider'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'


const featuredProducts = [
  { id: 1, name: 'Escudo', price: 70000, image: '/t-shirt-1.jpg' },
  { id: 2, name: 'Mi Hit', price: 70000, image: '/t-shirt-2.jpg' },
]

const offerProducts = [
  { id: 1, name: 'GANGSTA LOVE', price: 55000, oldPrice: 70000, image: '/t-shirt-3.jpg' },
  { id: 2, name: 'OLD PAIN FIRE', price: 55000, oldPrice: 70000, image: '/t-shirt-4.jpg' },
  { id: 3, name: 'BLOOD OF CHRIST', price: 55000, oldPrice: 70000, image: '/t-shirt-5.jpg' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="max-w-[1200px] mx-auto px-4">
        <Slider />

        {/* Destacados */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">DESTACADOS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="bg-zinc-900 text-white">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{product.name}</h3>
                  <p className="text-lg">${product.price.toLocaleString()}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Ofertas */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">OFERTAS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerProducts.map((product) => (
              <Card key={product.id} className="bg-zinc-900 text-white">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{product.name}</h3>
                  <p className="text-lg">
                    ${product.price.toLocaleString()}{' '}
                    <span className="line-through text-gray-400">
                      ${product.oldPrice.toLocaleString()}
                    </span>
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">SÍGUENOS</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-gray-300">
                  <Instagram />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Facebook />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Twitter />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">CATEGORÍAS</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-gray-300">INICIO</Link></li>
                <li><Link href="#" className="hover:text-gray-300">PRODUCTO</Link></li>
                <li><Link href="#" className="hover:text-gray-300">CONTACTO</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">NAVEGACIÓN</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-gray-300">INICIO</Link></li>
                <li><Link href="#" className="hover:text-gray-300">PRODUCTO</Link></li>
                <li><Link href="#" className="hover:text-gray-300">CONTACTO</Link></li>
                <li><Link href="#" className="hover:text-gray-300">LEGAL</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">SUSCRÍBETE A 717</h3>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 bg-zinc-800 rounded"
              />
              <button className="mt-2 w-full bg-white text-black p-2 rounded hover:bg-gray-200">
                Enviar
              </button>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Image
              src="/img/717logo.png"
              alt="717 Logo"
              width={60}
              height={60}
              className="mx-auto"
            />
          </div>
        </footer>
      </main>
    </div>
  )
}

