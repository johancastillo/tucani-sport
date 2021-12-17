import { useEffect } from 'react';
import Card from '../components/Card';
import "../styles/_widgetCarousel.css";

export default function Carousel() {

    const moveSlider = (move:any) => {
        const carousel = document.getElementById("carousel-component");
        const cardCarousel:any = document.getElementById("card-carousel")
        let sizeSlide:any = cardCarousel?.offsetWidth + 10

        if(move === "left"){
            sizeSlide =- sizeSlide
        }
        
        carousel?.scrollBy(sizeSlide, 0)
        

    }

    return (
        <div className="my-4">

            <div className="carousel-header">
                <h4>Más vendidos</h4>

                <div className="controls">
                    <button onClick={() => moveSlider("left")} className="btn">
                        <img src="/icons/chevron-left.svg" alt="" width="34px" />
                    </button>

                    <button onClick={() => moveSlider("right")} className="btn">
                        <img src="/icons/chevron-right.svg" alt="" width="34px" />
                    </button>
                </div>
            </div>

            <div className="carousel-component" id="carousel-component">
                <Card image="/img/products/01.png" />
                <Card image="/img/products/01.png" />
                <Card image="/img/products/01.png" />
                <Card image="/img/products/01.png" />
                <Card image="/img/products/01.png" />
                <Card image="/img/products/01.png" />
                <Card image="/img/products/01.png" />
                <Card image="/img/products/01.png" />
                <Card image="/img/products/01.png" />
                <Card image="/img/products/01.png" />
                <Card image="/img/products/01.png" />
                <Card image="/img/products/01.png" />
                <Card image="/img/products/01.png" />
                <Card image="/img/products/01.png" />
                <Card image="/img/products/01.png" />
                <Card image="/img/products/01.png" />
                <Card image="/img/products/01.png" />
                <Card image="/img/products/01.png" />
            </div>
        </div>
    )
}
