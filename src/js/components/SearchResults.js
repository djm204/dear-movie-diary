import React, { useState } from 'react'
import MovieThumbnail from './MovieThumbnail'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

const SearchResults = (props) => {
  const { selectedResults, searchResults, handleThumbnailClick, handleConfirmButtonClick } = props
  const [fixedConfirm, setFixedConfirm] = useState(false)

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50 && !fixedConfirm) setFixedConfirm(true)

    if (window.scrollY < 50 && fixedConfirm) setFixedConfirm(false)
  })

  return (
    <div className="SearchResults" data-testid="search-results">
      {searchResults.Response === 'True' && searchResults.Search.length > 0 ? (
        <div className={classnames('SearchResults_ConfirmFavorites', { '--fixed': fixedConfirm })}>
          <form onSubmit={handleConfirmButtonClick}>
            <Link to="/confirmation">
              <button type="submit">Confirm Favorites</button>
            </Link>
          </form>
        </div>
      ) : null}
      <div className="SearchResults_Data">
        {renderSearchResults(searchResults, handleThumbnailClick, selectedResults)}
      </div>
    </div>
  )
}

const renderSearchResults = (results, handleThumbnailClick, selectedResults) => {
  switch (results.Response) {
    case 'True':
      return results.Search.map((searchResult) => {
        return (
          <MovieThumbnail
            key={searchResult.imdbID}
            {...searchResult}
            onClickHandler={handleThumbnailClick}
            selected={
              selectedResults.filter((result) => result.imdbID === searchResult.imdbID).length !== 0
            }
            imdbID={searchResult.imdbID}
          />
        )
      })
    case 'False':
      return <p>{results.Error}</p>
    default:
      return <p>No Search Yet</p>
  }
}

export default SearchResults
