"use client";

import { motion } from "motion/react";

type Props = {
	name: string;
};
const ImageSection = ({ name }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.4 }}
			viewport={{ once: true, amount: 0.2 }}
			className="relative col-span-3 "
		>
			<div className="absolute inset-0 hover:bg-black/50 transition duration-400 rounded-xl" />
			<img
				className="object-cover w-70 h-50 rounded-xl"
				src={`http://localhost:3001/images/${name}`}
				alt={name}
			/>
		</motion.div>
	);
};

export default ImageSection;
