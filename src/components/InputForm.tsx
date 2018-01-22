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
				<div className="pt-form-group">
					<label className="pt-label">
						Distinguished name<br />
						<input
							className="pt-input pt-intent-primary pt-large pt-fill"
							type="text"
							value={dn}
							onInput={this.handleInput}
							autoFocus={true}
						/>
					</label>
				</div><br />

				<button
					className="pt-button pt-intent-primary pt-large"
					type="submit"
				>
					Parse
				</button>
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
