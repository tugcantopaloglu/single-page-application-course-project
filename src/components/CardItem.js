import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    </* her kart için standart bir şema oluşturuyoruz bu şekilde işlememiz daha kolay olacak props isimli obje oluşturup onun bilgilerini css ile burada daha kolay bir şekilde işleyebiliyoruz. propsu da Cards.js kullanıyor*/>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img className="cards__item__img" alt="Game" src={props.src} />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
