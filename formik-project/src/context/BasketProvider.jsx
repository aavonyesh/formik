import React, { createContext, useState } from 'react'



export const BasketContext = createContext()
function BasketProvider({children}) {
  const [basket, setBasket] = useState([])
  function addBasket(obj){
    setBasket([...basket,obj])
  }
  function removeBasket(id) {
    setBasket(basket.filter(item=>item.id!== id))
    
  }
  return (
    <BasketContext.Provider value={{basket,addBasket,removeBasket}}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider