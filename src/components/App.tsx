import * as React from 'react';
import Output from './Output';

const INPUT = 'CN=Jamie J Hoeks P761235,OU=Users,OU=Wealth Management,OU=Head' +
	' Office,OU=Accounts,OU=Production,DC=aur,DC=national,DC=com,DC=au';

const App = () => (
	<div className="App">
		<Output input={INPUT} />
	</div>
);

export default App;
