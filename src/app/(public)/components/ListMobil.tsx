import api from "@/lib/axios";
import CarCard from "./CarCard";
import apiServer from "@/lib/axiosServer";

export type Car = {
  id: number;
  name: string;
  price: number;
  hours: number;
  image: string;
  type: string;
  seats: number;
};

export const getCars = async () => {
  const res = await apiServer.get<{ data: Car[] }>("/cars");
  return res.data.data;
};

const ListMobil = async () => {
  const cars = await getCars();
  return (
    <div className="py-20 text-center">
      <div className="px-50 space-y-10">
        <h1 className="text-4xl font-bold text-gold-soft font-serif">
          Pilih Jenis Mobil
        </h1>
        <p>
          Kami memiliki faktor kunci yang menjadikan layanan kami terbaik.
          Pengemudi kami tidak hanya memiliki pengalaman luas menjelajahi
          jalanan Bali, tetapi juga siap memberikan bantuan cepat dalam setiap
          perjalanan.
        </p>
        <div className="lg:grid grid-cols-12 space-y-16">
          {cars.map((car) => (
            <CarCard
              className="col-span-4"
              key={car.id}
              img={`/${car.image}`}
              name={car.name}
              price={car.price}
              hours={car.hours}
              type={car.type}
              seat={car.seats}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListMobil;
