import React, { useEffect, useRef } from 'react';
import useYT from '../store/useYT';

function Modal() {
	const { currentVideoId, setCurrentVideoId } = useYT((state) => ({
		currentVideoId: state.currentVideoId,
		setCurrentVideoId: state.setCurrentVideoId,
	}));
	const modalRef = useRef<HTMLElement>(null);
	useEffect(() => {
		const eventListener = (e: any) => {
			setCurrentVideoId();
		};
		modalRef.current?.addEventListener('click', eventListener);

		return () => modalRef.current?.removeEventListener('click', eventListener);
	}, []);
	return (
		<div className="modal" ref={modalRef as React.RefObject<HTMLDivElement>}>
			<iframe src={`https://www.youtube.com/embed/${currentVideoId}`}></iframe>
		</div>
	);
}

export default Modal;
