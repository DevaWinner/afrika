import HeroCarousel from "../components/Carousel";
import ImpactSection from "../components/ImpactSection";
import "../styles/Home.css";

function Home() {
	return (
		<main>
			<section className="hero">
				<HeroCarousel />

				<div className="overlay heading">
					<div className="text">
						<h3>Join the Change:</h3>
						<h1>
							Impacting
							<br />
							Africans, <br />
							Uplifting Africa.
						</h1>
					</div>
				</div>
			</section>
			<ImpactSection />
			<h1>Home Page</h1>
		</main>
	);
}

export default Home;
