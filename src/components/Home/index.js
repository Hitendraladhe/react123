import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Build your business with us</h1>
        <img
          src="https://www.photowant.com/wp-content/uploads/2022/10/Modeling-in-Kerala-Photowant-54.jpg"
          alt="clothes to be noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button type="button" className="shop-now-button">
          Shop Now
        </button>
      </div>
      <img
        src="https://w7.pngwing.com/pngs/212/711/png-transparent-e-commerce-retail-service-shopping-fashion-women-miscellaneous-company-service.png"
        alt="dresses to be noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home
