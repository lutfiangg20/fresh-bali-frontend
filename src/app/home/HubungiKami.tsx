"use client";

import { WhatsappLogoIcon } from "@phosphor-icons/react";
import { Clock, Mail, Phone } from "lucide-react";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });

const HubungiKami = () => {
	return (
		<div className="flex justify-center w-full">
			<div className="grid grid-cols-12  gap-10 w-[60%]">
				<MapComponent />
				<div className="col-span-6 space-y-4">
					<div className="text-center space-y-4">
						<h1 className="text-2xl">Hubungi kami</h1>
						<h2 className="text-xl">Alamat</h2>
						<p className="leading-8">
							Jln. Raya Buduk, perum Wahyu Bernasi Permai, Jl. Rahayu X/22 Br.
							Bernasi, Ds. Buduk, Kec Mengwi, Kab. Badung - Bali - Indonesia
						</p>
					</div>
					<div className="flex gap-2">
						<Clock />
						<span>Senin - Minggu pukul 06.00 s/d 23.59 Wita</span>
					</div>
					<div className="flex gap-2">
						<Phone />
						<span>0823-3978-6796</span>
					</div>
					<div className="flex gap-2">
						<WhatsappLogoIcon size={26} />
						<span>0823-3978-6796</span>
					</div>
					<div className="flex gap-2">
						<Mail />
						<span>balitrans17@gmail.com</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HubungiKami;
