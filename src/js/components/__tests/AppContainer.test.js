import React from 'react'
import App from '../appContainer'
import 'whatwg-fetch'

import { screen, render, waitForDomChange } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('search for citizen kane, assert results', async () => {
  render(<App />)
  const submit = screen.getByText(/submit/i)
  const results = screen.getByText(/results/i)
  const input = screen.getByLabelText(/search for a movie../i)

  //initial
  expect(input.value).toBe('')
  expect(results.textContent).toBe('Results: {}')

  //search for citizen kane
  userEvent.type(input, 'citizen kane')
  userEvent.click(submit)
  await waitForDomChange({ container: results })

  //assert results
  expect(results.textContent).toBe('Results: ' + JSON.stringify(expectedCitizenKaneResponse))
})

const expectedCitizenKaneResponse = {
  Search: [
    {
      Title: 'Citizen Kane',
      Year: '1941',
      imdbID: 'tt0033467',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      Title: 'Beyond Citizen Kane',
      Year: '1993',
      imdbID: 'tt1356393',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMDEwMjAwZGEtZmMwNi00NmJhLWJlZjktNzg4MjdhNmVjY2U3XkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_SX300.jpg',
    },
    {
      Title: "Reflections on 'Citizen Kane'",
      Year: '1991',
      imdbID: 'tt0212466',
      Type: 'movie',
      Poster: 'N/A',
    },
    {
      Title: 'The Complete Citizen Kane',
      Year: '1991',
      imdbID: 'tt2912252',
      Type: 'movie',
      Poster: 'N/A',
    },
    {
      Title: 'Citizen versus Kane',
      Year: '2009',
      imdbID: 'tt1387142',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjg2ODM3MjI3NF5BMl5BanBnXkFtZTcwNDc0ODk1Mg@@._V1_SX300.jpg',
    },
    {
      Title: 'Citizen Kane and Zombies',
      Year: '2011',
      imdbID: 'tt2626774',
      Type: 'movie',
      Poster: 'N/A',
    },
    {
      Title: 'Restoring Citizen Kane',
      Year: '2012',
      imdbID: 'tt5733042',
      Type: 'movie',
      Poster: 'N/A',
    },
  ],
  totalResults: '7',
  Response: 'True',
}
