import logo from "./assets/logo.png";

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav--logo">
        <img width="107px" src={logo} alt="Food Truck Logo PNG" />
      </div>
      <button className="nav--button">Get In Touch</button>
    </nav>
  );
}

export default Navbar;
