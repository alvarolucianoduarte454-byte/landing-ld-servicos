'use client'

export default function LDPage() {
  return (
    <div className="min-h-screen bg-black text-yellow-400">
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">LD Serviços — Manutenção e Reparos</h1>
        <h2 className="text-xl md:text-2xl mb-8">Serviços de manutenção de alto padrão</h2>
        <p className="text-lg mb-8">Oferecemos manutenção elétrica, hidráulica, reparos e pequenas reformas com qualidade e eficiência para residências e empresas.</p>
        <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors">
          Solicitar Orçamento
        </button>
      </div>
    </div>
  )
}
