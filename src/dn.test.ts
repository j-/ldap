import { parseDN } from './dn';

it('handles an empty string', () => {
	const result = parseDN('');
	expect(result).toEqual([]);
});

it('handles a single relative distinguished name', () => {
	const result = parseDN('foo=bar');
	expect(result).toEqual([
		['foo', 'bar'],
	]);
});

it('handles two relative distinguished names', () => {
	const result = parseDN('foo=bar,baz=qux');
	expect(result).toEqual([
		['foo', 'bar'],
		['baz', 'qux'],
	]);
});

it('handles three relative distinguished names', () => {
	const result = parseDN('foo=bar,baz=qux,hello=world');
	expect(result).toEqual([
		['foo', 'bar'],
		['baz', 'qux'],
		['hello', 'world'],
	]);
});

it('handles escaped commas', () => {
	const result = parseDN('foo=bar\\,baz,hello=world');
	expect(result).toEqual([
		['foo', 'bar,baz'],
		['hello', 'world'],
	]);
});
