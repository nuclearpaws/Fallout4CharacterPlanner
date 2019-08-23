import Vue from 'vue';
import Vuex from 'vuex';

import gamedata from '@/store/gamedata.module';
import build from '@/store/build.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    gamedata,
    build,
  },
});
