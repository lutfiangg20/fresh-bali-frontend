"use client";
import Image from "next/image";
import heroImg from "@/assets/Car-Rental.png"; // ganti dengan image kamu
import { motion } from "motion/react";

const Hero = () => {
	return (
		<section className="relative h-[50vh] w-full">
			{/* Background */}
			<div className="absolute inset-0 -z-10">
				<Image
					src={heroImg}
					alt="Mobil"
					fill
					className="object-cover brightness-50"
					priority
				/>
			</div>

			{/* Content */}
			<div className="h-full flex flex-col justify-center items-start px-8 lg:px-28 text-white">
				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, amount: 0.2 }}
					className="uppercase text-4xl lg:text-6xl font-bold leading-tight max-w-2xl"
				>
					tentang kami
				</motion.h1>
			</div>
		</section>
	);
};

export default Hero;
