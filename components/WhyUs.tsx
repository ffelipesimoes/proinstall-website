const reasons = [
  {
    num: '01',
    title: 'Experiência Comprovada',
    desc: 'Mais de 10 anos de experiência em instalações elétricas e de energia renovável em projetos de pequena e grande dimensão.',
  },
  {
    num: '02',
    title: 'Equipa Certificada',
    desc: 'Técnicos com certificações reconhecidas e formação contínua nas mais recentes tecnologias e normas do setor.',
  },
  {
    num: '03',
    title: 'Materiais de Qualidade',
    desc: 'Utilizamos apenas materiais e equipamentos de marcas de referência com garantia de durabilidade e desempenho.',
  },
  {
    num: '04',
    title: 'Garantia e Suporte',
    desc: 'Todos os trabalhos realizados têm garantia e suporte técnico pós-instalação para total tranquilidade do cliente.',
  },
  {
    num: '05',
    title: 'Atendimento Personalizado',
    desc: 'Cada projeto é único. Desenvolvemos soluções à medida das suas necessidades específicas e do seu orçamento.',
  },
  {
    num: '06',
    title: 'Cobertura Nacional',
    desc: 'Presença em todo o território português, com capacidade de resposta rápida para clientes em qualquer região.',
  },
]

export default function WhyUs() {
  return (
    <section id="porque-nos" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Orange accent bar at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6600] via-[#FF8C00] to-[#FF6600]" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#FF6600] font-bold text-sm uppercase tracking-widest mb-3">
            Porquê Nós
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Por Que Escolher a PROInstall?
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Comprometidos com a excelência em cada projeto que realizamos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <div key={r.num} className="flex gap-5 group">
              <div className="text-5xl font-black text-[#FF6600]/25 group-hover:text-[#FF6600]/60 transition-colors flex-shrink-0 leading-none select-none">
                {r.num}
              </div>
              <div className="pt-1">
                <h3 className="font-bold text-white text-lg mb-2">{r.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
