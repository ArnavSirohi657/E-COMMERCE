import "../CSS/Hero.css";
export default function Hero() {
  return (
    <div className="hero-banner">
      <div className="hero-left">
        <p className="hero-announced">Announced:</p>
        <h1 className="hero-heading">
          ZERO referral fee <br />
          on over 1.2 crore <br />
          products
        </h1>
        <p className="hero-subtitle">Highest-ever seller fee reduction</p>
        <p className="hero-link">Know more →</p>
        <button className="hero-button">Sign up</button>
      </div>
      <div className="hero-right">
        <img src="/Sell/Sell.gif" alt="Megaphone" className="hero-image" />
      </div>
    </div>
  );
}
