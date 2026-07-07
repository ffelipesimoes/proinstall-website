import Image from 'next/image'

const clients = [
  { name: 'Lidl', src: '/images/client-lidl.jpg', width: 200, height: 200 },
  { name: 'Aldi', src: '/images/client-aldi.jpg', width: 225, height: 225 },
  { name: 'Intermarché', src: '/images/client-intermarche.jpg', width: 350, height: 350 },
  { name: 'Brico Marché', src: '/images/client-bricomarche.jpg', width: 300, height: 300 },
  { name: 'Roady', src: '/images/client-roady.jpg', width: 225, height: 225 },
  { name: 'Charge Guru', src: '/images/client-chargeguru.jpg', width: 256, height: 256 },
  { name: 'Centroplan', src: '/images/client-centroplan.jpg', width: 621, height: 326 },
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

        {/* Real client logos extracted directly from the commercial presentation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {clients.map((c) => (
            <div
              key={c.name}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex items-center justify-center min-h-[90px]"
            >
              <Image
                src={c.src}
                alt={`${c.name} – cliente PROInstall`}
                width={c.width}
                height={c.height}
                className="object-contain max-h-14 w-auto"
              />
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
