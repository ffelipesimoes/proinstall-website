'use client'
import { useState, FormEvent } from 'react'

const contactItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Morada',
    value: 'Portugal',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Telefone',
    value: '+351 200 000 000',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'geral@proinstall.pt',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Horário',
    value: 'Segunda a Sexta: 8h – 18h',
  },
]

export default function Contact() {
  const [success, setSuccess] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSuccess(true)
    }, 1200)
  }

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#FF6600] font-bold text-sm uppercase tracking-widest mb-3">
            Contacte-Nos
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Fale Connosco
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Solicite um orçamento ou coloque as suas questões. A nossa equipa responde em 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-11 h-11 bg-orange-50 rounded-xl flex items-center justify-center text-[#FF6600] flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                  <p className="text-gray-500 mt-0.5">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="mt-8 p-6 bg-orange-50 rounded-2xl border border-orange-100">
              <h4 className="font-bold text-gray-900 mb-2">Resposta Rápida</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Após receber o seu pedido, um técnico especializado entrará em contacto
                para agendar uma visita gratuita ao local.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
            {success ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-600">Entraremos em contacto em breve. Obrigado pelo seu interesse na PROInstall.</p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-6 text-[#FF6600] font-semibold hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nome *</label>
                    <input
                      required
                      type="text"
                      placeholder="O seu nome"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600]/20 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email *</label>
                    <input
                      required
                      type="email"
                      placeholder="email@exemplo.pt"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600]/20 transition-all text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Telefone</label>
                  <input
                    type="tel"
                    placeholder="+351 9XX XXX XXX"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600]/20 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Serviço de Interesse</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600]/20 transition-all text-sm text-gray-600">
                    <option value="">Selecione um serviço…</option>
                    <option>Painéis Fotovoltaicos</option>
                    <option>Instalação Elétrica</option>
                    <option>Carregamento de Veículos Elétricos</option>
                    <option>AVAC</option>
                    <option>Projeto de Engenharia</option>
                    <option>Manutenção</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mensagem *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Descreva o seu projeto ou questão…"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600]/20 transition-all resize-none text-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-[#FF6600] hover:bg-[#E55A00] disabled:opacity-70 text-white px-6 py-4 rounded-xl font-bold text-base transition-all hover:scale-[1.02]"
                >
                  {sending ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      A enviar…
                    </span>
                  ) : 'Enviar Pedido'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
