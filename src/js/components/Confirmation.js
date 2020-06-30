import React from 'react'
import { Link } from 'react-router-dom'
import MovieDetails from './MovieDetails'
const Confirmation = (props) => {
  const { selectedMovies, onClickHandler, confirmed, submitting } = props
  return (
    <div className="Confirmation">
      <div className="Confirmation_Header">
        <Link to="/">
          <button className="Button secondary">Go Back</button>
        </Link>
        <div className="Confirmation_Total">Total Movies: {selectedMovies.length}</div>
      </div>

      <div className="SelectMovieDetails">
        {selectedMovies.map((selectedMovie) => (
          <MovieDetails {...selectedMovie} />
        ))}
      </div>
      <div className="Confirmation_ConfirmButton">
        {confirmed ? (
          <div className="Confirmation_Message">Thanks! Favorites Confirmed!</div>
        ) : (
          <button className="Button primary" onClick={onClickHandler}>
            {submitting ? <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i> : 'Confirm'}
          </button>
        )}
      </div>
    </div>
  )
}

export default Confirmation
