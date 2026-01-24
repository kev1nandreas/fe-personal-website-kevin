export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-card border-t border-foreground/10 text-foreground flex justify-center items-center w-full h-full py-3 font-light transition-colors duration-300">
			&copy; {currentYear} by Kevin Andreas
		</footer>
	);
}
