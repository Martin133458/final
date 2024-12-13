import React from 'react'


const PizzaList = () => {
   return (
     <div className="pizza-list">
       {pizzas.map((pizza) => (
         <PizzaCard
           key={pizza.id}
           name={pizza.name}
           ingredients={pizza.ingredients}
           price={pizza.price}
           tag={pizza.tag}
           image={pizza.image}
         />
       ))}
     </div>
   );
 };

export default PizzaList