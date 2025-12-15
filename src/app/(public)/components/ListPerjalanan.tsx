"use client";
import { BriefcaseBusiness, HandHeart, TreePalm, Users } from "lucide-react";
import { motion } from "motion/react";
import { FC, SVGProps } from "react";
type CardProps = {
	logo: FC<SVGProps<SVGSVGElement>>;
	title: string;
	content: string;
};

const list: CardProps[] = [
	{
		logo: TreePalm,
		title: "Perjalanan Pribadi",
		content:
			"Kebebasan untuk menikmati liburan sesuai dengan keinginan Anda, dengan berbagai pilihan aktivitas dan fasilitas yang memanjakan. ",
	},
	{
		logo: BriefcaseBusiness,
		title: "Perjalanan Bisnis",
		content:
			"Kemudahan dalam mengatur perjalanan bisnis Anda, dengan akomodasi dan layanan yang profesional",
	},
	{
		logo: Users,
		title: "Liburan Keluarga",
		content:
			"Pengalaman liburan tak terlupakan untuk seluruh keluarga Anda, dengan berbagai aktivitas menyenangkan.",
	},
	{
		logo: HandHeart,
		title: "Pernikahan",
		content:
			"Dengan tim profesional, Anda dapat mencapai penampilan pernikahan yang memukau dan elegan. ",
	},
];

const Card = ({ logo, title, content }: CardProps) => {
	const Icon = logo;
	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true, amount: 0.2 }}
			className="text-center w-80 space-y-5"
		>
			<div className="flex justify-center">
				<Icon className="w-16 h-16" />
			</div>
			<h1 className="font-bold text-2xl">{title}</h1>
			<p>{content}</p>
		</motion.div>
	);
};

const ListPerjalanan = () => {
	return (
		<div className="flex gap-10 justify-center py-40">
			{list.map((l) => (
				<Card key={l.title} logo={l.logo} title={l.title} content={l.content} />
			))}
		</div>
	);
};

export default ListPerjalanan;
