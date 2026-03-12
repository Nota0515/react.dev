import { useState } from "react";
import React from "react";


//challange 2 
const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

const App = () => {

  const [products, setProducts] = useState(initialProducts);

  const handleIncrease = (productId) => {
    setProducts(products.map(item => {
      if (item.id === productId) {
        return {...item , count : item.count +1 }
      }else {
        return item
      }
    }))
  };

  const handleDecrease = (productId) => {
    let newList = products.map(item => {
      if (item.id === productId){
        return {...item , count : item.count - 1};
      }else {
        return item;
      }
    })

    newList = newList.filter(item => item.count > 0);
    setProducts(newList);
  };

  return (
    <div>
      <h1>This is our Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <button onClick={() => { handleIncrease(product.id) }} className="p-2 mr-2 border-2">+</button>
            {product.count} {product.name}
            <button onClick={() => { handleDecrease(product.id) }} className="p-2 ml-2 border-2">-</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;