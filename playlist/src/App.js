import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import AlbumList from './components/AlbumList';
import AlbumDetail from './components/AlbumDetail';

function App() {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const fetchAlbums = async (query) => {
    try {
      const response = await fetch(
        `https://itunes.apple.com/search?term=${query}&entity=album`
      );
      const data = await response.json();
      setAlbums(data.results);
    } catch (error) {
      console.error('Erro ao buscar álbuns:', error);
    }
  };

  const handleAlbumSelect = (album) => {
    setSelectedAlbum(album);
  };

  return (
    <div className="App">
      <h1>Catálogo de Álbuns e Músicas</h1>
      <SearchBar onSearch={fetchAlbums} />
      <div style={{ display: 'flex', gap: '2rem' }}>
        <AlbumList albums={albums} onSelectAlbum={handleAlbumSelect} />
        <AlbumDetail album={selectedAlbum} />
      </div>
    </div>
  );
}

export default App;
