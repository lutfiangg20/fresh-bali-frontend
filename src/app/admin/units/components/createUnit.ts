"use server";
import apiServer from "@/lib/axiosServer";
import { AxiosError } from "axios";

export const createUnit = async (data: FormData) => {
  "use server";
  console.log(data);
  try {
    const res = await apiServer.postForm("/cars", data);
    return res.data;
  } catch (e) {
    const error = e as AxiosError;
    console.log("errorr: ", error.response?.data);
    // throw error.response?.data;
  }
};
