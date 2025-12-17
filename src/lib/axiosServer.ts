import axios from "axios";
import { cookies } from "next/headers";

const apiServer = axios.create({
	baseURL: "http://localhost:3001/api",
	withCredentials: true,
});

apiServer.interceptors.request.use(
	async (config) => {
		const cookieStore = await cookies();
		const sessionID = cookieStore.get("session_id");
		if (sessionID) {
			config.headers.Cookie = `session_id=${sessionID.value}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

export default apiServer;
