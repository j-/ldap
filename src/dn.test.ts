import {
	parseRdnValue,
	parseRdn,
	parseDn,
} from './dn';

describe('parseRdnValue', () => {
	it('handles an empty string', () => {
		const result = parseRdnValue('');
		expect(result).toEqual('');
	});

	it('handles escaped commas', () => {
		const result = parseRdnValue('bar\\,baz');
		expect(result).toEqual('bar,baz');
	});

	it('escapes hex characters', () => {
		// From https://msdn.microsoft.com/en-us/library/aa366101(v=vs.85).aspx
		const result = parseRdnValue('Before\\0DAfter');
		expect(result).toEqual('Before\rAfter');
	});
});

describe('parseRdn', () => {
	it('handles an empty string', () => {
		const result = parseRdn('');
		expect(result).toEqual([]);
	});

	it('throws an error when there is no =', () => {
		expect(() => parseRdn('foobar')).toThrowError('Expected an attribute assignment, none found');
	});

	it('correctly handles multiple =', () => {
		const result = parseRdn('CN;lang=en=foobar');
		expect(result).toEqual(['CN;lang=en', 'foobar']);
	});
});

describe('parseRdn', () => {
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
});
