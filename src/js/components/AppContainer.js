import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import SearchBox from './SearchBox'
import useSearchForm from '../hooks/searchHook'

import SearchResults from './SearchResults'
import Confirmation from './Confirmation'
import Header from './Header'

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
    handleGoBack,
    confirmed,
    submitting,
  } = useSearchForm()

  return (
    <React.Fragment>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <SearchBox
              onChangeHandler={handleInputChange}
              onSubmitHandler={handleSubmitSearch}
              submitting={submitting}
              searchQuery={searchQuery}
            />
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
              onClickHandler={handleSubmitItems}
              confirmed={confirmed}
              submitting={submitting}
              handleGoBack={handleGoBack}
            />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default AppContainer
