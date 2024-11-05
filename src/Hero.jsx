import pizza from "./assets/pizza-img.png";

function Hero() {
  return (
    <main className="hero">
      <div className="hero--desc">
        <h1 className="hero--heading">
          Discover the <br />
          <span className="red-text">Best</span> Food
          <br /> and Drinks
        </h1>
        <p className="text fs-16 mt-26">
          Naturally made Healthcare Products for the
          <br /> better care & support of your body.
        </p>
        <button className="bg-button">Explore Now!</button>
      </div>
      <div className="hero--graphics">
        <svg
          className="hero--svg"
          // width="752"
          // height="839"
          viewBox="0 0 752 839"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M111.512 36.3371C40.9348 45.1719 7.76349 15.7936 0 0L752 1.42498V835.396C484.285 867.417 547.679 676.51 560.03 640.173C572.381 603.836 657.779 365.152 547.679 190.591C437.579 16.031 199.733 25.2934 111.512 36.3371Z"
            fill="#E23744"
          />
        </svg>
        <img className="hero--img" src={pizza} alt="Pizza Image PNG" />
      </div>
    </main>
  );
}

export default Hero;
