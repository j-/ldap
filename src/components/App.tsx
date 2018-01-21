import * as React from 'react';
import DistinguishedName from './DistinguishedName';

const INPUT = 'CN=Jamie J Hoeks P761235,OU=Users,OU=Wealth Management,OU=Head' +
	' Office,OU=Accounts,OU=Production,DC=aur,DC=national,DC=com,DC=au';

const App = () => (
	<div className="App">
		<DistinguishedName dn={INPUT} />
	</div>
);

export default App;
