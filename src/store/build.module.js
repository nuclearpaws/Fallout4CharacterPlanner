export const RESET_BUILD = 'resetBuild';
export const UPDATE_BUILD_PERK = 'updateBuildPerks';

export default {
  state: {
    buildName: '',
    buildGender: '',
    wantedPerks: [],
  },
  getters: {
    buildName(state) {
      return state.buildName;
    },
    buildGender(state) {
      return state.buildGender;
    },
    wantedPerks(state) {
      return state.wantedPerks;
    },
  },
  mutations: {
  },
  actions: {
    [RESET_BUILD](state) {
      state.buildName = [];
      state.wantedPerks = [];
    },
    [UPDATE_BUILD_PERK]({ state }, { perkName, perkRank }) {
      const existingIndex = state.wantedPerks.findIndex(wp => wp.perkName === perkName);
      if (existingIndex >= 0) {
        if (perkRank > 0) {
          state.wantedPerks[existingIndex].perkRank = perkRank;
        } else {
          state.wantedPerks.splice(existingIndex, 1);
        }
      } else {
        state.wantedPerks.push({ perkName, perkRank });
      }
    },
  },
};
