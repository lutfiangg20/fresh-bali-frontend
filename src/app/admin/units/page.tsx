import { getCars } from "@/app/(public)/components/ListMobil";
import AddUnit from "./components/AddUnit";

const page = async () => {
  const cars = await getCars();
  console.log(cars);
  return (
    <div>
      <div className="flex justify-end">
        <AddUnit />
      </div>
      {cars.map((car) => (
        <p key={car.id}>{car.name}</p>
      ))}
    </div>
  );
};

export default page;
