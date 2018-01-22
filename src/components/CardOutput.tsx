import * as React from 'react';
import DistinguishedName from '../components/DistinguishedName';

export interface Props {
	dn: string;
}

const CardInput = ({ dn }: Props) => (
	<div className="pt-card">
		<h2>Results</h2>
		<br />
		<DistinguishedName dn={dn} />
	</div>
);

export default CardInput;
