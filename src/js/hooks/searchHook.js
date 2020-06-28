import { useState } from 'react'
import api from '../helpers/ombdApiHelper'

const useSearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [searchResults, setSearchResults] = useState({})
  const [errors, setErrors] = useState([])

  const handleSubmit = async (event) => {
    if (event) event.preventDefault()
    setSubmitting(true)

    if (errors.length === 0) {
      const result = await api.search(process.env.OMDB_API_KEY, searchQuery)

      if (!result.Response) {
        setErrors(result.Error)
      } else {
        setSearchResults(result)
      }

      setSubmitting(false)
    } else {
      setSubmitting(false)
    }
  }

  const handleInputChange = (event) => {
    event.persist()
    setSearchQuery(event.target.value)
  }

  return {
    handleSubmit,
    handleInputChange,
    searchQuery,
    searchResults,
    errors,
    submitting,
  }
}

export default useSearchForm
