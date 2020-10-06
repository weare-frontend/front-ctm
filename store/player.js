const state = () => {
  return {
    detail: null,
  }
}
const getters = {}
const mutations = {
  SET_DETAIL(state, val) {
    state.detail = val
  },
}
const actions = {
  async getPlayerDetail({ commit, state, rootState }) {
    const detail = await this.$axios.$post('/api/players-detail', {
      agents_id: '5f587d2c578f2d8b146aa27a',
      account_api: rootState.auth.user.player_games[0].account_api,
    })
    commit('SET_DETAIL', detail)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
