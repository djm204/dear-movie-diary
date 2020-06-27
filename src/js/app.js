import React from 'react'
import ReactDOM from 'react-dom'
import api from './helpers/ombdApiHelper'

import '../style/main.scss'

const App = () => {
  return <div>{JSON.stringify(api.getMovies(process.env.OMDB_API_KEY, 'test'))}</div>
}

ReactDOM.render(<App />, document.getElementById('app'))
