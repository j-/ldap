import * as React from 'react';

export interface Props {
	input: string;
}

export default class Output extends React.Component<Props> {
	render () {
		const { input } = this.props;
		const parts = input.split(/,/g);
		const children = parts.map((part, i) => (
			<div className="Output-part" key={i}>
				{part}
			</div>
		));
		return (
			<div className="Output">
				{children}
			</div>
		);
	}
}
