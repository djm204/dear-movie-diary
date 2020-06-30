import { useState } from 'react'
import api from '../helpers/ombdApiHelper'

const useSearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [searchResults, setSearchResults] = useState({})
  const [selectedResults, setSelectedResults] = useState([])
  const [confirmed, setConfirmed] = useState(false)

  const handleSubmitSearch = async (event) => {
    if (event) event.preventDefault()
    setSubmitting(true)

    const result = await api.search(process.env.OMDB_API_KEY, searchQuery)
    setSearchResults(result)

    setSubmitting(false)
  }

  const handleThumbnailClick = (event) => {
    const targetId = event.currentTarget.dataset.imdbid
    const alreadyExists =
      selectedResults &&
      selectedResults.filter((selection) => {
        return selection.imdbID === targetId
      }).length > 0

    if (alreadyExists) {
      const result = selectedResults.filter((selection) => {
        return selection.imdbID !== targetId
      })

      setSelectedResults(result)
    } else {
      const newResults = Array.from(selectedResults)
      const newSelection = searchResults.Search.filter((selection) => {
        return selection.imdbID === targetId
      })

      newResults.push(newSelection[0])

      setSelectedResults(newResults)
    }
  }

  const handleInputChange = (event) => {
    event.persist()
    setSearchQuery(event.target.value)
  }

  const handleConfirmButtonClick = (event) => {
    if (event) event.preventDefault()
  }

  const handleSubmitItems = () => {
    setSubmitting(true)

    //I know this is gross but I wanted to simulate backend calls
    setTimeout(() => {
      setConfirmed(true)
      setTimeout(() => resetStateAndGoHome(), 1000)
    }, 3000)
  }

  const resetStateAndGoHome = () => {
    setSearchResults({})
    setSelectedResults([])
    setSearchResults('')
    setSubmitting(false)
    setConfirmed(false)
    window.location = '/'
  }

  return {
    handleSubmitSearch,
    handleSubmitItems,
    handleInputChange,
    handleThumbnailClick,
    handleConfirmButtonClick,
    searchQuery,
    searchResults,
    selectedResults,
    confirmed,
    submitting,
  }
}

export default useSearchForm
