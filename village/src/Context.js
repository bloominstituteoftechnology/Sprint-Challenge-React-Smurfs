import React from 'react'
import { makeGet, makePost, makeDelete } from './utils'

const get = makeGet('http://localhost:3333')
const post = makePost('http://localhost:3333')
const del = makeDelete('http://localhost:3333')
const { Consumer, Provider } = React.createContext()

const Data = {
  async getData () {
    this.store = await get('/smurfs')
  },
  store: [],
  async postData (data) {
    await post('/smurfs', { ...data })
  },
  async deleteData (id) {
    await del('/smurfs', id)
  }
}

export { Consumer, Provider, Data }
