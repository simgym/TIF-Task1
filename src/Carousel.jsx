import React, { useState } from "react";

const Carousel = ({ itemsPerPage, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <>
      <div className="cards-container">
        {currentItems.map((item, index) => (
          <div className="card" key={index}>
            <img
              className="card--img"
              src={item.image}
              alt="Card Image 1 PNG"
            />
            <div className="card--content">
              <h3 className="card--heading">{item.title}</h3>
              <p className="text fs-15 lh-27">{item.description}</p>
              <button className="md-button grey-transparent-btn mt-26">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="controls">
        <button
          className="prv"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.44189 15.8523C9.99486 15.5393 10.1753 14.7427 9.80834 14.234C9.70603 14.0921 8.12567 12.6312 6.29636 10.9875L2.97042 7.99899L6.2973 5.01011C8.12699 3.36619 9.70744 1.90503 9.80928 1.76312C9.92885 1.59653 9.99467 1.35683 9.99505 1.08643C9.99562 0.714453 9.95488 0.630597 9.62964 0.333876C9.29554 0.0291567 9.21935 0 8.75851 0H8.25353L4.12681 3.76388L0 7.52768V7.959C0 8.21418 0.062993 8.47719 0.154181 8.60293C0.377575 8.91117 7.52253 15.452 7.95885 15.7478C8.38772 16.0386 9.03263 16.084 9.44189 15.8523Z"
              fill="#424961"
            />
          </svg>
        </button>
        <span className="text fs-15 fw-400">{`${currentPage}/${totalPages}`}</span>
        <button
          className="nxt"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.558107 0.147705C0.00513666 0.460681 -0.175258 1.25727 0.19166 1.766C0.293975 1.9079 1.87433 3.3688 3.70364 5.01247L7.02958 8.00101L3.7027 10.9899C1.87301 12.6338 0.292561 14.095 0.190718 14.2369C0.0711464 14.4035 0.00532551 14.6432 0.00494831 14.9136C0.00438252 15.2855 0.0451198 15.3694 0.370358 15.6661C0.70446 15.9708 0.780652 16 1.24149 16H1.74647L5.87319 12.2361L10 8.47232V8.041C10 7.78582 9.93701 7.52281 9.84582 7.39707C9.62243 7.08883 2.47747 0.547977 2.04115 0.252202C1.61228 -0.0385846 0.967365 -0.0839958 0.558107 0.147705Z"
              fill="#424961"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Carousel;
