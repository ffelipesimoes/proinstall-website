const pillars = [
  {
    svg: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="16" r="10" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M14 14l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 36c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Qualidade Certificada',
    desc: 'Processos rigorosos e materiais certificados que garantem instalações duradouras, seguras e com os mais altos padrões técnicos.',
  },
  {
    svg: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="14" r="6" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="27" cy="14" r="6" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M4 36c0-5.523 4.925-10 11-10s11 4.477 11 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M30 26c3.314 0 6 2.686 6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Equipa Especializada',
    desc: 'Técnicos qualificados com vasta experiência em projetos residenciais, comerciais e industriais de pequena e grande escala.',
  },
  {
    svg: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M13 30v4M27 30v4M9 34h22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M12 18l4 4 8-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Formação Contínua',
    desc: 'Investimos permanentemente na formação da equipa para acompanhar as tecnologias mais recentes e as melhores práticas do setor.',
  },
  {
    svg: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="20" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="2.5"/>
        <rect x="22" y="12" width="14" height="24" rx="2" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M8 20v-6a4 4 0 018 0v2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M26 12V8a4 4 0 018 0v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Soluções Completas',
    desc: 'Da conceção ao projeto, da instalação à manutenção — uma parceria de confiança para residências, comércio e indústria.',
  },
]

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      {/* Dot pattern from the PDF presentation */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#FF6600] font-bold text-sm uppercase tracking-widest mb-3">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Quem Somos
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A <strong>PROInstall</strong> é uma empresa portuguesa especializada em instalações de engenharia,
            comprometida com a qualidade, inovação e sustentabilidade energética.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-50 group-hover:bg-[#FF6600] flex items-center justify-center mx-auto mb-5 transition-colors text-[#FF6600] group-hover:text-white">
                {p.svg}
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-3">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
