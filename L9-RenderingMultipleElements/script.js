//In React we write whole HTML in JS file
//It is not actual HTML , its just look like HTML.
//Actually it is JSX and Babel convert it in React.CreateElement
//for ex it is jsx const k = <h1>Hello World</h1>
// import {createRoot} from 'react-dom/client'
// function card(key){
//   return(
//       <div className="card" key = {key}>
//           <div>
//                 <img src="https://iplanet.one/cdn/shop/files/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a__WWEN.jpg?v=1691140898" 
//                         alt= "iphone"/>
//           </div>
          
//           <div className='card-content'> 
//             <h3>iphone-14 proMax</h3>
//             <p> Apple Product</p>
//             <p>Price: $1000</p>
//           </div>
          
    
//       </div>
//   )
// }
// const container = [card(1), card(2), card(3), card(4), card(5), card(6)]
// const root = createRoot(document.getElementById('root'));
// root.render(<div  className='container'>{container}</div>);
//jab bhi Array mei object paas karte hai to key pass karni hoti hai
// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     root.render();
//   });

import { createRoot } from 'react-dom/client'
function Card(key, title, image, brand, price) {
  console.log(key)
  return (
    <div className="card" key={key}>
      <img src={image} alt="iphone" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))

console.log('Hello world!!!')

fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return Card(
            product.id,
            product.title,
            product.thumbnail,
            product.brand,
            product.price
          )
          //yaha par jaise hi return karunga ye ek React ka element create kar dega
        })}
      </div>
    )
  })
