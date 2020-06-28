import React from 'react'

const SearchBox = (props) => {
  const { onSubmitHandler, onChangeHandler, submitting, searchQuery } = props
  return (
    <React.Fragment>
      <form className="SearchForm" onSubmit={onSubmitHandler}>
        <label htmlFor="search-box">Search for a movie..</label>
        <input
          className="SearchForm__Input"
          id="search-box"
          type="text"
          onChange={onChangeHandler}
          value={searchQuery}
          data-testid="SearchBoxTestInput"
        />
        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </form>
    </React.Fragment>
  )
}

export default SearchBox
