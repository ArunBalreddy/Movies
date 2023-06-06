import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = props => {
  const {movieDetails} = props
  const {posterPath, title, id} = movieDetails

  return (
    <Link to={`/movies/${id}`}>
      <img src={posterPath} alt={title} className="movie-img" />
    </Link>
  )
}

export default MovieCard
