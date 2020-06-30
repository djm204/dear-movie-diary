import React, { useState } from 'react'
import classnames from 'classnames'

//Just because I don't like the shape of the data :P
const MovieThumbnailConstructor = (props) => {
  const { onClickHandler, Year, Poster, Title, selected, imdbID } = props

  return (
    <MovieThumbnail
      onClickHandler={onClickHandler}
      selected={selected}
      releaseDate={Year}
      posterImage={Poster}
      movieTitle={Title}
      imdbID={imdbID}
    />
  )
}

const MovieThumbnail = (props) => {
  const { onClickHandler, releaseDate, posterImage, movieTitle, selected, imdbID } = props
  const [hovering, setHovering] = useState(false)

  return (
    <React.Fragment>
      <div
        className={classnames('MovieThumbnail', { '--hovering': hovering, '--selected': selected })}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onClick={onClickHandler}
        data-testid={movieTitle + releaseDate}
        data-imdbid={imdbID}
      >
        {posterImage === 'N/A' ? (
          <div className="MovieThumbnail_Image --no-image">
            {movieTitle} - {releaseDate}
          </div>
        ) : (
          <img alt={movieTitle} className="MovieThumbnail_Image" src={posterImage} />
        )}
        <AddToFavorites selected={selected} />
      </div>
    </React.Fragment>
  )
}

export const AddToFavorites = (props) => {
  const { selected } = props
  return (
    <div className="MovieThumbnail_AddToFavorites">
      <div className={classnames('MovieThumbnail_AddToFavorites_Message', { '--added': selected })}>
        {selected ? 'Added to Favorites' : 'Add to Favorites'}
      </div>
    </div>
  )
}

export default MovieThumbnailConstructor
