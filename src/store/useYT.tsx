import create from 'zustand';

const ytStore = (set: any) => ({
	videoIds: [],
	currentVideoId: '',
	setVideoId: (id: string) => {
		return set((state: any) => {
			let alreadyExists = state.videoIds.indexOf(id);
			let videos = [...state.videoIds];
			if (alreadyExists !== -1) {
				videos.splice(alreadyExists, 1);
			}
			videos = [id, ...videos];
			localStorage.setItem('videosIds', JSON.stringify(videos));
			return { videoIds: videos };
		});
	},
	getVideos: () => {
		let videos = localStorage.getItem('videosIds')
			? JSON.parse(localStorage.getItem('videosIds') as string)
			: [];
		return set((state: any) => ({ videoIds: [...videos] }));
	},
	deleteVideos: (id: string) => {
		return set((state: any) => {
			let videos = state.videoIds.filter((video: string) => video !== id);
			localStorage.setItem('videosIds', JSON.stringify(videos));
			return { videoIds: [...videos] };
		});
	},
	setCurrentVideoId: (payload: string = '') => {
		set((state: any) => ({ currentVideoId: payload }));
	},
});

const useYT = create(ytStore);
export default useYT;
