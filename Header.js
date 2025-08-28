import Link from 'next/link'

export default function Header(){
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container flex items-center justify-between py-4">
        <Link href="/"><a className="font-extrabold text-xl">Braso <span className="text-braso">Taste</span></a></Link>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <Link href="/sobre"><a>Sobre</a></Link>
          <Link href="/servicos"><a>Serviços</a></Link>
          <Link href="/cardapio"><a>Cardápio</a></Link>
          <Link href="/eventos"><a>Eventos</a></Link>
          <Link href="/depoimentos"><a>Depoimentos</a></Link>
          <Link href="/contato"><a>Contato</a></Link>
          <a className="ml-3 inline-block bg-braso text-white px-4 py-2 rounded-2xl" href="https://wa.me/5521974064098" target="_blank" rel="noreferrer">Orçamento</a>
        </nav>
        <div className="md:hidden">
          <a href="https://wa.me/5521974064098" className="bg-braso text-white px-3 py-2 rounded-lg">Peça</a>
        </div>
      </div>
    </header>
  )
}