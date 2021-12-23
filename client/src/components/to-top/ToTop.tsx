import {useEffect} from "react";
import "./ToTop.css";

export default function ToTop() {

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let toTop:any = document.getElementById("to-top");

            if(window.scrollY === 0){
                toTop.style.opacity = 0;
            }else{
                toTop.style.opacity = 1;
            }

        })
    }, [])
    
    const toTop = () => {
        window.scroll(0,0)
    }
    
    return (
        <div className="to-top" id="to-top" onClick={toTop}>
            <img src="/icons/chevron-up-white.svg" alt="" />
        </div>
    )
}
