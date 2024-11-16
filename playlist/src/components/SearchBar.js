import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);

  const handleSearch = () => {
    if (!query.trim()) {
      setError(true);
      return;
    }

    setError(false);
    onSearch(query);
  };

  return (
    <div>
      <TextField
        label="Buscar artista ou álbum"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        error={error} 
        helperText={error ? 'Este campo é obrigatório.' : ''}
        style={{ marginRight: '10px' }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Buscar
      </Button>
    </div>
  );
};

export default SearchBar;
