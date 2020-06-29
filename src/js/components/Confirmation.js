import React from 'react'
import { Link } from 'react-router-dom'
import MovieDetails from './MovieDetails'
const Confirmation = (props) => {
  const { selectedMovies } = props
  return (
    <div className="Confirmation">
      <Link to="/">
        <button className="Button secondary">Go Back</button>
      </Link>
      <div className="SelectMovieDetails">
        {selectedMovies.map((selectedMovie) => (
          <MovieDetails {...selectedMovie} />
        ))}
      </div>
      <div className="Confirmation_ConfirmButton">
        <button className="Button primary">Confirm</button>
      </div>
    </div>
  )
}

export default Confirmation
