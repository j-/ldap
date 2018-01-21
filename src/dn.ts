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
	for (let i = 0; i < positions.length; i++) {
		const startIndex = (positions[i - 1] || -1) + 1;
		const endIndex = positions[i];
		const substring = dn.substring(startIndex, endIndex);
		const rdn = parseRDN(substring);
		results.push(rdn);
	}
	const startIndex = (positions.pop() || -1) + 1;
	const endIndex = dn.length;
	if (startIndex !== endIndex) {
		const substring = dn.substring(startIndex, endIndex);
		const rdn = parseRDN(substring);
		results.push(rdn);
	}
	return results;
};
