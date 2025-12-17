import { NextRequest, NextResponse } from "next/server";
import apiServer from "./lib/axiosServer";
import { cookies } from "next/headers";

export const proxy = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;
  if (pathname.startsWith("/api") && request.method === "POST") {
    const body = await request.json();
    const res = await apiServer.post(`${pathname}`, body);
    const getCookies = res.headers["set-cookie"];
    const tokenCookie = getCookies?.find((c) => c.startsWith("session_id="));
    const token = tokenCookie?.split(";")[0].split("=")[1];
    const cookieStore = await cookies();
    if (token) {
      cookieStore.set("session_id", token);
    }
    return NextResponse.json(res.data);
  }
};
