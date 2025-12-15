"use client";
import Image from "next/image";
import heroImg from "@/assets/Car-Rental.png"; // ganti dengan image kamu
import Link from "next/link";
import { motion } from "motion/react";

const Hero = () => {
	return (
		<section className="relative h-[90vh] w-full">
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
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, amount: 0.2 }}
					className="text-4xl lg:text-6xl font-bold leading-tight max-w-2xl"
				>
					Sewa Mobil Mudah & Cepat Untuk Perjalanan Anda
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true, amount: 0.2 }}
					className="mt-5 text-lg lg:text-xl max-w-xl opacity-90"
				>
					Layanan rental mobil terbaik dengan pilihan armada lengkap, harga
					bersahabat, dan pelayanan profesional.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true, amount: 0.2 }}
					className="mt-8 flex gap-5"
				>
					<Link
						href="/sewa"
						className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-85 transition"
					>
						Lihat Mobil
					</Link>

					<Link
						href="/kontak"
						className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
					>
						Hubungi Kami
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
