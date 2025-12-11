import MainLayout from "@/components/layouts/MainLayout";
import Hero from "./home/Hero";
import ListPerjalanan from "./home/ListPerjalanan";
import ListMobil from "./home/ListMobil";
import HubungiKami from "./home/HubungiKami";

export default function Home() {
	return (
		<MainLayout>
			<Hero />
			<ListPerjalanan />
			<ListMobil />
			<HubungiKami />
		</MainLayout>
	);
}
