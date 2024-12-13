import React from 'react'
import "./App.css"
import Header from './components/Header/Header'
import Sale from './components/Sale/Sale'
import Pizza from './components/Pizza/Pizza'
import PizzaList from './components/PizzaList/PizzaList'

const App = () => {
  return (
    <>
    <Header/>
    <Sale/>
    <h1>Пицца</h1>
    <PizzaList/>
    <Pizza/>
    </>
  )
}

export default App