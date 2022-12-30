import { Counter } from './components/Counter';
import { Title } from './components/Title';

import './App.css'
import NewYear from './assets/newyear.jpg';

export default function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${NewYear})` }}>
      <main className="container">
        <Title>Contagem regressiva para 2023</Title>

        <section className="countdown-container">
          <Counter
						name="Dias"
						number={3}
					/>
					<Counter
						name="Horas"
						number={4}
					/>
          <Counter
						name="Minutos"
						number={40}
					/>
					<Counter
						name="Segundos"
						number={20}
					/>
        </section>
      </main>
    </div>
  );
}
