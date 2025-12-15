"use client";
import Image from "next/image";
import img from "@/assets/Bali-TRANS-2-1.webp";
import { motion } from "motion/react";

const AboutUs = () => {
	return (
		<section className="w-full px-4 pt-50 pl-40 flex justify-center h-230">
			<div className="space-y-10 lg:w-[70%]">
				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true, amount: 0.2 }}
					className="relative text-5xl font-bold w-[60%] text-gold z-50 tracking-wider leading-16"
				>
					Kami Memastikan Setiap Perjalanan Anda Nyaman
				</motion.h1>
				<div className="flex gap-10 leading-7 tracking-wider">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true, amount: 0.2 }}
						className="space-y-5 w-[40%]"
					>
						<p>
							Bali Trans merupakan CV yang berbasis di bali. Didirikan sejak
							tahun 2008, kami telah membantu akomodasi berbagai konsumen baik
							penduduk lokal maupun turis domestik dan mancanegara melalui jasa
							sewa mobil.
						</p>
						<p>
							Bali Trans Mengusung moto “Your Travel Partner” dengan harapan dan
							keyakinan akan selalu menjadi mitra perjalanan terbaik Anda dalam
							mewujudkan pengalaman mengeksplorasi Bali yang aman, nyaman,
							menyenangkan, dan berkesan.
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true, amount: 0.2 }}
						className="-translate-y-60 w-[60%] flex justify-end z-10"
					>
						<Image
							src={img.src}
							alt="about"
							width={800}
							height={500}
							className="bg-dark"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
