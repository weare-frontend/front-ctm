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
    if (rootState.auth && rootState.auth.user.player_games.length > 0) {
      const detail = await this.$axios.$post('/api/players-detail', {
        agents_id: rootState.auth.user
          ? rootState.auth.user.player_games[0].agents_id
          : '',
        account_api: rootState.auth.user
          ? rootState.auth.user.player_games[0].account_api
          : '',
      })
      commit('SET_DETAIL', detail)
    }
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
