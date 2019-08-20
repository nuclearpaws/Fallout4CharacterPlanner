import Vue from 'vue';
import Vuex from 'vuex';

import GameDataModule from '@/store/gamedata.module';
import BuildModule from '@/store/build.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    GameDataModule,
    BuildModule,
  },
});
