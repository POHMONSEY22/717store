import Header from '@/components/Header'
import Image from 'next/image'

export default function Productos() {
  return (
    <div>
      <Header />
      <section id="filtros" className="filtros bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-4">Filtrar Productos</h2>
          <form className="flex flex-wrap justify-center gap-4">
            <div>
              <label htmlFor="categoria" className="block mb-2">Categoría:</label>
              <select id="categoria" name="categoria" className="p-2 border rounded">
                <option value="todos">Todos</option>
                <option value="categoria1">Categoría 1</option>
                <option value="categoria2">Categoría 2</option>
              </select>
            </div>
            <div>
              <label htmlFor="precio" className="block mb-2">Precio Máximo:</label>
              <input type="number" id="precio" name="precio" placeholder="$50.00" className="p-2 border rounded" />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Aplicar Filtros</button>
          </form>
        </div>
      </section>

      <section id="productos" className="productos py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Nuestros Productos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="producto border rounded p-4 text-center">
                <Image src={`/producto${(i % 4) + 1}.jpg`} alt={`Producto ${i}`} width={200} height={200} className="mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Producto {i}</h3>
                <p className="mb-2">Descripción breve del producto.</p>
                <span className="block text-blue-600 text-xl mb-4">${(i * 5).toFixed(2)}</span>
                <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600">Añadir al carrito</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center">&copy; 2024 Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

