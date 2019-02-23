import HDApiService from '~/swagger/hd-api'
const baseURL = 'http://hdsystem.info:8080'

export default (({ $axios }, inject) => {
  const HDApi = new HDApiService({ $axios, baseURL })
  inject('api', HDApi)
})