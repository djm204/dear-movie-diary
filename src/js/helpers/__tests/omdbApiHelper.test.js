import api from '../ombdApiHelper'
import 'whatwg-fetch'
test('api.search returns expected result.', async () => {
  const expected = {
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

  const result = await api.search(process.env.OMDB_API_KEY, 'citizen kane')
  expect(result).toEqual(expected)
})
