import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PROInstall – Instalações e Engenharia',
  description: 'Especialistas em instalações fotovoltaicas, elétricas, carregamento de veículos elétricos e AVAC. Soluções completas para empresas e particulares em Portugal.',
  keywords: 'painéis solares, fotovoltaico, instalações elétricas, carregamento VE, AVAC, engenharia, Portugal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={poppins.variable}>
      <body className="font-poppins antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
