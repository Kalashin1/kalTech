export const types = {
  html: 'SET_HTML',
  css: 'SET_CSS',
  javascript: 'SET_JAVASCRIPT'
}

export let mutations = {
  SET_HTML (state, payload) {
    console.log(payload)
    state.HTML = [...payload]
  },
  SET_CSS (state, payload) {
    console.log(payload)
    state.CSS = [...payload]
  },
  SET_JAVASCRIPT (state, payload) {
    console.log(payload)
    state.javascript = [...payload]
  }
}
