import { useState } from 'react'
import api from '../helpers/ombdApiHelper'

const useSearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [searchResults, setSearchResults] = useState({})
  const [selectedResults, setSelectedResults] = useState([])

  const handleSubmit = async (event) => {
    if (event) event.preventDefault()
    setSubmitting(true)

    const result = await api.search(process.env.OMDB_API_KEY, searchQuery)
    setSearchResults(result)

    setSubmitting(false)
  }

  const handleThumbnailClick = (event) => {
    const targetId = event.currentTarget.dataset.imdbid
    if (selectedResults && selectedResults.includes(targetId)) {
      const result = selectedResults.filter((selectedId) => {
        return selectedId !== targetId
      })

      setSelectedResults(result)
    } else {
      const newResults = Array.from(selectedResults)
      newResults.push(targetId)
      setSelectedResults(newResults)
    }
  }

  const handleInputChange = (event) => {
    event.persist()
    setSearchQuery(event.target.value)
  }

  return {
    handleSubmit,
    handleInputChange,
    handleThumbnailClick,
    searchQuery,
    searchResults,
    selectedResults,
    submitting,
  }
}

export default useSearchForm
