import React from 'react'

import SearchBox from './SearchBox'
import useSearchForm from '../hooks/searchHook'

import SearchResults from './SearchResults'

const AppContainer = () => {
  const {
    searchQuery,
    searchResults,
    selectedResults,
    handleInputChange,
    handleThumbnailClick,
    handleSubmit,
    submitting,
  } = useSearchForm()

  return (
    <div>
      <SearchBox
        onChangeHandler={handleInputChange}
        onSubmitHandler={handleSubmit}
        submitting={submitting}
        searchQuery={searchQuery}
      />
      <SearchResults
        selectedResults={selectedResults}
        searchResults={searchResults}
        handleThumbnailClick={handleThumbnailClick}
      />
    </div>
  )
}

export default AppContainer
