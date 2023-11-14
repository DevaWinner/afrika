import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import YouTube from "react-youtube";
import "../styles/VideoComponent.css";

const VideoComponent = () => {
	const videoId = "kgIjscaMoMg";

	const opts = {
		playerVars: {
			autoplay: 0,
			controls: 0,
			showinfo: 0,
			rel: 0,
		},
	};

	return (
		<Container>
			<Row>
				<Col md={{ span: 8, offset: 2 }}>
					<div className="video-container">
						<YouTube videoId={videoId} opts={opts} />
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default VideoComponent;
