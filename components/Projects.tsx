'use client'
import { useState } from 'react'
import Image from 'next/image'

const tabs = [
  { key: 'solar', label: '☀️ Fotovoltaico' },
  { key: 'ev', label: '🔌 Carregamento VE' },
  { key: 'hvac', label: '❄️ AVAC' },
  { key: 'electrical', label: '⚡ Elétrica' },
  { key: 'maintenance', label: '🔧 Manutenção' },
]

const projects: Record<string, { src: string; alt: string; caption: string }[]> = {
  solar: [
    { src: '/images/solar-aerial.jpg', alt: 'Solar Lidl', caption: 'Instalação fotovoltaica Lidl – grande superfície comercial' },
    { src: '/images/hero.jpg', alt: 'Solar rooftop', caption: 'Sistema fotovoltaico em cobertura plana' },
    { src: '/images/solar-closeup.jpg', alt: 'Solar installation', caption: 'Instalação e cablagem de painéis solares' },
    { src: '/images/solar-panels2.jpg', alt: 'Solar panels', caption: 'Painéis de alta eficiência em superfície comercial' },
    { src: '/images/solar-mount.jpg', alt: 'Solar mount', caption: 'Estrutura de suporte e fixação em cobertura' },
    { src: '/images/solar-inverter.jpg', alt: 'Inverter', caption: 'Inversor e sistema de armazenamento de energia' },
  ],
  ev: [
    { src: '/images/ev-1.jpg', alt: 'EV charger Tesla', caption: 'Wallbox Tesla instalado em garagem residencial' },
    { src: '/images/ev-2.jpg', alt: 'EV charger', caption: 'Ponto de carregamento residencial instalado' },
    { src: '/images/ev-3.jpg', alt: 'EV charger station', caption: 'Carregador de veículo elétrico – instalação completa' },
  ],
  hvac: [
    { src: '/images/hvac-1.jpg', alt: 'AC unit', caption: 'Sistema split instalado em habitação' },
    { src: '/images/hvac-2.jpg', alt: 'AC installation', caption: 'Ar condicionado – instalação e configuração' },
    { src: '/images/hvac-3.jpg', alt: 'HVAC', caption: 'Climatização residencial completa' },
  ],
  electrical: [
    { src: '/images/electrical-1.jpg', alt: 'Electrical interior', caption: 'Instalação elétrica interior com iluminação LED' },
    { src: '/images/electrical-2.jpg', alt: 'Lighting installation', caption: 'Projeto de iluminação em espaço residencial' },
    { src: '/images/electrical-3.jpg', alt: 'Corridor lighting', caption: 'Corredor com iluminação embutida em teto falso' },
  ],
  maintenance: [
    { src: '/images/maintenance-1.jpg', alt: 'Solar maintenance', caption: 'Limpeza e manutenção preventiva de painéis solares' },
    { src: '/images/maintenance-2.jpg', alt: 'Panel cleaning', caption: 'Inspeção e limpeza de sistema fotovoltaico' },
    { src: '/images/maintenance-3.jpg', alt: 'Maintenance', caption: 'Manutenção corretiva – recuperação de instalação' },
  ],
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('solar')

  return (
    <section id="projetos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-[#FF6600] font-bold text-sm uppercase tracking-widest mb-3">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Os Nossos Projetos
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos projetos que realizámos para clientes em todo o país.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === t.key
                  ? 'bg-[#FF6600] text-white shadow-lg shadow-orange-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects[activeTab].map((p, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow"
              style={{ aspectRatio: '4/3' }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-5 text-white">
                  <p className="font-medium text-sm leading-snug">{p.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
