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
		<br />
		<div className="pt-card">
			<h2>Results</h2>
			<br />
			<DistinguishedName dn={getDN(location ? location.search : '')} />
		</div>
		<br />
		<div className="pt-card">
			<h2>Parse another distinguished name</h2>
			<br />
			<InputForm />
		</div>
	</div>
);

export default RouteResults;
