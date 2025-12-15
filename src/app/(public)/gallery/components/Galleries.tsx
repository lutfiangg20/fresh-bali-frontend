import api from "@/lib/axios";
import ImageSection from "./ImageSection";

type Gallery = {
	id: number;
	name: string;
};

const Galleries = async () => {
	const galleries = await api.get<{ message: string; data: Gallery[] }>(
		"/galleries",
	);
	return (
		<div className="flex justify-center py-20 bg-white">
			<div className="grid grid-cols-12 gap-5">
				{galleries.data.data.map((g) => (
					<ImageSection name={g.name} key={g.id} />
				))}
			</div>
		</div>
	);
};

export default Galleries;
