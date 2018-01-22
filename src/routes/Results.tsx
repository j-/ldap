import * as React from 'react';
import { RouteProps } from 'react-router-dom';
import CardOutput from '../components/CardOutput';

const getDN = (search: string) => {
	const params = new URLSearchParams(search);
	return params.get('dn') as string;
};

const RouteResults = ({ location }: RouteProps) => (
	<div className="RouteResults">
		<CardOutput dn={getDN(location ? location.search : '')} />
	</div>
);

export default RouteResults;
