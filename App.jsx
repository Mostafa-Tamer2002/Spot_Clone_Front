import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Left from "./src/Components/leftBar/Left";
import Home from "./src/Pages/Home"; //  Home page
import "./src/App.css";
import { useContext } from "react";
import Playerbar from "./src/Components/Playerbar";
import { Playerbarcontext } from "./src/Context/Playerbarcontext";

import Search from './src/Pages/Search';
import LikedSongs from './src/Pages/LikedSongs';
import AlbumPage from './src/Pages/AlbumPage';
import Login from './src/Pages/Login';
import Signup from './src/Pages/Signup';
import songs from './src/data/songs';
import Navbar from './src/Components/Navbar';
import { useState } from 'react';


export default function App() {
  const { audioRef, track } = useContext(Playerbarcontext);

  const [currentSong, setCurrentSong] = useState(null);
  const [currentPlaylist, setCurrentPlaylist] = useState(songs);
  const [likedSongs, setLikedSongs] = useState([]);

  const handleSongSelect = (song, playlist = songs) => {
    setCurrentSong(song);
    setCurrentPlaylist(playlist);
  };

  const handleLikeSong = (song) => {
    setLikedSongs((prev) =>
      prev.find((likedSong) => likedSong.id === song.id) ? prev : [...prev, song]
    );
  };

  const handleRemoveLikedSong = (song) => {
    setLikedSongs((prev) => prev.filter((likedSong) => likedSong.id !== song.id));
  };

  return (
    <Router>
      <div className="app">
        {/* Main Sidebar Content*/}
        <div className="sidebar-container">
          <Left likedSongsCount={likedSongs.length} />
        </div>


        {/* <Sidebar likedSongsCount={likedSongs.length} /> */}
        <div className="main">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home onSongSelect={handleSongSelect} onLike={handleLikeSong} />}
          />
          <Route
            path="/search"
            element={<Search onSongSelect={handleSongSelect} onLike={handleLikeSong} />}
          />
          <Route
            path="/liked-songs"
            element={
              <LikedSongs
                likedSongs={likedSongs}
                onSongSelect={handleSongSelect}
                onRemove={handleRemoveLikedSong}
              />
            }
          />
          <Route path="/album/:albumName" element={<AlbumPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>


        {/* Main Player Bar */}
        {/* <Playerbar /> */}
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </Router>
  );
}
