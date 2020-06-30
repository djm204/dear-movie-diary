import React from 'react'

const SearchBox = (props) => {
  const { onSubmitHandler, onChangeHandler, submitting, searchQuery } = props
  return (
    <React.Fragment>
      <form className="SearchForm" onSubmit={onSubmitHandler}>
        <fieldset>
          <label htmlFor="search-box">Search:</label>
          <input
            className="SearchForm__Input"
            id="search-box"
            type="text"
            onChange={onChangeHandler}
            value={searchQuery}
          />
        </fieldset>

        <button className="Button" type="submit" disabled={submitting}>
          Submit
        </button>
      </form>
    </React.Fragment>
  )
}

export default SearchBox
