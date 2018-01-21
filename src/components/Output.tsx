import * as React from 'react';
import OutputPart from './OutputPart';

export interface Props {
	input: string;
}

export default class Output extends React.Component<Props> {
	render () {
		const { input } = this.props;
		const parts = input.split(/,/g);
		const children = parts.map((part, i) => {
			const [name, value] = part.split('=');
			const isLast = i === parts.length - 1;
			return (
				<div className="Output-part" key={i}>
					<OutputPart name={name} value={value} />
					{isLast ? '' : ','}
				</div>
			);
		});
		return (
			<div className="Output">
				{children}
			</div>
		);
	}
}
