import { Container, Row, Col } from "react-bootstrap";
import ProgramCard from "./ProgramCard";
import programData from "../data/programData.json";
import "../styles/ProgramAreas.css";

const ProgramAreas = () => {
	return (
		<Container className="program-areas-container">
			<Row xs={1} md={3}>
				{programData.map((program, index) => (
					<ProgramCard key={index} {...program} />
				))}
			</Row>
		</Container>
	);
};

export default ProgramAreas;
