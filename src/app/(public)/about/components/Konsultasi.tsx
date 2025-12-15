"use client";
import img from "@/assets/Car-Rental.png";
import { motion } from "motion/react";
const Konsultasi = () => {
	return (
		<section
			className="relative bg-fixed bg-cover bg-center h-120"
			style={{
				backgroundImage: `url(${img.src})`,
			}}
		>
			<div className="absolute inset-0 bg-black/50" />
			<div className="relative z-10 text-white flex h-full items-center justify-center text-center">
				<div className="space-y-5">
					<motion.h1
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true, amount: 0.2 }}
						className="text-4xl font-bold text-gold-soft tracking-wider"
					>
						BALI TRANS, MITRA PERJALANAN ANDA DI PULAU DEWATA!
					</motion.h1>
					<motion.h2
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true, amount: 0.2 }}
						className="text-2xl tracking-wider"
					>
						Untuk informasi penawaran terbaik, jangan ragu untuk segera
						menghubungi kami.
					</motion.h2>
					<motion.a
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true, amount: 0.2 }}
						href="https://wa.me/6281234567890"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="uppercase bg-gold-soft px-10 py-5 hover:cursor-pointer">
							konsultasi gratis
						</button>
					</motion.a>
				</div>
			</div>
		</section>
	);
};

export default Konsultasi;
