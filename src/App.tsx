import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Details from './components/Details';
import Form from './components/Form';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import useYT from './store/useYT';

function App() {
	const currentVideoId = useYT((state) => state.currentVideoId);
	return (
		<section className="flex justify-center">
			<div className="main-con">
				<div className="top-con mb-10">
					<Details />
					<Form />
				</div>
				<div className="bottom-con">
					<ImageGrid />
				</div>
			</div>
			{currentVideoId && <Modal />}
		</section>
	);
}

export default App;
