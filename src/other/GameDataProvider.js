import CodsworthNames from '@/assets/data/Fallout4.CodsworthNames.json';
import Genders from '@/assets/data/Fallout4.Genders.json';
import Stats from '@/assets/data/Fallout4.Stats.json';
import SpecialPerks from '@/assets/data/Fallout4.SpecialPerks.json';

export default {
  async getRecognisedNames() {
    return CodsworthNames.names;
  },
  async getGenders() {
    return Genders.genders;
  },
  async getStats() {
    return Stats.stats;
  },
  async getSpecialPerks() {
    return SpecialPerks.special;
  },
};
