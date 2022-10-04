import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Details from './components/Details';
import Form from './components/Form';

function App() {
	return (
		<section className="flex justify-center">
			<div className="main-con">
				<div className="top-con mb-10">
					<Details />
					<Form />
				</div>
			</div>
		</section>
	);
}

export default App;
