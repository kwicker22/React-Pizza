export function Footer(){
    const currentHour = new Date().getHours();
    const open = 12;
    const close = 22;
    const isOpen = currentHour >= open && currentHour <= close;
    if (isOpen){
        return (
            <footer className = "footer">
                
            </footer>
        ) 
    }
  
}