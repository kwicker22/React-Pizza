export default function Order({close}){
    return (
        <div className = "order">
            <p> We're open until {close}:00. Come visit us or order online</p>
            <button className = "btn">Order</button>
        </div>
    )
}