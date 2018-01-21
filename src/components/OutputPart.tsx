import * as React from 'react';

export interface Props {
	name: string;
	value: string;
}

export default class OutputPart extends React.Component<Props> {
	render () {
		const { name, value } = this.props;
		return (
			<span className="OutputPart">
				<strong className="OutputPart-name">{name}</strong>=
				<span className="OutputPart-value">{value}</span>
			</span>
		);
	}
}
