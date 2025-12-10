"use client";
import { SeatIcon } from "@phosphor-icons/react";
import { Fuel, User } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { rupiah } from "@/lib/rupiah";

export type CardProps = {
	img: string;
	name: string;
	price: number;
	hours: number;
	type: string;
	seat: number;
	className?: string;
};
const CarCard = ({
	img,
	name,
	price,
	hours,
	type,
	seat,
	className,
}: CardProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true, amount: 0.2 }}
			className={`space-y-4 ${className}`}
		>
			<div className="flex justify-center ">
				<Image
					className="bg-gray-300 rounded-xl"
					alt={name}
					src={img}
					height={200}
					width={300}
				/>
			</div>
			<h1 className="text-xl font-semibold font-serif">{name}</h1>
			<div className="flex justify-center">
				<div className="border-b border-b-gold-soft w-[300]">
					<p className="text-gold-soft font-bold font-serif">
						{rupiah(price)} / {hours} | {type}
					</p>
				</div>
			</div>
			<div className="flex justify-center gap-2">
				<div className="flex gap-2">
					<User />
					Driver
				</div>
				<div className="flex gap-2">
					<Fuel />
					BBM
				</div>
				<SeatIcon size={22} />
				<div className="flex gap-2">{seat} Seats</div>
			</div>
			<Button className="w-[300] bg-black text-gold-soft border border-gold-soft uppercase py-6">
				rent a car
			</Button>
		</motion.div>
	);
};

export default CarCard;
