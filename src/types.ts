export const TYPES = new Map([
	['DC', 'Domain component'],
	['CN', 'Common name'],
	['OU', 'Organizational unit name'],
	['O', 'Organization name'],
	['STREET', 'Street address'],
	['L', 'Locality name'],
	['ST', 'State or province name'],
	['C', 'Country name'],
	['UID', 'User ID'],
]);

Object.freeze(TYPES);

export const parseType = (type: string): string => (
	type.trim().toUpperCase()
);

export const isKnownType = (type: string): boolean => (
	TYPES.has(parseType(type))
);

export const getTypeLabel = (type: string): string | undefined => (
	TYPES.get(parseType(type))
);
