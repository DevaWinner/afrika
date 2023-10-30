import React from "react";
import { Container, Row } from "react-bootstrap";
import ProfileCard from "./ProfileCard";

const ProfileSection = ({ profiles, type }) => {
	return (
		<section className={`${type.toLowerCase()}-members my-5`}>
			<Container>
				<Row className="d-flex justify-content-center">
					{profiles.map((profile, index) => (
						<ProfileCard key={index} type={type} {...profile} />
					))}
				</Row>
			</Container>
		</section>
	);
};

export default ProfileSection;
