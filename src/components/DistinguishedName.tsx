import * as React from 'react';
import RelativeDistinguishedName from './RelativeDistinguishedName';
import { parseDn } from '../dn';
import './DistinguishedName.css';

export interface Props {
	dn: string;
}

interface State {
	parsedDn: string[][] | null;
	error: Error | null;
}

export default class DistinguishedName extends React.Component<Props, State> {
	state: State = {
		parsedDn: null,
		error: null,
	};

	componentWillMount () {
		this.parseDn(this.props);
	}

	componentWillReceiveProps (props: Props) {
		this.parseDn(props);
	}

	render () {
		const { error, parsedDn } = this.state;
		if (error) {
			return (
				<div className="DistinguishedName DistinguishedName--has-error">
					<p>Error parsing distinguished name</p>
					<p>{error.message}</p>
				</div>
			);
		} else if (parsedDn) {
			return (
				<div className="DistinguishedName">
					{this.renderRdns(parsedDn)}
				</div>
			);
		} else {
			return null;
		}
	}

	private parseDn (props: Props) {
		try {
			this.setState({
				error: null,
				parsedDn: parseDn(props.dn),
			});
		} catch (err) {
			this.setState({
				error: err,
				parsedDn: null,
			});
		}
	}

	private renderRdns (dn: string[][]) {
		return dn.map(([attribute, value], i, { length }) => (
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
