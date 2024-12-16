import React from 'react'
import PizzaCard from '../Pizza/Pizza';
import "./PizzaList"



const PizzaList = () => {
  
  const pizzas = [
    {
      id: 0,
      name: "Чикен Сладкий Чили",
      ingredients: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соус",
      price: 399,
      tag: "NEW",
      image: "/public/Rectangle 4.png",
    },
    {
      id: 1,
      name: "EASY PEASY огуречный расколбас",
      ingredients: "Курица, Лук, Перец Халапеньо, Сыр",
      price: 649,
      tag: "HIT",
      image: "/public/Rectangle 4 (1).png",
    },
    {
      id: 2,
      name:"EASY PEASY чикен  а-ля хрен",
      ingredients:"Курица, Лук, Соус Карбонара",
      price: 249 ,
      tag:"",
      image:"/public/Rectangle 4 (3).png",
    },
    {
      id: 3,
      name: "4 сезона",
      ingredients: "Бекон, Ветчина, Грибы, Курица, Лук, Маслины",
      price: 630,
      tag: "",
      image: "/public/Rectangle 4 (2).png",
    },
   {
    id: 4,
    name:"4 сезона",
    ingredients:"Бекон, Ветчина, Грибы, Курица, Лук, Маслины",
    price:630,
    tag:"",
    image:"/public/Rectangle 4 (2).png",
   },
   {
    id: 5,
    name:"EASY PEASY чикен  а-ля хрен",
    ingredients:"Курица, Лук, Соус Карбонара",
    price:249 ,
    tag:"",
    image:"/public/Rectangle 4 (3).png",
   },
   {
    id:6,
    name:"EASY PEASY огуречный расколбас",
    ingredients:"Курица, Лук, Перец Халапеньо, Сыр",
    price:249 ,
    tag:"HIT",
    image:"/public/Rectangle 4 (1).png",
   },
   {
    id:7,
    name:"Чикен Сладкий Чили",
    ingredients:"Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соус",
    price:399,
    tag:"NEW",
    image:"/public/Rectangle 4.png",
   }
    
  ];


   return (
      <div className="container">
     <h1>Пицца</h1>
     <div className="list">

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
     </div>
     </div>
   );
 };

export default PizzaList