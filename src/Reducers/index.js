import { combineReducers } from 'redux'

const songsReducer = () => {
	return [
		{title: 'Smells Like Teen Spirit', artist: 'Nirvana'},
		{title: "November Rain", artist: 'Guns N\' Roses'},
		{title: 'Today', artist: 'Smashing Pumpkins'}
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}
	return selectedSong;
};


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})