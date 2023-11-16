// ProfileSection.jsx
import React from "react";
import { Container, Row } from "react-bootstrap";
import ProfileCard from "./ProfileCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProfileSection = ({ profiles, type }) => {
	const { ref: sectionRef, inView: sectionInView } = useInView({
		triggerOnce: false,
	});

	return (
		<motion.section
			className={`${type.toLowerCase()}-members my-5`}
			ref={sectionRef}
			initial={{ opacity: 0, y: 50 }}
			animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
			transition={{ duration: 0.8 }}
		>
			<Container>
				<Row className="d-flex justify-content-center profiles" xs={12}>
					{profiles.map((profile, index) => (
						<ProfileCard key={index} type={type} {...profile} />
					))}
				</Row>
			</Container>
		</motion.section>
	);
};

export default ProfileSection;
