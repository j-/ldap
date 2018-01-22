// From https://tools.ietf.org/html/rfc4519#section-2
export const TYPES = new Map([
	['C', 'Country name'],
	['CN', 'Common name'],
	['DC', 'Domain component'],
	['L', 'Locality name'],
	['O', 'Organization name'],
	['OU', 'Organizational unit name'],
	['SN', 'Surname'],
	['ST', 'State or province name'],
	['STREET', 'Street address'],
	['UID', 'User ID'],
]);

Object.freeze(TYPES);

export const getType = (type: string): string => (
	type.trim().replace(/;.*/, '')
);

export const isKnownType = (type: string): boolean => (
	TYPES.has(getType(type))
);

export const getTypeLabel = (type: string): string | undefined => (
	TYPES.get(getType(type))
);
