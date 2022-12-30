interface CounterProps {
	name: string;
	number: number;
}

export function Counter({ name, number }: CounterProps) {
	return (
		<div className="counter">
			<p className="counter-number">{number}</p>
			<h3 className="counter-text">{name}</h3>
		</div>
	);
}
