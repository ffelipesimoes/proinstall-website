'use client'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#clientes', label: 'Clientes' },
  { href: '#porque-nos', label: 'Porquê Nós' },
  { href: '#contacto', label: 'Contacto' },
]

function Logo({ light }: { light: boolean }) {
  return (
    <a href="#" className="flex items-center gap-2">
      <svg width="38" height="38" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#E8F5E9" />
        <ellipse cx="50" cy="50" rx="46" ry="28" fill="none" stroke="#4CAF50" strokeWidth="3" />
        <circle cx="50" cy="50" r="46" fill="none" stroke="#4CAF50" strokeWidth="3" />
        <line x1="4" y1="50" x2="96" y2="50" stroke="#4CAF50" strokeWidth="2" />
        <line x1="50" y1="4" x2="50" y2="96" stroke="#4CAF50" strokeWidth="2" />
        <rect x="30" y="34" width="14" height="9" rx="1" fill="#FF6600" transform="rotate(-20 37 38)" />
        <rect x="46" y="28" width="14" height="9" rx="1" fill="#FF6600" transform="rotate(-10 53 32)" />
        <circle cx="50" cy="50" r="5" fill="#4CAF50" />
      </svg>
      <span className="font-bold text-xl tracking-tight">
        <span className="text-[#FF6600]">PRO</span>
        <span className={light ? 'text-white' : 'text-gray-900'}>Install</span>
      </span>
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const light = !scrolled && !open

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo light={light} />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-[#FF6600] ${
                  light ? 'text-white' : 'text-gray-700'
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-[#FF6600] hover:bg-[#E55A00] text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Pedir Orçamento
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 rounded-lg ${light ? 'text-white' : 'text-gray-700'}`}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <nav className="px-4 py-5 space-y-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-gray-700 font-medium hover:text-[#FF6600] py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="block bg-[#FF6600] text-white text-center px-4 py-3 rounded-lg font-semibold mt-2"
            >
              Pedir Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
