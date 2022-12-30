interface TitleProps {
	children: string | React.ReactNode;
}

export function Title({ children }: TitleProps) {
	return (
		<h1>{children}</h1>
	);
}
