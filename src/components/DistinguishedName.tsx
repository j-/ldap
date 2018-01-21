import * as React from 'react';
import RelativeDistinguishedName from './RelativeDistinguishedName';
import { parseDN } from '../dn';

export interface Props {
	dn: string;
}

export default class DistinguishedName extends React.Component<Props> {
	render () {
		const { dn } = this.props;
		const parts = parseDN(dn);
		const rdns = parts.map((rdn, i) => {
			const [attribute, value] = rdn;
			const isLast = i === parts.length - 1;
			return (
				<div className="DistinguishedName-rdn" key={i}>
					<RelativeDistinguishedName
						attribute={attribute}
						value={value}
					/>
					{isLast ? '' : ','}
				</div>
			);
		});
		return (
			<div className="DistinguishedName">
				{rdns}
			</div>
		);
	}
}
