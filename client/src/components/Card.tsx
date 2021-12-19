import { Link } from "wouter";
import "../styles/_componentCardCarousel.css";

export default function Card({ image }: any) {
    return (
        <Link href="/producto/1">
            <a>
                <div className="card card-carousel" id="card-carousel" style={{ width: '14rem' }}>
                    <img src={image} className="card-img-top" alt="..." />
                </div>
            </a>
        </Link>
    )
}
