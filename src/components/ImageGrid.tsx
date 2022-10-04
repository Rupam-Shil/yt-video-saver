import React, { useEffect } from 'react';
import useYT from '../store/useYT';

function ImageGrid() {
	const { videoIds, getVideos, deleteVideos, setCurrentVideoId } = useYT(
		(state) => ({
			videoIds: state.videoIds,
			getVideos: state.getVideos,
			deleteVideos: state.deleteVideos,
			setCurrentVideoId: state.setCurrentVideoId,
		})
	);

	useEffect(() => {
		getVideos();
	}, []);
	return (
		<div className="images-con mb-10">
			{videoIds.map((id) => (
				<div
					className="image-con"
					key={id}
					onClick={(e) => {
						setCurrentVideoId(id);
					}}
				>
					<img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt="" />
					<div
						className="cross-btn"
						onClick={(e) => {
							e.stopPropagation();
							deleteVideos(id);
						}}
					>
						X
					</div>
				</div>
			))}
		</div>
	);
}

export default ImageGrid;
