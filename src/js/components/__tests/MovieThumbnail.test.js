import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MovieThumbnail from '../MovieThumbnail'

test('renders MovieThumbnail without crashing', () => {
  const props = {
    Title: 'someMovie',
    Poster: 'somePoster.png',
    Year: '2020',
  }

  render(<MovieThumbnail {...props} />)
})

test('ensure hover adds classname', () => {
  const props = {
    Title: 'someMovie',
    Poster: 'somePoster.png',
    Year: '2020',
  }

  render(<MovieThumbnail {...props} />)
  const thumbnail = screen.getByTestId(props.Title + props.Year)
  userEvent.hover(thumbnail)
  expect(thumbnail.classList.contains('--hovering')).toBe(true)

  userEvent.unhover(thumbnail)
  expect(thumbnail.classList.contains('--hovering')).toBe(false)
})
