import React from 'react';

const AlbumList = ({ albums, onSelectAlbum }) => {
  return (
    <div>
      <h2>Resultados da Busca</h2>
      {albums.map((album) => (
        <div key={album.collectionId} onClick={() => onSelectAlbum(album)}>
          <img src={album.artworkUrl100} alt={album.collectionName} />
          <p>{album.collectionName}</p>
          <p>{album.artistName}</p>
        </div>
      ))}
    </div>
  );
};

export default AlbumList;
