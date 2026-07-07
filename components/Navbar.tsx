'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

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
    <a href="#" className="flex items-center">
      <Image
        src="/images/logo.png"
        alt="PROInstall – Instalações e Engenharia"
        width={160}
        height={68}
        className={`object-contain h-10 w-auto transition-all duration-300 ${
          light
            ? '[filter:drop-shadow(0_1px_3px_rgba(255,255,255,0.9))]'
            : 'brightness-100'
        }`}
        priority
      />
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
