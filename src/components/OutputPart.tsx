import * as React from 'react';

export interface Props {
	attribute: string;
	value: string;
}

export default class OutputPart extends React.Component<Props> {
	render () {
		const { attribute, value } = this.props;
		return (
			<span className="OutputPart">
				<strong className="OutputPart-attribute">{attribute}</strong>=
				<span className="OutputPart-value">{value}</span>
			</span>
		);
	}
}
