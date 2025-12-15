import Hero from "./components/Hero";
import HubungiKami from "./components/HubungiKami";
import ListMobil from "./components/ListMobil";
import ListPerjalanan from "./components/ListPerjalanan";

export default function Home() {
	return (
		<div>
			<Hero />
			<ListPerjalanan />
			<ListMobil />
			<HubungiKami />
		</div>
	);
}
