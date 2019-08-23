import {
  BUILD_GET_NAME,
  BUILD_GET_GENDER,
  BUILD_GET_SPECIAL_PERKS,
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
    name: '',
    gender: '',
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
    async [BUILD_RESET]({ state }) {
      console.log('RESET!');
      state.name = '';
      state.gender = '';
      state.specialPerks = [];
    },
    async [BUILD_UPDATE_SPECIAL_PERK]({ state }, { name, rank }) {
      const existingIndex = state.specialPerks.findIndex(d => d.name === name);
      if (existingIndex >= 0) {
        if (rank > 0) {
          state.specialPerks[existingIndex].rank = rank;
        } else {
          state.specialPerks.splice(existingIndex, 1);
        }
      } else if (rank > 0) {
        state.specialPerks.push({ name, rank });
      }
    },
    async [BUILD_UPDATE_SPECIAL_PERKS_ORDER]({ state }, { specialPerks }) {
      state.specialPerks = specialPerks;
    },
  },
};
