import { parseDn } from './dn';

it('handles an empty string', () => {
	const result = parseDn('');
	expect(result).toEqual([]);
});

it('handles a single relative distinguished name', () => {
	const result = parseDn('foo=bar');
	expect(result).toEqual([
		['foo', 'bar'],
	]);
});

it('handles two relative distinguished names', () => {
	const result = parseDn('foo=bar,baz=qux');
	expect(result).toEqual([
		['foo', 'bar'],
		['baz', 'qux'],
	]);
});

it('handles three relative distinguished names', () => {
	const result = parseDn('foo=bar,baz=qux,hello=world');
	expect(result).toEqual([
		['foo', 'bar'],
		['baz', 'qux'],
		['hello', 'world'],
	]);
});

it('handles escaped commas', () => {
	const result = parseDn('foo=bar\\,baz,hello=world');
	expect(result).toEqual([
		['foo', 'bar,baz'],
		['hello', 'world'],
	]);
});

it('escapes hex characters', () => {
	// From https://msdn.microsoft.com/en-us/library/aa366101(v=vs.85).aspx
	const result = parseDn('CN=Before\\0DAfter,OU=Test,DC=North America,DC=Fabrikam,DC=COM');
	expect(result).toEqual([
		['CN', 'Before\rAfter'],
		['OU', 'Test'],
		['DC', 'North America'],
		['DC', 'Fabrikam'],
		['DC', 'COM'],
	]);
});
