import React from 'react'
import ReactDOM from 'react-dom'

import '../style/main.scss'

const App = () => {
  return <div>{JSON.stringify(process.env.OMDB_API_KEY)}</div>
}

ReactDOM.render(<App />, document.getElementById('app'))
