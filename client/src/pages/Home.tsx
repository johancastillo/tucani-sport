import Banner from '../components/Banner'
import CategoriesPreview from '../components/CategoriesPreview'
import ToTop from '../components/to-top/ToTop'
import Carousel from '../widgets/Carousel'
import CategoriesBanners from '../widgets/CategoriesBanners'
import Slider from '../widgets/Slider'

export default function Home() {
    return (
        <div className="container page">
            <ToTop />
            <Slider />

            <CategoriesPreview />

            <Banner image="/img/banners/01.png" />
            <Carousel title="Más vendidos" category="sellers" data={""} />            

            <Banner image="/img/banners/02.png" />
            <Carousel title="Suéteres" category="sueters" data={""} />

            <Banner image="/img/banners/01.png" />
            <Carousel title="Conjuntos" category="conjuntos" data={""} />

            <Banner image="/img/banners/01.png" />
            <Carousel title="Joggers" category="joggers" data={""} />

        </div>
    )
}
