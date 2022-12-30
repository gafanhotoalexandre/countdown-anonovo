import { useState } from "react";

export default function useCountdown(date: Date | string) {
	const [remainingDay, setRemainingDay] = useState('');
	const [remainingHour, setRemainingHour] = useState('')
	const [remainingMinute, setRemainingMinute] = useState('')
	const [remainingSecond, setRemainingSecond] = useState('')


	function countdown(): void {
		const countDate = new Date(date).getTime();
		const now = new Date().getTime();

		const interval = countDate - now;

		const second = 1000; // milissegundos
		const minute = second * 60; // milissegundos
		const hour = minute * 60; // milissegundos
		const day = hour * 24;

		const remainingDay = Math.floor(interval / day);
		const remainingHour = Math.floor((interval % day) / hour);
		const remainingMinute = Math.floor((interval % hour) / minute);
		const remainingSecond = Math.floor((interval % minute) / second);

		setRemainingDay(String(remainingDay).padStart(2, '0'));
		setRemainingHour(String(remainingHour).padStart(2, '0'));
		setRemainingMinute(String(remainingMinute).padStart(2, '0'));
		setRemainingSecond(String(remainingSecond).padStart(2, '0'));
	}

	const countdownTimer = setInterval(countdown, 1000);

	return [remainingDay, remainingHour, remainingMinute, remainingSecond];
}
