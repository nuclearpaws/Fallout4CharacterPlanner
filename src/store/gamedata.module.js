import GameDataProvider from '@/other/GameDataProvider';

import {
  GAMEDATA_GET_IS_RECOGNISED_NAMES_LOADED,
  GAMEDATA_GET_IS_GENDERS_LOADED,
  GAMEDATA_GET_IS_STATS_LOADED,
  GAMEDATA_GET_IS_SPECIAL_PERKS_LOADED,
  GAMEDATA_GET_RECOGNISED_NAMES,
  GAMEDATA_GET_GENDERS,
  GAMEDATA_GET_STATS,
  GAMEDATA_GET_SPECIAL_PERKS,
} from '@/store/getters.type';

import {
  GAMEDATA_SET_IS_RECOGNISED_NAMES_LOADED,
  GAMEDATA_SET_IS_GENDERS_LOADED,
  GAMEDATA_SET_IS_STATS_LOADED,
  GAMEDATA_SET_IS_SPECIAL_PERKS_LOADED,
  GAMEDATA_SET_RECOGNISED_NAMES,
  GAMEDATA_SET_GENDERS,
  GAMEDATA_SET_STATS,
  GAMEDATA_SET_SPECIAL_PERKS,
} from '@/store/mutations.type';

import {
  GAMEDATA_FETCH_RECOGNISED_NAMES,
  GAMEDATA_FETCH_GENDERS,
  GAMEDATA_FETCH_STATS,
  GAMEDATA_FETCH_SPECIAL_PERKS,
} from '@/store/actions.type';

export default {
  state: {
    isRecognisedNamesLoaded: false,
    isGendersLoaded: false,
    isStatsLoaded: false,
    isSpecialPerksLoaded: false,
    recognisedNames: [],
    genders: [],
    stats: [],
    specialPerks: [],
  },
  getters: {
    [GAMEDATA_GET_IS_RECOGNISED_NAMES_LOADED](state) {
      return state.isRecognisedNamesLoaded;
    },
    [GAMEDATA_GET_IS_GENDERS_LOADED](state) {
      return state.isGendersLoaded;
    },
    [GAMEDATA_GET_IS_STATS_LOADED](state) {
      return state.isStatsLoaded;
    },
    [GAMEDATA_GET_IS_SPECIAL_PERKS_LOADED](state) {
      return state.isSpecialPerksLoaded;
    },
    [GAMEDATA_GET_RECOGNISED_NAMES](state) {
      return state.recognisedNames;
    },
    [GAMEDATA_GET_GENDERS](state) {
      return state.genders;
    },
    [GAMEDATA_GET_STATS](state) {
      return state.stats;
    },
    [GAMEDATA_GET_SPECIAL_PERKS](state) {
      return state.specialPerks;
    },
  },
  mutations: {
    [GAMEDATA_SET_IS_RECOGNISED_NAMES_LOADED](state, value) {
      state.isRecognisedNamesLoaded = value;
    },
    [GAMEDATA_SET_IS_GENDERS_LOADED](state, value) {
      state.isGendersLoaded = value;
    },
    [GAMEDATA_SET_IS_STATS_LOADED](state, value) {
      state.isStatsLoaded = value;
    },
    [GAMEDATA_SET_IS_SPECIAL_PERKS_LOADED](state, value) {
      state.isSpecialPerksLoaded = value;
    },
    [GAMEDATA_SET_RECOGNISED_NAMES](state, value) {
      state.recognisedNames = value;
    },
    [GAMEDATA_SET_GENDERS](state, value) {
      state.genders = value;
    },
    [GAMEDATA_SET_STATS](state, value) {
      state.stats = value;
    },
    [GAMEDATA_SET_SPECIAL_PERKS](state, value) {
      state.specialPerks = value;
    },
  },
  actions: {
    async [GAMEDATA_FETCH_RECOGNISED_NAMES]({ commit }) {
      const data = await GameDataProvider.getRecognisedNames();
      commit(GAMEDATA_SET_RECOGNISED_NAMES, data);
      commit(GAMEDATA_SET_IS_RECOGNISED_NAMES_LOADED, true);
    },
    async [GAMEDATA_FETCH_GENDERS]({ commit }) {
      const data = await GameDataProvider.getGenders();
      commit(GAMEDATA_SET_GENDERS, data);
      commit(GAMEDATA_SET_IS_GENDERS_LOADED, true);
    },
    async [GAMEDATA_FETCH_STATS]({ commit }) {
      const data = await GameDataProvider.getStats();
      commit(GAMEDATA_SET_STATS, data);
      commit(GAMEDATA_SET_IS_STATS_LOADED, true);
    },
    async [GAMEDATA_FETCH_SPECIAL_PERKS]({ commit }) {
      const data = await GameDataProvider.getSpecialPerks();
      commit(GAMEDATA_SET_SPECIAL_PERKS, data);
      commit(GAMEDATA_SET_IS_SPECIAL_PERKS_LOADED, true);
    },
  },
};
