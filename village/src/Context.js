import React from 'react'
import { makeGet } from './utils'

const get = makeGet('http://localhost:3333')
const { Consumer, Provider } = React.createContext()

const Data = {
  async getData () {
    this.store = await get('/smurfs')
  },
  store: []
}

export { Consumer, Provider, Data }
