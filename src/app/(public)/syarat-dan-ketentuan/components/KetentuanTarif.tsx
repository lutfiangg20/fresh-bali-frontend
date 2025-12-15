"use client";
import img from "@/assets/Balitrans-7.png";
import { motion } from "motion/react";
const KetentuanTarif = () => {
	return (
		<section
			className="relative bg-fixed bg-cover bg-center px-20 py-20"
			style={{
				backgroundImage: `url(${img.src})`,
			}}
		>
			<div className="absolute inset-0 bg-white/90" />
			<div className="relative z-10 text-black flex h-full items-center justify-center ">
				<div className="w-[70%]">
					<div className="space-y-5 border-t-gold border-b-gold border-2 py-5">
						<motion.h1
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true, amount: 0.2 }}
							className="uppercase text-3xl tracking-wider"
						>
							ketentuan tarif
						</motion.h1>
						<motion.ul
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true, amount: 0.2 }}
							className="tracking-wider list-decimal pl-10"
						>
							<li className="leading-10">
								<h2>Ketentuan Sewa Kendaraan</h2>
								<div className="pl-10">
									<ul className="list-decimal">
										<li>
											<h3>Termasuk dalam Tarif Sewa</h3>
											<div>
												Harga sewa kendaraan sudah mencakup biaya bahan bakar
												serta upah sopir.
											</div>
										</li>
										<li>
											<h3>Biaya Tambahan</h3>
											<div>
												Pengeluaran tambahan seperti tol, tiket masuk destinasi
												wisata, dan biaya parkir menjadi tanggung jawab penyewa.
											</div>
										</li>
										<li>
											<h3>Durasi Sewa</h3>
											<div>
												Waktu sewa dihitung selama 10–12 jam sejak penjemputan
												di hotel atau terminal kedatangan. Jika penjemputan
												dilakukan di Bandara Ngurah Rai, Bali, perhitungan waktu
												sewa tetap sama.
											</div>
										</li>
										<li>
											<h3>Biaya Overtime</h3>
											<div>
												Apabila penggunaan kendaraan melebihi durasi yang
												disepakati, akan dikenakan biaya tambahan sebesar 10%
												dari tarif sewa.
											</div>
										</li>
										<li>
											<h3>Ketentuan Pembayaran</h3>
											<ul className="list-disc">
												<li>
													Uang Muka (DP): Untuk mengonfirmasi pemesanan, penyewa
													wajib membayar DP sebesar 30% minimal 7 hari sebelum
													kedatangan di Bali.
												</li>
												<li>
													Pemesanan Mendadak: Untuk pemesanan dalam waktu 2–3
													hari sebelum keberangkatan atau pada hari yang sama,
													pembayaran dapat dilakukan saat serah terima
													kendaraan.
												</li>
												<li>
													Metode Pembayaran: Pembayaran dapat dilakukan secara
													tunai, melalui transfer bank, atau menggunakan kartu
													debit/kredit berlogo VISA/MasterCard.
												</li>
											</ul>
										</li>
										<li>
											<h3>Wilayah Layanan dengan Tarif Standar</h3>
											<div>
												<h4>Layanan ini mencakup area berikut:</h4>
												<ul className="list-disc pl-5">
													<li>Kuta</li>
													<li>Denpasar</li>
													<li>Seminyak</li>
													<li>Canggu</li>
													<li>Jimbaran</li>
													<li>Nusa Dua</li>
												</ul>
											</div>
										</li>
										<li>
											<h3>Biaya Tambahan untuk Perjalanan ke Luar Kota Bali</h3>
											<div>
												<h4>
													Jika tujuan perjalanan berada di luar area standar,
													akan dikenakan biaya tambahan sebagai berikut:
												</h4>
												<ul className="list-disc pl-5">
													<li>Kabupaten Tabanan: Rp 150.000</li>
													<li>Kabupaten Klungkung/Semarapura: Rp 150.000</li>
													<li>Kabupaten Bangli & Karangasem: Rp 200.000</li>
													<li>Kabupaten Buleleng/Singaraja: Rp 250.000</li>
													<li>Kabupaten Jembrana/Negara: Rp 250.000</li>
												</ul>
											</div>
										</li>
										<li>
											<h3>Akomodasi Sopir untuk Perjalanan Luar Kota</h3>
											<div>
												Jika penyewa menginap di luar kota sebagaimana
												disebutkan di poin 7, maka sopir akan bermalam di
												sekitar lokasi tersebut. Biaya akomodasi dan konsumsi
												sopir sebesar Rp 250.000 per malam menjadi tanggung
												jawab penyewa.
											</div>
										</li>
										<li>
											<h3>Ketentuan Tarif pada Hari Raya</h3>
											<div>
												Tarif sewa tidak berlaku pada hari-hari besar seperti
												Idul Fitri, Natal, dan Tahun Baru. Harga sewa akan
												disesuaikan sesuai dengan kebijakan yang berlaku.
											</div>
										</li>
									</ul>
								</div>
							</li>
						</motion.ul>
					</div>
					<div className="py-5">
						<h1 className="text-3xl">KETENTUAN PENGGUNAAN MOBIL</h1>
						<ul className="list-disc leading-9">
							<li>
								Penyewa dilarang menggunakan kendaraan untuk aktivitas yang
								melanggar hukum di Republik Indonesia.
							</li>
							<li>
								Jika ingin mengubah paket sewa di luar kesepakatan awal, penyewa
								wajib mengonfirmasi terlebih dahulu sebelum menggunakan
								kendaraan.
							</li>
							<li>
								Dilarang membawa barang atau cairan berbahaya yang mudah
								terbakar atau memiliki aroma menyengat.
							</li>
							<li>
								Bali Trans tidak bertanggung jawab atas kehilangan atau
								kerusakan barang bawaan penyewa.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default KetentuanTarif;
