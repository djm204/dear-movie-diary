import React from 'react'
import SearchBox from './SearchBox'
import useSearchForm from '../hooks/searchHook'

const AppContainer = () => {
  const {
    errors,
    searchResults,
    handleInputChange,
    handleSubmit,
    submitting,
    searchQuery,
  } = useSearchForm()

  return (
    <div>
      <SearchBox
        onChangeHandler={handleInputChange}
        onSubmitHandler={handleSubmit}
        submitting={submitting}
        searchQuery={searchQuery}
      />
      <div className="SearchResults">
        <div className="SearchResults_Data">Results: {JSON.stringify(searchResults)}</div>
      </div>
    </div>
  )
}

export default AppContainer
