import './Title.css';

interface TitleProps {
	children: string | React.ReactNode;
}

export function Title({ children }: TitleProps) {
	return (
		<h1 className="title">{children}</h1>
	);
}
