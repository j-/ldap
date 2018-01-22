import * as React from 'react';

export interface Props {

}

interface State {
	dn: string;
}

export default class InputForm extends React.Component<Props, State> {
	state: State = {
		dn: '',
	};

	render () {
		const { dn } = this.state;
		return (
			<form className="InputForm" onSubmit={this.handleSubmit}>
				<label>
					Distinguished name<br />
					<input type="text" value={dn} onInput={this.handleInput} />
				</label><br />

				<button type="submit">Parse</button>
			</form>
		);
	}

	private handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			dn: e.currentTarget.value,
		});
	}

	private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const params = new URLSearchParams();
		params.set('dn', this.state.dn);
		window.location.href = '#/results?' + params.toString();
	}
}
