'use client'

import { Zap, Settings, Circle } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-black text-yellow-400 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            LD SERVIÇOS – Manutenção e reparos de alto padrão
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Serviços profissionais para imóveis residenciais e comerciais com acabamento premium.
          </p>
          <a
            href="https://wa.me/5547996752404"
            className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors inline-block"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      {/* Serviços */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black">Manutenção elétrica e hidráulica</h3>
            </div>
            <div className="text-center">
              <Circle className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black">Reparos em apartamentos, casas e áreas comuns</h3>
            </div>
            <div className="text-center">
              <Circle className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black">Pintura de teto, paredes, tubulação, faixas e piso</h3>
            </div>
            <div className="text-center">
              <Settings className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black">Pequenas reformas e ajustes gerais</h3>
            </div>
            <div className="text-center">
              <Circle className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black">Atendimento para condomínios, construtoras e imobiliárias</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Por que contratar */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-black">Por que contratar a LD SERVIÇOS</h2>
          <p className="text-lg text-gray-700">
            Atendimento especializado, foco em imóveis de alto padrão, pontualidade, organização e acabamento impecável. Cada serviço é realizado com atenção total aos detalhes.
          </p>
        </div>
      </section>

      {/* Bloco de confiança */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-700 italic">
            "Mais de 20 anos de experiência em manutenção profissional com total responsabilidade e compromisso."
          </p>
        </div>
      </section>

      {/* Dados Oficiais */}
      <section className="bg-black text-yellow-400 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Dados Oficiais da Empresa</h2>
          <div className="text-lg space-y-2">
            <p><strong>Razão Social:</strong> LD SERVICOS LTDA</p>
            <p><strong>Nome Fantasia:</strong> LD SERVIÇOS</p>
            <p><strong>CNPJ:</strong> 52.504.422/0001-06</p>
            <p><strong>Endereço:</strong> Av. Mário Clappier Urbinatti, Doutor 370 – Maringá/PR – CEP 87020-260</p>
            <p><strong>Telefone/WhatsApp:</strong> (47) 99675-2404</p>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-black text-yellow-400 py-8 px-4 text-center text-sm">
        <p>LD SERVIÇOS – Manutenção e reparos de alto padrão. CNPJ 52.504.422/0001-06 – Maringá/PR.</p>
      </footer>
    </div>
  )
}
