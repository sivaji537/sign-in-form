import axios from 'axios'

export const login = (username, password) =>
  axios({
    method: 'POST',
    url: `/login`,
    auth: {
      username,
      password,
    },
    baseURL: 'http://localhost:8000/api/'
  })
