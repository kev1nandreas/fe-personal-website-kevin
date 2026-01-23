import Layout from "@/layouts/Layout";

export default function LandingPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Layout withNavbar withFooter>
			{children}
		</Layout>
	);
}
