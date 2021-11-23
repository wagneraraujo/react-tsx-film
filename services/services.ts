
import axios from 'axios'

const apiUrl ='https://api.themoviedb.org/3' 
const apiKey ='api_key=90863c2206de13d852b1478e6f9b89d4' 


//popular flmes
export const getPopularMovies = async () => {
  const res = await axios.get(`${apiUrl}/movie/popular?${apiKey}`)
  return res.data.results
}

//incoming flmes
export const getUpcoming = async () => {
  const res = await axios.get(`${apiUrl}/movie/upcoming?${apiKey}`)
  return res.data.results
}


