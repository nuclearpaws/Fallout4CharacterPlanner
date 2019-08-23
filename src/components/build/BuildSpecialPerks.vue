<template>
  <div class="build-perks">
    <p>Build Perks</p>
    <table>
      <thead>
        <th v-for="stat in stats" v-bind:key="stat">{{ stat }}</th>
      </thead>
      <tbody>
        <tr v-for="statValue in statValues" v-bind:key="statValue">
          <td v-for="stat in stats" v-bind:key="stat">
            <SpecialPerk v-bind:perk="getStatPerk(stat, statValue)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import {
  GAMEDATA_GET_IS_STATS_LOADED,
  GAMEDATA_GET_IS_SPECIAL_PERKS_LOADED,
  GAMEDATA_GET_STATS,
  GAMEDATA_GET_SPECIAL_PERKS,
} from '@/store/getters.type';

import {
  GAMEDATA_FETCH_STATS,
  GAMEDATA_FETCH_SPECIAL_PERKS,
} from '@/store/actions.type';

import SpecialPerk from '@/components/build/SpecialPerk.vue';

export default {
  components: {
    SpecialPerk,
  },
  data() {
    return {
    };
  },
  async created() {
    if (!this.statsLoaded) {
      this.$store.dispatch(GAMEDATA_FETCH_STATS);
    }

    if (!this.specialPerksLoaded) {
      this.$store.dispatch(GAMEDATA_FETCH_SPECIAL_PERKS);
    }
  },
  computed: {
    ...mapGetters({
      statsLoaded: GAMEDATA_GET_IS_STATS_LOADED,
      specialPerksLoaded: GAMEDATA_GET_IS_SPECIAL_PERKS_LOADED,
      stats: GAMEDATA_GET_STATS,
      specialPerks: GAMEDATA_GET_SPECIAL_PERKS,
    }),
    statValues() {
      return Array.from(new Set(this.specialPerks.map(sp => sp.stat.value).sort((a, b) => (a > b ? 0 : 1))));
    },
  },
  methods: {
    getStatPerk(stat, statValue) {
      return this.specialPerks.find(sp => sp.stat.name === stat && sp.stat.value === statValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.build-perks {
  margin: 0;
  padding: 0;
  border: 0;
  table {
    margin: 0;
    padding: 0;
    border: 0;
    border-collapse: collapse;
  }
}
</style>
