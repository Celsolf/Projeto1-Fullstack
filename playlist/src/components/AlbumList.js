import React from 'react';
import { Box, Typography } from '@mui/material';

const AlbumList = ({ albums, onSelectAlbum }) => {
  return (
    <div>
      <Typography variant="h5" component="h2" gutterBottom>
        Resultados da Busca
      </Typography>
      {albums.map((album) => (
        <Box
          key={album.collectionId}
          onClick={() => onSelectAlbum(album)}
          border={1}
          borderRadius={2} 
          padding={2}
          marginBottom={2} 
          borderColor="grey.300"
          display="flex"
          alignItems="center"
          style={{ cursor: 'pointer' }}
        >
          <img src={album.artworkUrl100} alt={album.collectionName} style={{ marginRight: '10px', borderRadius: '4px' }} />
          <div>
            <Typography variant="h6">{album.collectionName}</Typography>
            <Typography color="textSecondary">{album.artistName}</Typography>
          </div>
        </Box>
      ))}
    </div>
  );
};

export default AlbumList;
