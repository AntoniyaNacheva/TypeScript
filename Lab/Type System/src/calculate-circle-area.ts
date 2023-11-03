function calculateCircle(radius: number): string {
	const area: string = (Math.PI * radius * radius).toFixed(2);
	return area;
}

const radius = 5;
console.log(calculateCircle(radius));
