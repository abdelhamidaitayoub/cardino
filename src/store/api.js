import axios from 'axios'

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
})

api.interceptors.request.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) this.$store.dispatch('logout')
    return Promise.reject(err)
  }
)

export default api
