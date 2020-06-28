const search = async (apiKey, searchQuery) => {
  const apiUrl = 'https://www.omdbapi.com/?'
  const searchParams = new URLSearchParams({ apiKey: apiKey, s: searchQuery })

  const searchUrl = `${apiUrl}${searchParams.toString()}`
  return await fetch(searchUrl).then((data) => data.json())
}

export default {
  search,
}
