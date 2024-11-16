import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
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
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Catálogo de Álbuns e Músicas
      </Typography>
      <SearchBar onSearch={fetchAlbums} />
      <Box display="flex" gap="2rem" marginTop="2rem">
        <AlbumList albums={albums} onSelectAlbum={handleAlbumSelect} />
        <AlbumDetail album={selectedAlbum} />
      </Box>
    </Container>
  );
}

export default App;
