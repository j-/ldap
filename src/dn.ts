export const parseRdnValue = (value: string): string => {
	return value
		.replace(/\\[0-9a-fA-F]{2}/g, (val) => (
			String.fromCharCode(
				parseInt(val.substring(1), 16)
			)
		))
		.replace(/\\/g, '');
};

export const parseRdn = (rdn: string): string[] => {
	if (!rdn) {
		return [];
	}
	const lastIndex = rdn.lastIndexOf('=');
	if (lastIndex < 0) {
		throw new SyntaxError('Expected an attribute assignment, none found');
	}
	const attribute = rdn.substring(0, lastIndex);
	const value = rdn.substring(lastIndex + 1);
	return [attribute, parseRdnValue(value)];
};

export const parseDn = (dn: string): string[][] => {
	if (!dn) {
		return [];
	}
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
