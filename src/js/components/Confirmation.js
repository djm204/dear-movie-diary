import React from 'react'
import { Link } from 'react-router-dom'
import MovieDetails from './MovieDetails'
const Confirmation = (props) => {
  const { selectedMovies } = props
  return (
    <React.Fragment>
      <Link to="/">
        <button>Go Back</button>
      </Link>
      <div className="SelectMovieDetails">
        {selectedMovies.map((selectedMovie) => (
          <MovieDetails {...selectedMovie} />
        ))}
      </div>
    </React.Fragment>
  )
}

export default Confirmation
