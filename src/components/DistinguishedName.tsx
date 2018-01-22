import * as React from 'react';
import RelativeDistinguishedName from './RelativeDistinguishedName';
import { parseDn } from '../dn';
import './DistinguishedName.css';

export interface Props {
	dn: string;
}

export default class DistinguishedName extends React.Component<Props> {
	render () {
		return (
			<div className="DistinguishedName">
				{this.renderRdns()}
			</div>
		);
	}

	private renderRdns () {
		return parseDn(this.props.dn).map(([attribute, value], i, { length }) => (
			<div className="DistinguishedName-rdn" key={i}>
				<RelativeDistinguishedName
					attribute={attribute}
					value={value}
				/>
				{i < length - 1 && <span className="DistinguishedName-comma">,</span>}
			</div>
		));
	}
}
