export default {
  SET_THEME_CONFIG(state, val) {
    state.global = val.global
    state.headerSection = val.headerSection
    state.sidebarSection = val.sidebarSection
    state.bannerSection = val.bannerSection
    state.promotionSection = val.promotionSection
    state.tabMenuSection = val.tabMenuSection
    state.jackpotSection = val.jackpotSection
    state.videoSection = val.videoSection
    state.knowledgeSection = val.knowledgeSection
    state.gameListSection = val.gameListSection
    state.footerSection = val.footerSection
  },
}
