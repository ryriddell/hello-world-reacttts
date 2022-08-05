import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/greeting/Greeting';
import SongList from './components/song/SongList';
import { SongType } from './components/song/Song.types';

function App() {
  const songListArr: SongType[] = [
    { title: 'Last thing on my mind', artist: 'placeholder artist 1', votes: 0},
    { title: "If you're over me", artist: 'placeholder artist 2', votes: 0},
    { title: "Song 2", artist: 'Blur', votes: 0 }
  ];

  return (
    <div>
      <p>This is a para</p>
      <Greeting  name='Matt' age='21'/>
      <SongList songListInput={songListArr}></SongList>
    </div>
  );
}

export default App;
