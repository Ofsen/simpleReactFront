import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

const App = () => {
	const [res, setRes] = useState('');

	const fetchData = async () => {
		try {
			const rest = await axios.get('http://localhost:3000/depinfo');
			setRes(rest.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchData();
		return setRes('');
	}, []);

	return (
		<div className='App'>
			<code>data : {JSON.stringify(res)}</code>
			<p>
				<b>Université:</b> {res.universite}
			</p>
			<p>
				<b>Faculte:</b> {res.faculte}
			</p>
			<p>
				<b>Département:</b> {res.departement}
			</p>
		</div>
	);
};

export default App;
