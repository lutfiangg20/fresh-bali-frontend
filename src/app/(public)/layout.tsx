import MainLayout from "@/components/layouts/MainLayout";
import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};
const layout = ({ children }: Props) => {
	return <MainLayout>{children}</MainLayout>;
};

export default layout;
