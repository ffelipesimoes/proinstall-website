const clients = [
  { name: 'Lidl', color: '#FFD700', bg: '#004B9E' },
  { name: 'Aldi', color: '#004F9F', bg: '#F5F5F5' },
  { name: 'Intermarché', color: '#E30613', bg: '#FFF' },
  { name: 'Brico Marché', color: '#00843D', bg: '#FFF' },
  { name: 'Roady', color: '#D10A10', bg: '#FFF' },
  { name: 'Charge Guru', color: '#1A1A2E', bg: '#F0F9FF' },
  { name: 'Centroplan', color: '#FF6600', bg: '#FFF8F0' },
]

export default function Clients() {
  return (
    <section id="clientes" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#FF6600] font-bold text-sm uppercase tracking-widest mb-3">
            Confiança
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Os Nossos Clientes
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Empresas e marcas líderes que já confiam na PROInstall para as suas instalações em Portugal.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {clients.map((c) => (
            <div
              key={c.name}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col items-center justify-center min-h-[90px]"
            >
              <span className="font-extrabold text-sm text-center" style={{ color: c.color }}>
                {c.name}
              </span>
            </div>
          ))}
        </div>

        {/* Trust message */}
        <div className="mt-14 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A <strong className="text-gray-900">PROInstall</strong> tem vindo a consolidar a sua posição como parceiro de referência
            para grandes superfícies comerciais, retalho e infraestruturas de mobilidade elétrica,
            com projetos em todo o território nacional.
          </p>
        </div>
      </div>
    </section>
  )
}
