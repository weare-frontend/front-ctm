const state = () => {
  return {
    brand: null,
    theme: null,
  }
}

const getters = {}

const mutations = {
  SET_BRAND_SETTING(state, val) {
    state.brand = val
  },
  SET_THEME_SETTING(state, val) {
    state.theme = val
  },
}

const actions = {
  async getBrandSetting({ commit, state, rootState }) {
    try {
      const brand = await this.$axios.$get(
        `/api/brands-setting/${process.env.BRAND_ID}`
      )
      commit('SET_BRAND_SETTING', brand)
    } catch (error) {}
  },
  async getThemeSetting({ commit, state, rootState }) {
    const theme = await this.$axios.$get(
      `/api/theme-setting/${process.env.BRAND_ID}`
    )
    commit('SET_THEME_SETTING', data)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
