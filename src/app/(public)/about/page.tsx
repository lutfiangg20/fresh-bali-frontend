import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Konsultasi from "./components/Konsultasi";
import VisiMisi from "./components/VisiMisi";

const page = () => {
	return (
		<div>
			<Hero />
			<AboutUs />
			<VisiMisi />
			<Konsultasi />
		</div>
	);
};

export default page;
