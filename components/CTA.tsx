import Image from 'next/image'

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Real project photo from PDF as background */}
      <div className="absolute inset-0">
        <Image
          src="/images/solar-aerial.jpg"
          alt="Instalação solar comercial PROInstall"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#FF6600]/88" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
        <span className="inline-block border-2 border-white/40 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-6">
          Pronto para começar?
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight">
          Reduza a Sua Fatura<br />de Energia Agora
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Peça uma proposta personalizada e sem compromisso.
          A nossa equipa técnica analisará o seu projeto e apresentará a solução mais adequada.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center bg-white text-[#FF6600] hover:bg-gray-100 px-8 py-4 rounded-xl font-extrabold text-lg transition-all hover:scale-105 shadow-xl"
          >
            Pedir Orçamento Gratuito
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="tel:+351200000000"
            className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#FF6600] px-8 py-4 rounded-xl font-bold text-lg transition-all"
          >
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Ligar Agora
          </a>
        </div>
      </div>
    </section>
  )
}
