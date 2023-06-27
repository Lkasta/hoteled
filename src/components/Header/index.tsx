import { Nut } from '@phosphor-icons/react'
import './style.css'

export function Header() {
  return (
    <header>
      <div className="content">
        <div className="col">
          <strong className="logoText">
            hote<span>led</span>
          </strong>
          <div className="links">
            <a href="">Menu</a>
            <a href="">Quartos</a>
            <a href="">Minhas Reservas</a>
            <a href="">Contato</a>
          </div>
        </div>
        <a href="/auth">
          <button>
            <Nut size={20} weight="bold" />
            Opções
          </button>
        </a>
      </div>
    </header>
  )
}
