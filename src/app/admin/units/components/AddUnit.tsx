"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, useState } from "react";
import { createUnit } from "./createUnit";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

export type CreateUnit = {
  name: string;
  price: string;
  hours: number;
  image: File;
  type: string;
  seats: string;
};

const AddUnit = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [formdata, setFormData] = useState<CreateUnit>({} as CreateUnit);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", formdata.name);
    form.append("price", formdata.price);
    form.append("hours", formdata.hours.toString());
    form.append("image", formdata.image);
    form.append("type", formdata.type);
    form.append("seats", formdata.seats);

    try {
      await createUnit(form);
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Tambah</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tambah Unit</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label>Nama Unit</Label>
            <Input
              onChange={(e) =>
                setFormData({ ...formdata, name: e.target.value })
              }
              type="text"
            />
          </div>
          <div className="space-y-2">
            <Label>Harga Sewa</Label>
            <Input
              onChange={(e) =>
                setFormData({ ...formdata, price: e.target.value })
              }
              type="text"
            />
          </div>
          <div className="space-y-2 flex justify-between gap-4">
            <div className="space-y-2 w-full">
              <Label>Durasi</Label>
              <Select
                onValueChange={(e) => setFormData({ ...formdata, hours: +e })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih Durasi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12">12 Jam</SelectItem>
                  <SelectItem value="24">24 Jam</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 w-full">
              <Label>Seats</Label>
              <Select
                onValueChange={(e) => setFormData({ ...formdata, seats: e })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih Jumlah seats" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="4">4 Jam</SelectItem>
                  <SelectItem value="6">6 Jam</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Tipe</Label>
            <Input
              onChange={(e) =>
                setFormData({ ...formdata, type: e.target.value })
              }
              type="text"
            />
          </div>
          <div className="space-y-2">
            <Label>Foto</Label>
            <Input
              onChange={(e) =>
                setFormData({ ...formdata, image: e.target.files![0] })
              }
              type="file"
            />
          </div>
          <div className="py-2">
            <Button className="w-full" type="submit">
              Tambah
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddUnit;
