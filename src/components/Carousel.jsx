import React from "react";
import image1 from "/assets/carousel/1.jpg";
import image2 from "/assets/carousel/2.jpg";
import image3 from "/assets/carousel/3.jpg";
import "../styles/Carousel.css";

const HeroCarousel = () => {
	return (
		<div>
			<div
				id="carouselExampleSlidesOnly"
				className="carousel"
				data-bs-ride="carousel"
			>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src={image1}
							className="d-block w-100 h-100 carousel-image"
							alt="First slide"
						/>
					</div>

					<div className="carousel-item">
						<img
							src={image2}
							className="d-block w-100 h-100 carousel-image"
							alt="Second slide"
						/>
					</div>

					<div className="carousel-item">
						<img
							src={image3}
							className="d-block w-100 h-100 carousel-image"
							alt="Third slide"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroCarousel;
