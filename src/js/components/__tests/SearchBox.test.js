import React from 'react'
import { render } from '@testing-library/react'
import SearchBox from '../SearchBox'

test('renders SearchBox without crashing', () => {
  const props = {
    searchQuery: 'citizen kane',
    submitting: false,
    onChangeHandler: () => {},
  }

  const result = render(<SearchBox {...props} />)
})
