import Image from 'next/image'

const serviceLinks = [
  'Painéis Fotovoltaicos',
  'Instalações Elétricas',
  'Carregamento VE',
  'AVAC',
  'Projetos de Engenharia',
  'Manutenção',
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand — real logo from PDF */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo.jpg"
                alt="PROInstall – Instalações e Engenharia"
                width={160}
                height={68}
                className="object-contain h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Instalações e Engenharia. Qualidade, confiança e inovação
              ao serviço dos nossos clientes em todo o território nacional.
            </p>
            <div className="flex gap-3">
              {['facebook', 'linkedin', 'instagram'].map((s) => (
                <div key={s} className="w-9 h-9 bg-gray-800 hover:bg-[#FF6600] rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Serviços</h4>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#servicos" className="text-gray-400 hover:text-[#FF6600] text-sm transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-[#FF6600]">📍</span>
                Portugal
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF6600]">📞</span>
                +351 200 000 000
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF6600]">✉️</span>
                geral@proinstall.pt
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF6600]">⏰</span>
                Segunda a Sexta: 8h – 18h
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2024 PROInstall – Instalações e Engenharia. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
