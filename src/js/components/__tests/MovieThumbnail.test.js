import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MovieThumbnail from '../MovieThumbnail'

test('renders MovieThumbnail without crashing', () => {
  const props = {
    movieTitle: 'someMovie',
    posterImage: 'somePoster.png',
    releaseDate: '2020',
  }

  const result = render(<MovieThumbnail {...props} />)
})

test('ensure hover adds classname', async () => {
  const props = {
    movieTitle: 'someMovie',
    posterImage: 'somePoster.png',
    releaseDate: '2020',
  }

  render(<MovieThumbnail {...props} />)
  const thumbnail = screen.getByTestId(props.movieTitle + props.releaseDate)
  userEvent.hover(thumbnail)
  expect(thumbnail.classList.contains('--hovering')).toBe(true)

  userEvent.unhover(thumbnail)
  expect(thumbnail.classList.contains('--hovering')).toBe(false)
})
