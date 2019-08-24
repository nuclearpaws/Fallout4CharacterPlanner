import {
  BUILD_GET_NAME,
  BUILD_GET_GENDER,
  BUILD_GET_SPECIAL_PERKS,
  BUILD_GET_REQUIRED_STATS,
  BUILD_GET_TOTAL_REQUIRED_STAT_POINTS,
  GAMEDATA_GET_STATS,
  GAMEDATA_GET_MINIMUM_STAT_VALUE,
} from '@/store/getters.type';

import {
  BUILD_SET_NAME,
  BUILD_SET_GENDER,
  BUILD_SET_SPECIAL_PERKS,
} from '@/store/mutations.type';

import {
  BUILD_RESET,
  BUILD_UPDATE_SPECIAL_PERK,
  BUILD_UPDATE_SPECIAL_PERKS_ORDER,
} from '@/store/actions.type';

export default {
  namespaced: false,
  state: {
    name: null,
    gender: null,
    specialPerks: [],
  },
  getters: {
    [BUILD_GET_NAME](state) {
      return state.name;
    },
    [BUILD_GET_GENDER](state) {
      return state.gender;
    },
    [BUILD_GET_SPECIAL_PERKS](state) {
      return state.specialPerks;
    },
    [BUILD_GET_REQUIRED_STATS](state, getters, baseState, baseGetters) {
      return baseGetters[GAMEDATA_GET_STATS].map((s) => {
        let value = Math.max(...state.specialPerks.filter(p => p.perk.stat.name === s).map(p => p.perk.stat.value));
        if (value <= 0) {
          value = baseGetters[GAMEDATA_GET_MINIMUM_STAT_VALUE];
        }
        return {
          name: s,
          value,
        };
      });
    },
    [BUILD_GET_TOTAL_REQUIRED_STAT_POINTS](state, getters, baseState, baseGetters) {
      const minimumStatValue = baseGetters[GAMEDATA_GET_MINIMUM_STAT_VALUE];
      return getters[BUILD_GET_REQUIRED_STATS].map(s => s.value).reduce((t, c) => (t + c), baseGetters[GAMEDATA_GET_STATS].reduce(t => t - minimumStatValue, 0));
    },
  },
  mutations: {
    [BUILD_SET_NAME](state, value) {
      state.name = value;
    },
    [BUILD_SET_GENDER](state, value) {
      state.gender = value;
    },
    [BUILD_SET_SPECIAL_PERKS](state, value) {
      state.specialPerks = value;
    },
  },
  actions: {
    async [BUILD_RESET]({ commit }) {
      commit(BUILD_SET_NAME, null);
      commit(BUILD_SET_GENDER, null);
      commit(BUILD_SET_SPECIAL_PERKS, []);
    },
    async [BUILD_UPDATE_SPECIAL_PERK]({ state, commit }, { perk, rank }) {
      const existingIndex = state.specialPerks.findIndex(d => d.perk.name === perk.name);
      if (existingIndex >= 0) {
        if (rank > 0) {
          state.specialPerks[existingIndex].rank = rank;
        } else {
          state.specialPerks.splice(existingIndex, 1);
        }
      } else if (rank > 0) {
        state.specialPerks.push({ perk, rank });
      }
      commit(BUILD_SET_SPECIAL_PERKS, state.specialPerks);
    },
    async [BUILD_UPDATE_SPECIAL_PERKS_ORDER]({ commit }, { specialPerks }) {
      commit(BUILD_SET_SPECIAL_PERKS, specialPerks);
    },
  },
};
