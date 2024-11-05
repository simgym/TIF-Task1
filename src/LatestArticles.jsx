import img1 from "./assets/card-img1.png";
import img2 from "./assets/card-img2.jpeg";
import img3 from "./assets/card-img3.jpeg";
import img4 from "./assets/card-img4.jpeg";
import img5 from "./assets/card-img5.jpeg";
import img6 from "./assets/card-img6.jpeg";
import Carousel from "./Carousel";
const cardData = [
  {
    image: img1,
    title: `Grilled  Tomatoes at Home`,
    description: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`,
  },
  {
    image: img2,
    title: `Snacks for Travel`,
    description: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`,
  },
  {
    image: img3,
    title: `Post-workout Recipes`,
    description: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`,
  },
  {
    image: img4,
    title: `How To Grill Corn`,
    description: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`,
  },
  {
    image: img5,
    title: `Crunchwrap Supreme`,
    description: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`,
  },
  {
    image: img6,
    title: `Broccoli Cheese Soup`,
    description: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`,
  },
];

function LatestArticles() {
  return (
    <section className="articles">
      <h2 className="articles--heading">Latest Articles</h2>
      <Carousel itemsPerPage={3} data={cardData} />
    </section>
  );
}

export default LatestArticles;
