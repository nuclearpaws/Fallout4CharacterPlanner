<template>
  <div class="build-perks">
    <h2>Build Special Perks</h2>
    <table>
      <thead>
        <th v-for="stat in statsData.stats" v-bind:key="stat"><h3>{{ stat }}</h3></th>
      </thead>
      <tbody>
        <tr v-for="statValue in statValues" v-bind:key="statValue">
          <td v-for="stat in statsData.stats" v-bind:key="stat">
            <SpecialPerk v-bind:perk="getStatPerk(stat, statValue)" />
          </td>
        </tr>
      </tbody>
    </table>
    <p>Perks Taken: <b v-bind:class="[totalPerkCount >= dangerPerkCount ? 'is-error' : totalPerkCount >= warningPerkCount ? 'is-warning' : totalPerkCount >= successPerkCount ? 'is-success' : '']">{{ totalPerkCount }} / {{ dangerPerkCount }}</b></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import {
  GAMEDATA_GET_IS_STATS_DATA_LOADED,
  GAMEDATA_GET_IS_SPECIAL_PERKS_LOADED,
  GAMEDATA_GET_STATS_DATA,
  GAMEDATA_GET_SPECIAL_PERKS,
  BUILD_GET_SPECIAL_PERKS,
} from '@/store/getters.type';

import {
  GAMEDATA_FETCH_STATS_DATA,
  GAMEDATA_FETCH_SPECIAL_PERKS,
} from '@/store/actions.type';

import SpecialPerk from '@/components/build/SpecialPerk.vue';

export default {
  components: {
    SpecialPerk,
  },
  data() {
    return {
      successPerkCount: 1,
      warningPerkCount: 30,
      dangerPerkCount: 50,
    };
  },
  async created() {
    if (!this.statsLoaded) {
      await this.$store.dispatch(GAMEDATA_FETCH_STATS_DATA);
    }

    if (!this.specialPerksLoaded) {
      await this.$store.dispatch(GAMEDATA_FETCH_SPECIAL_PERKS);
    }
  },
  computed: {
    ...mapGetters({
      statsLoaded: GAMEDATA_GET_IS_STATS_DATA_LOADED,
      specialPerksLoaded: GAMEDATA_GET_IS_SPECIAL_PERKS_LOADED,
      statsData: GAMEDATA_GET_STATS_DATA,
      specialPerks: GAMEDATA_GET_SPECIAL_PERKS,
      wantedPerks: BUILD_GET_SPECIAL_PERKS,
    }),
    statValues() {
      return Array.from(new Set(this.specialPerks.map(sp => sp.stat.value).sort((a, b) => (a > b ? 0 : 1))));
    },
    totalPerkCount() {
      return this.wantedPerks.map(wp => wp.perk.ranks.filter(r => r.rank <= wp.rank)).reduce((t, c) => (t.concat(...c)), []).length;
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
