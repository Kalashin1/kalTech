import { types } from './Mutations'

const { html, css, javascript } = types

export const actions = {
  async SET_HTML ({ commit }) {
    const res = await fetch('http://localhost:3000/html')
    const data = await res.json()
    commit(html, data)
  },

  async SET_CSS ({ commit }) {
    const res = await fetch('http://localhost:3000/css')
    const data = await res.json()
    commit(css, data)
  },

  async SET_JAVASCRIPT ({ commit }) {
    const res = await fetch('http://localhost:3000/javascript')
    const data = await res.json()
    commit(javascript, data)
  }
}
