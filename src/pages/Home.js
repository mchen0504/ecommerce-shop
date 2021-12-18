import Announcement from '../components/Announcement'
import Categories from '../components/home/Categories'
import Footer from '../components/Footer'
import HomeProducts from '../components/home/HomeProducts'
import NavSlide from '../components/home/NavSlide'
import SectionTitle from '../components/home/SectionTitle'

const Home = () => {
    return (
        <div>
            <Announcement/>
            <NavSlide/>
            <Categories/>
            <SectionTitle/>
            <HomeProducts/>
            <Footer/>
        </div>
    )
}

export default Home
