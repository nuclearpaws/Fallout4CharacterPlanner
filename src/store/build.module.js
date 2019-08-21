export const RESET_BUILD = 'resetBuild';
export const UPDATE_BUILD_PERK = 'updateBuildPerk';
export const UPDATE_BUILD_PERKS_ORDER = 'updateBuildPerksOrder';

export default {
  state: {
    buildName: '',
    buildGender: '',
    buildSpecialPerks: [],
  },
  getters: {
    buildName(state) {
      return state.buildName;
    },
    buildGender(state) {
      return state.buildGender;
    },
    buildStats(state, getters, rootState, rootGetters) {
      return rootGetters.stats;
    },
    buildSpecialPerks(state) {
      return state.buildSpecialPerks;
    },
    buildSpecialPerksDetailed(state, getters, rootState, rootGetters) {
      return getters.buildSpecialPerks.map(bsp => rootGetters.specialPerks.find(sp => sp.name === bsp.name));
    },
  },
  mutations: {
  },
  actions: {
    [RESET_BUILD]({ state }) {
      console.log('RESET!');
      state.buildName = '';
      state.buildGender = '';
      state.buildSpecialPerks = [];
    },
    [UPDATE_BUILD_PERK]({ state }, { perkName, perkRank }) {
      const existingIndex = state.buildSpecialPerks.findIndex(bsp => bsp.perkName === perkName);
      if (existingIndex >= 0) {
        if (perkRank > 0) {
          state.buildSpecialPerks[existingIndex].perkRank = perkRank;
        } else {
          state.buildSpecialPerks.splice(existingIndex, 1);
        }
      } else {
        state.buildSpecialPerks.push({ perkName, perkRank });
      }
    },
    [UPDATE_BUILD_PERKS_ORDER]({ state }, { buildSpecialPerks }) {
      state.buildSpecialPerks = buildSpecialPerks;
    },
  },
};
