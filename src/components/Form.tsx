import React, { useState } from 'react';
import useYT from '../store/useYT';

function Form() {
	const [inputVal, setInputVal] = useState('');
	const setVideoId = useYT((state) => state.setVideoId);
	const onSubmit = () => {
		if (inputVal) {
			let checkUrlRegex =
				/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
			let isUrl = checkUrlRegex.test(inputVal);
			let id;
			if (isUrl) {
				if (inputVal.includes('youtu.be/')) {
					id = inputVal.split('youtu.be/')[1];
				} else if (inputVal.includes('.youtube.com/watch?')) {
					id = inputVal.split('v=')[1].split('&')[0];
				} else if (inputVal.includes('youtube.com/embed/')) {
					id = inputVal.split('youtube.com/embed/')[1];
				}
			} else {
				id = inputVal;
			}
			if (id) {
				setVideoId(id);
			}
			setInputVal('');
		}
	};
	return (
		<div className="right-con">
			<div className="label">Video id</div>
			<input
				type="text"
				value={inputVal}
				onChange={(e) => setInputVal(e.target.value)}
				placeholder="Enter the video id here"
			/>
			<button className="submit-btn" onClick={onSubmit}>
				Save the Video
			</button>
		</div>
	);
}

export default Form;
