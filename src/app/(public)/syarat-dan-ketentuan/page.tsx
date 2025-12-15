import Konsultasi from "../about/components/Konsultasi";
import Hero from "./components/Hero";
import KetentuanTarif from "./components/KetentuanTarif";

const page = () => {
	return (
		<div>
			<Hero />
			<KetentuanTarif />
			<Konsultasi />
		</div>
	);
};

export default page;
