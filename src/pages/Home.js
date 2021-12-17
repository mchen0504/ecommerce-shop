import Announcement from '../components/Announcement'
import CarouselSlide from '../components/CarouselSlide'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import HomeProducts from '../components/HomeProducts'
import Navigation from '../components/Nav'
import SectionTitle from '../components/SectionTitle'

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navigation/>
            <CarouselSlide/>
            <Categories/>
            <SectionTitle/>
            <HomeProducts/>
            <Footer/>
        </div>
    )
}

export default Home
