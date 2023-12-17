import React from "react";
import PhotoAlbum from "react-photo-album";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const photos = [
	{
		src: "https://inclusionafrika.imgix.net/photo/1.jpg",
		width: 6000,
		height: 4000,
	},
	{
		src: "https://inclusionafrika.imgix.net/photo/12.jpg",
		width: 6000,
		height: 4000,
	},
	{
		src: "https://inclusionafrika.imgix.net/photo/3.jpg",
		width: 6000,
		height: 4000,
	},
	{
		src: "https://inclusionafrika.imgix.net/photo/4.jpg",
		width: 6000,
		height: 4000,
	},
	{
		src: "https://inclusionafrika.imgix.net/photo/6.jpg",
		width: 6000,
		height: 4000,
	},
	{
		src: "https://inclusionafrika.imgix.net/photo/7.jpg",
		width: 6000,
		height: 4000,
	},
	{
		src: "https://inclusionafrika.imgix.net/photo/13.jpeg",
		width: 3120,
		height: 4160,
	},

	{
		src: "https://inclusionafrika.imgix.net/photo/11.jpg",
		width: 3120,
		height: 4160,
	},
	{
		src: "https://inclusionafrika.imgix.net/photo/10.jpg",
		width: 3120,
		height: 4160,
	},
];

const ImageGrid = () => {
	const { ref: textRef, inView: textInView } = useInView({
		triggerOnce: false,
	});
	return (
		<>
			<Container ref={textRef} className="top">
				<motion.div
					className="text d-flex top"
					initial={{ opacity: 0, y: 100 }}
					animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
					transition={{ duration: 0.8 }}
				>
					<div className="title d-flex">
						<h2>Beneficiaries Gallery</h2>
						<hr />
					</div>
					<p>
						Explore our beneficiaries gallery below to see how we're working
						towards a brighter future for African young adults:
					</p>
				</motion.div>
				<div>
					<PhotoAlbum layout="rows" photos={photos} />
				</div>
			</Container>
		</>
	);
};

export default ImageGrid;
