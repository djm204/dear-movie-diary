import React from 'react'
import { Link } from 'react-router-dom'
import MovieDetails from './MovieDetails'
const Confirmation = (props) => {
  const { selectedMovies, onClickHandler, handleGoBack, confirmed, submitting } = props
  return (
    <div className="Confirmation">
      <div className="Confirmation_Header">
        <Link to="/" onClick={handleGoBack}>
          <button className="Button secondary">Go Back</button>
        </Link>
        <div className="Confirmation_Total">Total Movies: {selectedMovies.length}</div>
      </div>

      <div className="SelectMovieDetails">
        <h2>{confirmed ? 'Selections Confirmed' : 'Confirm Selections'}</h2>
        {selectedMovies.map((selectedMovie) => (
          <MovieDetails key={selectedMovie.imdbID} {...selectedMovie} />
        ))}
      </div>
      <div className="Confirmation_ConfirmButton">
        {confirmed ? (
          <div className="Confirmation_Message">
            <p>Thanks! Favorites Confirmed!</p>
            <Link to="/" onClick={handleGoBack}>
              Go Back
            </Link>{' '}
            to search for more!
          </div>
        ) : (
          <button className="Button primary" onClick={onClickHandler}>
            {submitting ? <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i> : 'Confirm'}
          </button>
        )}
      </div>
    </div>
  )
}

export default Confirmation
