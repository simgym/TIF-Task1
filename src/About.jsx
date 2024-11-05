import img from "./assets/aboutus-img.png";

function About() {
  return (
    <section className="aboutus">
      <div className="aboutus--content">
        <img src={img} alt="about-us-img" />
        <div className="aboutus--desc">
          <h2 className="aboutus-heading">About Us</h2>
          <p className="text aboutus--para fs-15">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </p>
          <button className="md-button button-red">Read More</button>
        </div>
      </div>
    </section>
  );
}

export default About;
