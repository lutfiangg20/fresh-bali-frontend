"use client";
import img from "@/assets/Balitrans-7.png";
import { motion } from "motion/react";
import Image from "next/image";

const VisiMisi = () => {
  return (
    <section className="bg-white flex gap-10 justify-end px-50 py-20 pt-60 leading-8 tracking-wider">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-[50%]"
      >
        <Image src={img.src} width={500} height={500} alt="Visi dan Misi" />
      </motion.div>
      <div className="text-gray-600 w-[50%] space-y-10">
        <div className="space-y-5">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="uppercase text-5xl font-bold text-gold"
          >
            visi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Menjadi biro wisata terutama dalam penyediaan jasa sewa mobil Bali
            yang unggul dan terpercaya melalui jaminan kualitas pelayanan
            terbaik yang berorientasi pada tingkat kepuasaan konsumen dan
            penawaran harga kompetitif.
          </motion.p>
        </div>
        <div className="space-y-5">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="uppercase text-5xl font-bold text-gold"
          >
            misi
          </motion.h1>
          <motion.ul
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="list-disc pl-10"
          >
            <li>
              Memberi pelayanan terbaik dan berkualitas untuk segala jenis
              konsumen sehingga pengalaman berwisata di Bali yang aman, nyaman
              dan menyenangkan dapat terwujud.
            </li>
            <li>
              Memperkenalkan dunia pariwisata Indonesia terutama Bali kepada
              Khalayak luas, baik domestik maupun mancanegara.
            </li>
            <li>
              Membangun jaringan seluas – luasnya di seluruh penjuru nusantara
            </li>
          </motion.ul>
        </div>
        <div className="space-y-5">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="uppercase text-4xl font-bold text-gold"
          >
            JAMINAN DASAR LAYANAN
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Kami menjamin bahwa semua mobil yang kami sewakan dalam kondisi yang
            prima, aman, dan terawat dengan baik. Para supir kami adalah orang
            yang berpengalaman dan profesional, siap memberikan pelayanan
            terbaik selama perjalanan. Untuk pelanggan yang memilih layanan sewa
            mobil di Bali dengan supir dan BBM, mereka tidak perlu khawatir
            tentang bahan bakar karena kami sudah termasuk dalam biaya sewa.
            Sebagai perusahaan yang mengutamakan kepuasan pelanggan, kami selalu
            siap menerima masukan dan saran dari pelanggan kami untuk
            meningkatkan kualitas layanan kami.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
