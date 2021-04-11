export const types = {
  html: 'SET_HTML',
  css: 'SET_CSS',
  javascript: 'SET_JAVASCRIPT'
}

export let mutations = {
  SET_HTML (state, payload) {
    state.html = [...payload]
  },
  SET_CSS (state, payload) {
    state.css = [...payload]
  },
  SET_JAVASCRIPT (state, payload) {
    state.javascript = [...payload]
  }
}
