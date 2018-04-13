import Axios, { get, post } from 'axios'

const makeFetch = pathBase => async pathEnd => get(`${pathBase}${pathEnd}`)

const makePost = pathBase => async (pathEnd, body) =>
  post(`${pathBase}${pathEnd}`, body)

const makeDelete = pathBase => async (pathEnd, body) =>
  Axios.delete(`${pathBase}${pathEnd}/${body}`)

export { makeFetch, makePost, makeDelete }
