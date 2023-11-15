import Navbar from "../components/NavBar";
import ProfileSection from "../components/ProfileSection";
import boardMembersData from "../data/boardMembersData.json";
import foundersData from "../data/foundersData.json";
import techTeamData from "../data/techTeamData.json";
import "../styles/OurTeam.css";

const OurTeam = () => {
	return (
		<>
			<Navbar />
			<div className="team-header">
				<img
					src="https://inclusionafrika.imgix.net/happy-people.jpg"
					alt="medium-shot-happy-african-people"
					className="img-fluid"
				/>
				<div className="overlay">
					<h1 className="text">Meet the Team</h1>
				</div>
			</div>
			<section className="container top">
				<div className="text d-flex">
					<div className="title d-flex"></div>
					<p>
						Our team is made up of a diverse group of people and experiences. We
						are united by our passion for helping others and our desire to make
						a difference in the world.
					</p>
				</div>
				<div className="text d-flex">
					<div className="title d-flex">
						<h2>Founders</h2>
						<hr />
					</div>
				</div>
				<ProfileSection profiles={foundersData} type="Founder" />
				<div className="text d-flex">
					<div className="title d-flex">
						<h2>Board Members</h2>
						<hr />
					</div>
				</div>
				<ProfileSection profiles={boardMembersData} type="Board" />
				<div className="text d-flex">
					<div className="title d-flex">
						<h2>Tech Team</h2>
						<hr />
					</div>
				</div>
				<ProfileSection profiles={techTeamData} type="Tech" />
			</section>
		</>
	);
};

export default OurTeam;
