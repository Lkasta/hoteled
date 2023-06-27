import { CaretDown, MagnifyingGlass, MapPin } from '@phosphor-icons/react'
import { CardRoom } from '../../components/CardRoom'
import './style.css'

export function Home() {
  return (
    <div className="home">
      <div className="content">
        <div className="place">
          <p>Localização</p>
          <div className="locale">
            <MapPin size={24} weight="fill" />
            <span>São Paulo, SP</span>
            <CaretDown size={24} />
          </div>
        </div>
        <div className="searchPlace">
          <input type="text" placeholder="Buscar Hotel" />
          <div className="icon">
            <MagnifyingGlass size={16} />
          </div>
        </div>
      </div>

      <div className="avaliableRooms">
        <div className="title">
          <strong>Quartos disponíveis</strong>
          <p>Ver tudo</p>
        </div>
        <div className="rooms">
          <CardRoom />
          <CardRoom />
          <CardRoom />
          <CardRoom />
        </div>
      </div>
    </div>
  )
}
