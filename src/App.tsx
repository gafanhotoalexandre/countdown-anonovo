// components
import { Counter } from './components/Counter';
import { Title } from './components/Title';
// hooks
import useCountdown from './hooks/useCountdown';

import './App.css'
import NewYear from './assets/newyear.jpg';

const NEXT_YEAR = new Date().getFullYear() + 1;

export default function App() {
	const [day, hour, minute, second] = useCountdown(`Jan 1, ${NEXT_YEAR} 00:00:00`);

  return (
    <div className="App" style={{ backgroundImage: `url(${NewYear})` }}>
      <main className="container">
        <Title>Contagem regressiva para {NEXT_YEAR}</Title>

        <section className="countdown-container">
          <Counter
						name="Dias"
						number={day}
					/>
					<Counter
						name="Horas"
						number={hour}
					/>
          <Counter
						name="Minutos"
						number={minute}
					/>
					<Counter
						name="Segundos"
						number={second}
					/>
        </section>
      </main>
    </div>
  );
}
