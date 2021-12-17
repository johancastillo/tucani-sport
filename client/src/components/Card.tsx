import "../styles/_componentCardCarousel.css";

export default function Card({image}:any) {
    return (
        <div className="card card-carousel" id="card-carousel" style={{ width: '14rem' }}>
            <img src={image} className="card-img-top" alt="..." />
        </div>
    )
}
