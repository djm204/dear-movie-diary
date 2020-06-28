import React, { useState } from 'react'
import classnames from 'classnames'

const MovieThumbnail = (props) => {
  const { onClickHandler, releaseDate, posterImage, movieTitle } = props
  const [hovering, setHovering] = useState(false)
  return (
    <React.Fragment>
      <div
        className={classnames('MovieThumbnail', { '--hovering': hovering })}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onClick={onClickHandler}
        data-testid={movieTitle + releaseDate}
      >
        <img alt={movieTitle} className="MovieThumbnail_Image" src={posterImage} />
        <p>{releaseDate}</p>
      </div>
    </React.Fragment>
  )
}

export default MovieThumbnail
