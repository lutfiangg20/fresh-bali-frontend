import api from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { serverLogin } from "./serverAction";

export interface LoginForm {
	username: string;
	password: string;
}

export const useLogin = () => {
	const router = useRouter();
	return useMutation({
		mutationKey: ["login"],
		mutationFn: (data: LoginForm) => serverLogin(data),
		onSuccess: (res) => {
			console.log(res);
			router.push("/admin/dashboard");
		},
		onError: (err: AxiosError) => console.log(err),
	});
};
