export default function Hero(){ return (
  <section className="bg-gradient-to-r from-white to-neutral-50 py-16">
    <div className="container grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Churrasco premium<br/><span className="text-braso">& experiência gastronômica a domicílio</span></h1>
        <p className="mt-4 text-neutral-700">Braso Taste leva o sabor irresistível da brasa até você — cardápio personalizado para café da manhã, brunch, almoço, jantar, festas e eventos corporativos.</p>
        <div className="mt-6 flex gap-3">
          <a href="/contato" className="bg-braso text-white px-5 py-3 rounded-2xl font-semibold">Solicitar proposta</a>
          <a href="/servicos" className="px-5 py-3 rounded-2xl border">Ver serviços</a>
        </div>
      </div>
      <div>
        <img src="/hero.jpg" alt="Carnes na brasa" className="rounded-3xl shadow-lg w-full object-cover h-80" />
      </div>
    </div>
  </section>
)}