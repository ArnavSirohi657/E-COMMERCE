import "../CSS/Footer.css";

export default function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="footer-top">
        <div className="container">
          <div className="row text-white">
            <div className="col-md-3 col-6 mb-4">
              <h5>Get to Know Us</h5>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press Releases</a></li>
                <li><a href="#">Amazon Science</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <h5>Connect with Us</h5>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <h5>Make Money with Us</h5>
              <ul>
                <li><a href="#">Sell on Our Platform</a></li>
                <li><a href="#">Platform Accelerator</a></li>
                <li><a href="#">Protect Your Brand</a></li>
                <li><a href="#">Global Selling</a></li>
                <li><a href="#">Supply to Amazon</a></li>
                <li><a href="#">Become an Affiliate</a></li>
                <li><a href="#">Fulfilment by Us</a></li>
                <li><a href="#">Advertise Products</a></li>
                <li><a href="#">Amazon Pay on Merchants</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <h5>Let Us Help You</h5>
              <ul>
                <li><a href="#">Your Account</a></li>
                <li><a href="#">Returns Centre</a></li>
                <li><a href="#">Safety Alerts</a></li>
                <li><a href="#">100% Purchase Protection</a></li>
                <li><a href="#">Help</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center text-white py-3">
        <small>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</small>
      </div>
    </footer>
  );
}
