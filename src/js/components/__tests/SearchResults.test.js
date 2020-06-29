import React from 'react'
import { render, screen } from '@testing-library/react'
import SearchResults from '../SearchResults'

test('renders SearchResults without crashing', () => {
  const props = {
    searchResults: {},
  }

  const result = render(<SearchResults {...props} />)
})

test('renders SearchResults no search yet', () => {
  const props = {
    searchResults: {},
  }

  const result = render(<SearchResults {...props} />)
  expect(screen.getByText(/no search yet/i)).not.toBe(null)
})
