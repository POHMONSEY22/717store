import Header from '@/components/Header'

export default function Contacto() {
  return (
    <div>
      <Header />
      <section className="contacto">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-4">Contáctanos</h2>
          <p className="text-center mb-6">¿Tienes alguna pregunta o necesitas ayuda? Completa el formulario a continuación:</p>
          <form action="#" method="post" className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="nombre" className="block mb-2">Nombre:</label>
              <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Correo electrónico:</label>
              <input type="email" id="email" name="email" placeholder="Tu correo electrónico" required className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="mensaje" className="block mb-2">Mensaje:</label>
              <textarea id="mensaje" name="mensaje" rows={5} placeholder="Escribe tu mensaje aquí" required className="w-full p-2 border rounded"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Enviar</button>
          </form>
        </div>
      </section>
      <footer className="bg-gray-200 py-4 mt-8">
        <div className="container mx-auto px-4">
          <p className="text-center">&copy; 2024 Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

