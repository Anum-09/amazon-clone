import React from 'react'
import Header from "./Header"
import Product from "./Product"
import "./Homepage.css"

const Homepage = () => {
  return (
    <div className="home">
      <Header />
      <img 
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
      />

       {/* product.id , product.title, product.image, product.price, product.rating  */}
      <Product 
         id="1234"
         title="Amazon basic USB 2.0 A-Male to Micro B cable"
         price={17.99}
         rating={4}
         image="https://m.media-amazon.com/images/I/71AB2RWLveL._AC_UL640_FMwebp_QL65_.jpg"
      />

    </div>
  )
}

export default Homepage
