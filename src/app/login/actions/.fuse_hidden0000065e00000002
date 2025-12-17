import api from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export interface LoginForm {
  username: string;
  password: string;
}

export const useLogin = () => {
  const router = useRouter();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: LoginForm) => api.post("/auth/login", data),
    onSuccess: (res) => {
      console.log(res);
      // router.push("/dashboard")
    },
    onError: (err: AxiosError) => console.log(err),
  });
};
