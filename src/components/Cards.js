import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Choose your style and play whatever you want!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="../card-images/img-9.jpg"
              text="Lost inside the 2D platformers!"
              label="Platformer"
              path="/ourgames"
            />
            <CardItem
              src="../card-images/img-2.jpg"
              text="Race with your friends and beat them!"
              label="Race"
              path="/ourgames"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="../card-images/img-6.jpg"
              text="Go to your biggest adventure ever!"
              label="Adventure"
              path="/ourgames"
            />
            <CardItem
              src="../card-images/img-4.jpg"
              text="Build your own army!"
              label="Tower Defence"
              path="/ourgames"
            />
            <CardItem
              src="../card-images/img-7.jpg"
              text="Defeat your enemies!"
              label="Action"
              path="/ourgames"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
