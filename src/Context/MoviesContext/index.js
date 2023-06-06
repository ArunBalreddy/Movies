import React from 'react'

const MoviesContext = React.createContext({
  userDetails: {username: '', password: ''},
  setUserDetails: () => {},
})

export default MoviesContext
