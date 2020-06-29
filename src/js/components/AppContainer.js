import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import SearchBox from './SearchBox'
import useSearchForm from '../hooks/searchHook'

import SearchResults from './SearchResults'
import Confirmation from './Confirmation'

const AppContainer = () => {
  const {
    searchQuery,
    searchResults,
    selectedResults,
    handleInputChange,
    handleThumbnailClick,
    handleSubmitSearch,
    handleConfirmButtonClick,
    handleSubmitItems,
    confirmed,
    submitting,
  } = useSearchForm()

  return (
    <div>
      <SearchBox
        onChangeHandler={handleInputChange}
        onSubmitHandler={handleSubmitSearch}
        submitting={submitting}
        searchQuery={searchQuery}
      />
      <Router>
        <Switch>
          <Route exact path="/">
            <SearchResults
              selectedResults={selectedResults}
              searchResults={searchResults}
              handleThumbnailClick={handleThumbnailClick}
              handleConfirmButtonClick={handleConfirmButtonClick}
            />
          </Route>
          <Route path="/confirmation">
            <Confirmation
              selectedMovies={selectedResults}
              handleConfirmItems={handleSubmitItems}
              confirmed={confirmed}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default AppContainer
