import React from 'react'
import "./Header.css"

const Header = () => {
  return (
   <>
     <header className="header">
      <div className="container">
         <div className="wrap">
            <h1>🍕 Куда пицца</h1>
            <div className="nav">
               <a href="./Sale.jsx">Акции</a>
               <a href="/">Пицца</a>
               <a href="">Суши</a>
               <a href="">Напитки</a>
               <a href="">Закуски</a>
               <a href="">Комбо</a>
               <a href="">Десерты</a>
               <a href="">Соусы</a>
            </div>
            
         </div>
      </div>
     </header>
   </>
  )
}

export default Header