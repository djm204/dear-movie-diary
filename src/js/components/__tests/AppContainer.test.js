import React from 'react'
import App from '../AppContainer'
import 'whatwg-fetch'

import { screen, render, waitForDomChange } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('search for citizen kane, assert results', async () => {
  render(<App />)
  const submit = screen.getByText(/submit/i)
  const results = screen.getByTestId(/search-results/i)
  const input = screen.getByLabelText(/search:/i)

  //initial
  expect(input.value).toBe('')
  expect(results.textContent).toBe('Search For Movies!')

  //search for citizen kane
  userEvent.type(input, 'citizen kane')
  userEvent.click(submit)
  await waitForDomChange({ container: results })

  //assert results
  expect(results).toMatchSnapshot()
})
