const services = [
  {
    icon: '☀️',
    title: 'Painéis Fotovoltaicos',
    desc: 'Instalação de sistemas solares fotovoltaicos para produção de energia limpa em habitações e grandes superfícies comerciais.',
    tag: 'Energia Solar',
  },
  {
    icon: '⚡',
    title: 'Instalações Elétricas',
    desc: 'Montagem e manutenção de infraestruturas elétricas para projetos residenciais, comerciais e industriais.',
    tag: 'Elétrica',
  },
  {
    icon: '🔌',
    title: 'Carregamento de Veículos Elétricos',
    desc: 'Instalação de wallbox domésticos e postos de carregamento para frotas e espaços públicos. Parceiros Charge Guru.',
    tag: 'Mobilidade Elétrica',
  },
  {
    icon: '❄️',
    title: 'AVAC',
    desc: 'Projeto e instalação de sistemas de aquecimento, ventilação e ar condicionado para máximo conforto e eficiência.',
    tag: 'Climatização',
  },
  {
    icon: '📐',
    title: 'Projetos de Engenharia',
    desc: 'Elaboração e execução de projetos técnicos de instalações elétricas, mecânicas e de energias renováveis.',
    tag: 'Engenharia',
  },
  {
    icon: '🔧',
    title: 'Manutenção',
    desc: 'Serviços preventivos e corretivos para garantir a máxima eficiência e longevidade das instalações.',
    tag: 'Manutenção',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#FF6600] font-bold text-sm uppercase tracking-widest mb-3">
            O Que Fazemos
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Os Nossos Serviços
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções integradas de instalação e engenharia para responder a todas as suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border-t-4 border-[#FF6600]"
            >
              <span className="inline-block text-xs font-semibold text-[#FF6600] bg-orange-50 px-2.5 py-1 rounded-full mb-4">
                {s.tag}
              </span>
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{s.desc}</p>
              <div className="mt-5 flex items-center gap-1 text-[#FF6600] font-semibold text-sm group-hover:gap-2 transition-all">
                Saber mais
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
