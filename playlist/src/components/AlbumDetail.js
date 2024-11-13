import React from 'react';

const AlbumDetail = ({ album }) => {
  if (!album) return null;

  return (
    <div>
      <h2>{album.collectionName}</h2>
      <img src={album.artworkUrl100} alt={album.collectionName} />
      <p>Artista: {album.artistName}</p>
      <p>Data de Lançamento: {album.releaseDate.split('T')[0]}</p>
      <p>Total de Faixas: {album.trackCount}</p>
    </div>
  );
};

export default AlbumDetail;
