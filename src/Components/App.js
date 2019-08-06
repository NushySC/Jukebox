import React from 'react';
import './App.css';
import SongList from '../Components/SongList/SongList';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row"><div className="column eight wide"><SongList /></div></div>
    </div>
  );
}

export default App;
