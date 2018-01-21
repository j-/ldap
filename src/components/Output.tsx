import * as React from 'react';
import RelativeDistinguishedName from './RelativeDistinguishedName';

export interface Props {
	input: string;
}

export default class Output extends React.Component<Props> {
	render () {
		const { input } = this.props;
		const parts = input.split(/,/g);
		const children = parts.map((part, i) => {
			const [attribute, value] = part.split('=');
			const isLast = i === parts.length - 1;
			return (
				<div className="Output-part" key={i}>
					<RelativeDistinguishedName
						attribute={attribute}
						value={value}
					/>
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
