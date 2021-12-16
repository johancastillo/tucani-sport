import React from 'react'

export default function Slider() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={4} aria-label="Slide 5" />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/img/slider/slide-02.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="/img/slider/slide-01.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="/img/slider/slide-04.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="/img/slider/slide-03.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="/img/slider/slide-00.png" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}
