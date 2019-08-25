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
  GAMEDATA_GET_STATS_DATA,
  BUILD_GET_SPECIAL_PERKS,
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
      statsData: GAMEDATA_GET_STATS_DATA,
      specialPerks: BUILD_GET_SPECIAL_PERKS,
    }),
    requiredStats() {
      return this.statsData.stats.map((s) => {
        let value = Math.max(...this.specialPerks.filter(p => p.perk.stat.name === s).map(p => p.perk.stat.value));
        if (value <= 0) {
          value = this.statsData.minimumStatValue;
        }
        return {
          name: s,
          value,
        };
      });
    },
    initialStatPoints() {
      return this.statsData.initialStatPoints;
    },
    totalRequiredStatPoints() {
      const { minimumStatValue } = this.statsData;
      return this.requiredStats.map(s => s.value).reduce((t, c) => (t + c), this.statsData.stats.reduce(t => t - minimumStatValue, 0));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
