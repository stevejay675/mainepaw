import './otherBanner.css';

export default function BannerSection() {
  return (
    <section className="otherBanner-section">
      <div className="overlay-blur"></div>
      <div className="content">
        <h1>Discover Maine Coon Kittens</h1>
        <p>Meet our latest arrivals of lovable kittens.</p>
        <button className="action-btn">Adopt Now</button>
      </div>
    </section>
  );
}
