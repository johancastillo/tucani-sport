import Banner from '../components/Banner'
import Carousel from '../widgets/Carousel'
import CategoriesBanners from '../widgets/CategoriesBanners'
import Slider from '../widgets/Slider'

export default function Home() {
    return (
        <div className="container page">
            <Slider />

            <CategoriesBanners />

            <Banner image="/img/banners/01.png" />
            <Carousel />            

            <Banner image="/img/banners/01.png" />
            <Carousel />            

            <Banner image="/img/banners/01.png" />
            <Carousel />            

        </div>
    )
}
