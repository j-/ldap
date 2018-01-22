import * as React from 'react';
import { RouteProps } from 'react-router-dom';
import DistinguishedName from '../components/DistinguishedName';
import InputForm from '../components/InputForm';

const getDN = (search: string) => {
	const params = new URLSearchParams(search);
	return params.get('dn') as string;
};

const RouteResults = ({ location }: RouteProps) => (
	<div className="RouteResults">
		<h2>Results</h2>
		<DistinguishedName dn={getDN(location ? location.search : '')} />

		<h2>Parse another distinguished name</h2>
		<InputForm />
	</div>
);

export default RouteResults;
