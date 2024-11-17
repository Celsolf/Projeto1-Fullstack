import React, { useState } from 'react';
import { Container, Typography, Box, CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import SearchBar from './components/SearchBar';
import AlbumList from './components/AlbumList';
import AlbumDetail from './components/AlbumDetail';

const theme = createTheme({
  palette: {
    background: {
      default: '#2c2c31',
    },
  },
});

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={{
          padding: '2rem',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: 'white',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '100%',
            margin: '0 0 10px 0',
            backgroundColor: 'grey',
            padding: '1rem',
            borderRadius: '8px',
          }}
        >
          Catálogo de Álbuns e Músicas
        </Typography>
        <SearchBar onSearch={fetchAlbums} />
        <Box display="flex" gap="2rem" marginTop="2rem">
          <AlbumList albums={albums} onSelectAlbum={handleAlbumSelect} />
          <AlbumDetail album={selectedAlbum} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
