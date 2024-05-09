// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  // console.log(props)
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    movie => movie.categoryId === 'ACTION',
  )
  // console.log(actionMoviesList)
  const comedyMoviesList = moviesList.filter(
    movie => movie.categoryId === 'COMEDY',
  )
  //   console.log(comedyMoviesList)
  return (
    <div className="prime-video-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="movies-container">
        <h1 className="movies-heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMoviesList} />
        <h1 className="movies-heading">Comedy Movies </h1>
        <MoviesSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}
export default PrimeVideo
