
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from './features/movieSlice';

const App = () => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie.movie);
  const movieStatus = useSelector((state) => state.movie.status);

  useEffect(() => {
    dispatch(fetchMovie('Inception'));
  }, [dispatch]);

  return (
    <div>
      <h1>Movie Details</h1>
      {movieStatus === 'loading' && <p>Loading...</p>}
      {movieStatus === 'succeeded' && (
        <div>
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      )}
    </div>
  );
};

export default App;
