import React, { useState } from 'react'
import classnames from 'classnames'

//Just because I don't like the shape of the data :P
const MovieDetailsConstructor = (props) => {
  const { Year, Poster, Title, selected, imdbID } = props

  return (
    <MovieDetails
      selected={selected}
      releaseDate={Year}
      posterImage={Poster}
      movieTitle={Title}
      imdbID={imdbID}
    />
  )
}

const MovieDetails = (props) => {
  const { releaseDate, posterImage, movieTitle, selected, imdbID } = props

  return (
    <React.Fragment>
      <div className={classnames('MovieDetails', { '--selected': selected })}>
        <div className="MovieDetails_Poster">
          {posterImage === 'N/A' ? (
            <div className="MovieDetails_PosterImage --no-image">
              {movieTitle} - {releaseDate}
            </div>
          ) : (
            <img alt={movieTitle} className="MovieDetails_PosterImage" src={posterImage} />
          )}
        </div>
        <div className="MovieDetails_Description">
          <p>Title: {movieTitle}</p>
          <p>Year: {releaseDate}</p>
          <p>IMDB ID: {imdbID}</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MovieDetailsConstructor
