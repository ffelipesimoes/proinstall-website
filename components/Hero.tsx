import Image from 'next/image'

const stats = [
  { val: '10+', label: 'Anos de Experiência' },
  { val: '500+', label: 'Projetos Concluídos' },
  { val: '98%', label: 'Satisfação' },
  { val: '7+', label: 'Grandes Clientes' },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center">
      {/* Background photo from the PDF – real project photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Instalação fotovoltaica PROInstall – painéis solares em grande superfície comercial"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark gradient overlay so text is legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          <span className="inline-block bg-[#FF6600] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-6">
            Instalações e Engenharia
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Energia&nbsp;Solar<br />
            <span className="text-[#FF6600]">& Infraestrutura</span><br />
            Inteligente
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed">
            Especialistas em instalações fotovoltaicas, elétricas, carregamento de veículos elétricos
            e AVAC. Soluções completas e certificadas para empresas e particulares em Portugal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center bg-[#FF6600] hover:bg-[#E55A00] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-orange-500/30"
            >
              Pedir Orçamento Gratuito
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#projetos"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              Ver Projetos
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-[#FF6600]">{s.val}</p>
              <p className="text-sm text-white/75 mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors"
        aria-label="Scroll para baixo"
      >
        <span className="text-xs font-medium tracking-wider uppercase">Descobrir</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  )
}
