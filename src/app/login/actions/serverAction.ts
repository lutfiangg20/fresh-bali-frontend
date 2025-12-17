"use server";

import apiServer from "@/lib/axiosServer";
import type { LoginForm } from "./useLogin";
import { cookies } from "next/headers";

export const serverLogin = async (data: LoginForm) => {
	const cookieStore = await cookies();
	const res = await apiServer.post<{ message: string; session_id: string }>(
		"/auth/login",
		data,
	);
	cookieStore.set("session_id", res.data.session_id);
};
