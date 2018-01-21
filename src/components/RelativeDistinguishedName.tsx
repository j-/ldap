import * as React from 'react';
import { getTypeLabel } from '../types';
import './RelativeDistinguishedName.css';

export interface Props {
	attribute: string;
	value: string;
}

export default class RelativeDistinguishedName extends React.Component<Props> {
	render () {
		const { attribute, value } = this.props;
		return (
			<span className="RelativeDistinguishedName">
				<strong className="RelativeDistinguishedName-attribute" title={getTypeLabel(attribute)}>{attribute}</strong>
				<span className="RelativeDistinguishedName-equals">=</span>
				<span className="RelativeDistinguishedName-value">{value}</span>
			</span>
		);
	}
}
