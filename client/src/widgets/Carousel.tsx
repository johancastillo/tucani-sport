import { useEffect } from 'react';
import Card from '../components/Card';
import "../styles/_widgetCarousel.css";

export default function Carousel() {

    const moveSlider = (event:any, move:any) => {
        const cardCarousel:any = document.getElementById("card-carousel")
        let sizeSlide:any = cardCarousel?.offsetWidth + 10


        let arrowButton = event.target as HTMLElement
        let arrowControls = arrowButton?.parentNode
        let carouselHeader = arrowControls?.parentNode
        let boxCarousel = carouselHeader?.parentNode

        let carousel = boxCarousel?.querySelector(".carousel-component")

        console.log()

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
                    <button onClick={(e) => moveSlider(e, "left")} className="btn button-left">
                        <img src="/icons/chevron-left.svg" alt="" width="34px" />
                    </button>

                    <button onClick={(e) => moveSlider(e, "right")} className="btn button-right">
                        <img src="/icons/chevron-right.svg" alt="" width="34px" />
                    </button>
                </div>
            </div>

            <div className="carousel-component">
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
