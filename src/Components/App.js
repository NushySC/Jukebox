import React from 'react';
import './App.css';
import SongList from '../Components/SongList/SongList';
import SongDetail from '../Components/SongDetail/SongDetail';

const App = () => {
	return (
		<div className="ui container grid">
			<div className="ui row">
				<div className="column eight wide">
					<SongList />
				</div>
				<div className="column eight wide">
					<SongDetail />
				</div>
			</div>
		</div>
	);
};

export default App;
