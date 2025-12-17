import AppSidebar from "@/components/layouts/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const layout = ({ children }: Props) => {
	return (
		<SidebarProvider className="">
			<AppSidebar />
			<main className="p-4 flex flex-col gap-2 w-full">
				<SidebarTrigger />
				<div className="p-5 rounded border flex-1">{children}</div>
			</main>
		</SidebarProvider>
	);
};

export default layout;
