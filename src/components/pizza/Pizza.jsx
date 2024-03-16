export default function Pizza({pizzaList}){
 return(
    <li className={`pizza ${pizzaList.soldOut ? "sold-out" : ""}`}>
     <img src={pizzaList.photoName}></img>
     <div>
        <h3>{pizzaList.name}</h3>
        <p>Ingredients: {pizzaList.ingredients}</p>
        <span>{pizzaList.soldOut ? "Sold Out" : pizzaList.price}</span>
     </div>
    </li>
 )
}