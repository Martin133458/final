import React from 'react'
import "./Pizza.css"

const PizzaCard = ({ name, ingredients, price, tag, image }) => {
   return (
     <div className="pizza-card">
       <img src={image} alt={name} className="pizza-image" />
       {tag && <span className="pizza-tag">{tag}</span>}
       <h3 className="pizza-name">{name}</h3>
       <p className="pizza-ingredients">{ingredients}</p>
       <p className="pizza-price">от {price} ₽</p>
       <button className="pizza-button">Выбрать</button>
     </div>
   );
 };

export default PizzaCard