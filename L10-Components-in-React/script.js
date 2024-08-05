//pichhle code mei dikkat thhhhi ki agar hume function mei jo bhi arguments diye hai 
//usko order wise fill karne ki jarurat thhi jab hum function call karte hai
// to usko kaise solve kare 

//Using Java Script
//Study Video Destructing in JS and fetch API


import { createRoot } from 'react-dom/client'
function Card(cardDetails) {
    //Destructing in JS
    const {key, title, image, brand, price} = cardDetails;
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
          return Card({
            key: product.id,
            title: product.title,
            image: product.thumbnail,
            brand: product.brand,
            price: product.price
          }
          )
          //yaha par jaise hi return karunga ye ek React ka element create kar dega
        })}
      </div>
    )
  })
