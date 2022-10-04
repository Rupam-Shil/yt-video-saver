import create from 'zustand';

const ytStore = (set: any) => ({
	videoIds: [],
	setVideoIds: (id: string) => {
		return set((state: any) => {
			let videos = [...state.videoIds, id];
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
			let videos = state.videoIds.filter((video: string) => video === id);
			localStorage.setItem('videosIds', JSON.stringify(videos));
			return { videoIds: [...videos] };
		});
	},
});

const useYT = create(ytStore);
export default useYT;
