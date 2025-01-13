import consola from 'consola';

async function main() {
	const options = [...Array(50).keys()].map((i) => ({
		value: `value-${i}`,
		label: `label-${i}`,
	}));
	await consola.prompt('This is looooooong multiselect list!', {
		type: 'multiselect',
		options: options,
	});
}

main();
