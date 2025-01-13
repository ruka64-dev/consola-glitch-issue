import consola from 'consola';

async function main() {
	const ans = await consola.prompt('Dev', {
		type: 'multiselect',
		options: [
			{ value: 'a', label: 'a' },
			{ value: 'b', label: 'b' },
			{ value: 'c', label: 'c' },
			{ value: 'd', label: 'd' },
			{ value: 'e', label: 'e' },
			{ value: 'f', label: 'f' },
			{ value: 'g', label: 'g' },
			{ value: 'h', label: 'h' },
			{ value: 'i', label: 'i' },
			{ value: 'j', label: 'j' },
			{ value: 'k', label: 'k' },
			{ value: 'l', label: 'l' },
			{ value: 'm', label: 'm' },
			{ value: 'n', label: 'n' },
			{ value: 'o', label: 'o' },
			{ value: 'p', label: 'p' },
			{ value: 'q', label: 'q' },
			{ value: 'r', label: 'r' },
			{ value: 's', label: 's' },
			{ value: 't', label: 't' },
			{ value: 'u', label: 'u' },
			{ value: 'v', label: 'v' },
			{ value: 'w', label: 'w' },
			{ value: 'x', label: 'x' },
			{ value: 'y', label: 'y' },
			{ value: 'z', label: 'z' },
		],
	});
}

main();
