import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'

class Popular extends Component {
  state = {apiStatus: '', data: []}

  componentDidMount() {
    this.getPopularMoviesData()
  }

  getPopularMoviesData = async () => {
    const apiUrl = 'https://apis.ccbp.in/movies-app/popular-movies'

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <div className="popular-bg-container">
        <Header />
      </div>
    )
  }
}

export default Popular
