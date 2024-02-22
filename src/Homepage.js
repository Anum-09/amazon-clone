import React from "react";
import Header from "./Header";
import Product from "./Product";
import "./Homepage.css";

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

      <div className="home__row">
        <Product
          id="1234"
          title="Webber Naturals Collagen with Lysine and Vitamin C, 120 Tablets, Helps Support Joints, Muscles, and Skin"
          price={19.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/613f2rE7roL._AC_SY240_.jpg"
        />

        <Product
          id="1234"
          title="CONFETTERIA RAFFAELLO Coconut Almond Specialty Bag, 8 Individually Wrapped Confections, Ideal Stocking Stuffer, Christmas Chocolate, 80g"
          price={5.29}
          rating={3}
          image="https://m.media-amazon.com/images/I/61bzVH-QgrL._AC_SY240_.jpg"
        />
      </div>

    
      <div className="home__row">
      <Product
        id="1234"
        title="CeraVe Moisturizing Cream, Daily Face & Body Moisturizer Cream for Dry Skin With Hyaluronic Acid and Ceramides."
        price={28.54}
        rating={5}
        image="https://m.media-amazon.com/images/I/61Ci656OsnL._AC_SY240_.jpg"
      />

      <Product
        id="1234"
        title="e.l.f. Instant Lift Brow Pencil, Dual-Ended Precision Eyebrow Pencil For Defining & Shaping Brows, Neutral Brown"
        price={3.97}
        rating={4}
        image="https://m.media-amazon.com/images/I/51mTwGhChrL._AC_SY240_.jpg"
      />

      <Product
        id="1234"
        title="Vilicci Car Air Freshener, Modern Animal Scent, Long Lasting Fragrance for Auto and Home, 1 Bottle of Car Perfume"
        price={15.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/51g9xQiz5fL._AC_SY240_.jpg"
      />
      </div>

      <div className="home__row">
      <Product
        id="1234"
        title="HTC True Wireless Bluetooth Earbuds 2, In-Ear Headphones Noise Cancellation Voice Call Volume Control for iPhone, Android -IPX5 Waterproof/Built-in Mic/32H Playtime for Calling, Gaming, Running -Black"
        price={32.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/51jTqceCiNL._AC_SY240_.jpg"
      />
      </div>
    </div>
  );
};

export default Homepage;
