import { Star } from '@phosphor-icons/react'
import './style.css'

export function CardRoom() {
  return (
    <div className="card">
      <div className="image">
        {/* <img
          src="https://media.omnibees.com/Images/5617/RoomTypes/640x426/1057063.jpg/"
          alt="quarto de hotel"
        /> */}
        <div className="image"></div>
      </div>
      <div className="contentCard">
        <div className="infoRoom">
          <div className="topContent">
            <p>Suite</p>
            <div className="rateRoom">
              <p>4.8</p>
              <Star size={16} weight="fill" />
            </div>
          </div>
          <strong>Quarto de casal</strong>
          <p className="fonthThin">Rua jacinto pinto - São Paulo</p>
          <div className="price">
            <strong>R$ 89,98</strong>
            <span className="fonthThin">/noite</span>
          </div>
          <button>Reservar</button>
        </div>
      </div>
    </div>
  )
}
