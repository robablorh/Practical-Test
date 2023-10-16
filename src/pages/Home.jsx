import caro4 from "../images/loan.jpeg"
import Carousel from 'react-bootstrap/Carousel';
import Navbar1 from "../components/Navbar1";
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar1/>
      <div>

        <Carousel>
          <Carousel.Item interval={1000}>
            <img

              src={caro4}
              height="750"
              width="100%"
              style={{ filter: 'brightness(60%)' }}

            />
            
          </Carousel.Item>
       </Carousel>    
      </div>
      <Footer/>
    </>
  )
}

export default Home