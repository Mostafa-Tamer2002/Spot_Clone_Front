import { useState } from "react";
import "./Search.css";

const SearchBar = () => {
  const musicList = [
    { id: 1, title: "Song A", artist: "Artist A" },
    { id: 2, title: "Song B", artist: "Artist B" },
    { id: 3, title: "Song C", artist: "Artist C" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredSongs = musicList.filter(
    (song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-container">
      {/* Search Input with Icon */}
      <div className="search-input-wrapper">
        <i className="fa-solid fa-magnifying-glass | search-icon"></i>{" "}
        {/* Unicode for a magnifying glass */}
        <input
          type="text"
          className="search-input"
          placeholder="Search for music..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Show filtered songs */}
      {searchTerm.trim() && filteredSongs.length > 0 && (
        <ul className="song-list">
          {filteredSongs.map((song) => (
            <li key={song.id}>
              {song.title} by {song.artist}
            </li>
          ))}
        </ul>
      )}

      {/* Display no results message */}
      {searchTerm.trim() && filteredSongs.length === 0 && (
        <p className="no-results">No songs found</p>
      )}
    </div>
  );
};

export default SearchBar;
