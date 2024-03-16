import Order from "../order/Order";

export default function Footer(){
    const currentHour = new Date().getHours();
    const open = 12;
    const close = 22;
    const isOpen = currentHour >= open && currentHour <= close;
    if (isOpen){
        return (
            <Order/>
        ) 
    } else {
        return(
        <footer className = "footer">
            <p>We're closed, we welcome you to return between 10:00 AM and 10:00 PM. </p>
        </footer>  
        )
    }
  
}