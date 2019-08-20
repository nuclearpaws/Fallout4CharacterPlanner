import CodsworthNames from '@/assets/data/Fallout4.CodsworthNames.json';
import Genders from '@/assets/data/Fallout4.Genders.json';
import Stats from '@/assets/data/Fallout4.Stats.json';
import SpecialPerks from '@/assets/data/Fallout4.SpecialPerks.json';

export default {
  state: {
    codsworthNames: CodsworthNames.names,
    genders: Genders.genders,
    stats: Stats.stats,
    specialPerks: SpecialPerks.special,
  },
  getters: {
    recognisedNames(state) {
      return state.codsworthNames;
    },
    genders(state) {
      return state.genders;
    },
    stats(state) {
      return state.stats;
    },
    specialPerks(state) {
      return state.specialPerks;
    },
  },
  mutations: {
  },
  actions: {
  },
};
