import * as React from 'react';
import { RouteProps } from 'react-router-dom';
import DistinguishedName from '../components/DistinguishedName';

const getDN = (search: string) => {
	const params = new URLSearchParams(search);
	return params.get('dn') as string;
};

const RouteResults = ({ location }: RouteProps) => (
	<div className="RouteResults">
		<DistinguishedName dn={getDN(location ? location.search : '')} />
	</div>
);

export default RouteResults;
