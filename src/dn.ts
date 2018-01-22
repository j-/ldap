export const parseRdnValue = (value: string): string => {
	return value
		.replace(/\\[0-9a-fA-F]{2}/g, (val) => {
			return String.fromCharCode(
				parseInt(val.substring(1), 16)
			);
		})
		.replace(/\\/g, '');
};

export const parseRdn = (rdn: string): string[] => {
	const [attribute, value] = rdn.split('=');
	return [attribute, parseRdnValue(value)];
};

export const parseDn = (dn: string): string[][] => {
	const positions: number[] = [];
	const results: string[][] = [];
	const exp = /\\[0-9a-fA-F]{2}|\\.|(,)/g;
	let match: RegExpExecArray | null;
	while (match = exp.exec(dn)) {
		if (match[1]) {
			positions.push(match.index);
		}
	}
	positions.push(dn.length);
	let lastIndex = -1;
	for (let i = 0; i < positions.length; i++) {
		const substring = dn.substring(lastIndex + 1, positions[i]);
		if (substring) {
			results.push(parseRdn(substring));
		}
		lastIndex = positions[i];
	}
	return results;
};
