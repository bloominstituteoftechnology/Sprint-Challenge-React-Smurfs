import Axios, { get, post } from 'axios'

const makeGet = pathBase => async pathEnd =>
  get(`${pathBase}${pathEnd}`)
    .then(data => data)
    .then(({ data }) => data)

const makePost = pathBase => async (pathEnd, body) =>
  post(`${pathBase}${pathEnd}`, body)

const makeDelete = pathBase => async (pathEnd, body) =>
  Axios.delete(`${pathBase}${pathEnd}/${body}`)

export { makeGet, makePost, makeDelete }
