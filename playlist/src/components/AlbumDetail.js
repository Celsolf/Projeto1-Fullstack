import React from 'react';
import { Box, Typography } from '@mui/material';
const AlbumDetail = ({ album }) => {
  if (!album) return null;

  return (
    <div>
      <Box
      sx={{
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
        {album.collectionName}
      </Typography>
      <img
        src={album.artworkUrl100}
        alt={album.collectionName}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '8px',
          marginBottom: '1rem',
        }}
      />
      <Typography variant="body1" color="text.secondary">
        Artista: {album.artistName}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Data de Lançamento: {album.releaseDate.split('T')[0]}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Total de Faixas: {album.trackCount}
      </Typography>
    </Box>
    </div>
  );
};

export default AlbumDetail;
