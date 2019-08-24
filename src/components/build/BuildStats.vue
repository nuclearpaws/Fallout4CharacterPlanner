<template>
  <div class="build-stats">
    <h2>Build Stats</h2>
    <ul class="mx-3 my-1">
      <li v-for="(stat, index) in requiredStats" v-bind:key="`${index}-${stat.name}-${stat.value}`">{{ `${stat.name}: ${stat.value}` }}</li>
    </ul>
    <p>Points: <b v-bind:class="[totalRequiredStatPoints > initialStatPoints ? 'is-error' : '']">{{ totalRequiredStatPoints }} / {{ initialStatPoints }}</b></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import {
  GAMEDATA_GET_IS_STATS_DATA_LOADED,
  GAMEDATA_GET_INITIAL_STAT_POINTS,
  BUILD_GET_REQUIRED_STATS,
  BUILD_GET_TOTAL_REQUIRED_STAT_POINTS,
} from '@/store/getters.type';

import {
  GAMEDATA_FETCH_STATS_DATA,
} from '@/store/actions.type';

export default {
  async created() {
    if (!this.statsDataLoaded) {
      await this.$store.dispatch(GAMEDATA_FETCH_STATS_DATA);
    }
  },
  computed: {
    ...mapGetters({
      statsDataLoaded: GAMEDATA_GET_IS_STATS_DATA_LOADED,
      initialStatPoints: GAMEDATA_GET_INITIAL_STAT_POINTS,
      requiredStats: BUILD_GET_REQUIRED_STATS,
      totalRequiredStatPoints: BUILD_GET_TOTAL_REQUIRED_STAT_POINTS,
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>
