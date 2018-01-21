export const parseRDN = (rdn: string): string[] => {
	const [attribute, value] = rdn.split('=');
	return [attribute, value.replace(/\\/g, '')];
};

export const parseDN = (dn: string): string[][] => {
	const positions: number[] = [];
	const results: string[][] = [];
	const exp = /\\.|(,)/g;
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
			results.push(parseRDN(substring));
		}
		lastIndex = positions[i];
	}
	return results;
};
