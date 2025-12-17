"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { ThemeProvider } from "./ThemeProvider";

type Props = {
	children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
	const pathname = usePathname();
	const [scroll, setScroll] = useState(0);
	useEffect(() => {
		const onScroll = () => {
			setScroll(window.scrollY);
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="dark"
			enableSystem
			disableTransitionOnChange
		>
			<div>
				<div
					className={`fixed w-full z-10 hidden lg:block transition ease-in-out duration-500 ${
						scroll >= 200 ? "-translate-y-full" : "translate-y-0"
					}`}
				>
					<div
						className={`p-10 flex justify-around items-center ${
							pathname !== "/" ? "" : "text-white"
						}`}
					>
						<Image alt="logo" src={logo.src} height={50} width={160} />
						<nav className="uppercase font-semibold flex gap-10">
							<Link href="/">home</Link>
							<Link href="/about">tentang kami</Link>
							{/* <Link href="/sewa">Semua Mobil</Link> */}
							<Link href="/syarat-dan-ketentuan">syarat dan ketentuan</Link>
							<Link href="/gallery">galery</Link>
							<Link href="/kontak">kontak</Link>
						</nav>
						<div>
							<p className="">Call Us Today!</p>
							<h5>0812-3456-7899</h5>
						</div>
					</div>
				</div>
				<main>{children}</main>
				<div>
					<p className="text-center py-4">Copyright © 2025 FRESH TRANS BALI</p>
				</div>
			</div>
		</ThemeProvider>
	);
};

export default MainLayout;
