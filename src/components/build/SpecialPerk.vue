<template>
  <div class="special-perk" v-on:click.prevent="updateWanted(1)" v-on:contextmenu.prevent="updateWanted(-1)">
    <div class="special-perk-body">
      <div v-bind:class="[`fo4-bg-${normalizeString(perk.name)}`, isWanted ? 'special-perk-bg-highlighted' : 'special-perk-bg']">
        <div v-bind:class="[isWanted ? wantedRank >= maxRank ? 'is-success' : 'is-warning' : '']">
          <h3>{{ perk.name }}</h3>
          <h4>{{ wantedRank }}</h4>
        </div>
      </div>
    </div>
    <div class="special-perk-tooltip">
      <div v-for="rank in perk.ranks" v-bind:key="rank.rank">
        <p v-bind:class="[isWanted ? rank.rank <= wantedRank ? 'is-success' : 'is-error' : '']">
          <b v-if="isWanted && rank.rank == wantedRank">{{ rank.rank }} - {{ rank.description }}</b>
          <span v-else>{{ rank.rank }} - {{ rank.description }}</span>
        </p>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import {
  BUILD_GET_SPECIAL_PERKS,
} from '@/store/getters.type';

import {
  BUILD_UPDATE_SPECIAL_PERK,
} from '@/store/actions.type';

export default {
  props: {
    perk: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      buildSpecialPerks: BUILD_GET_SPECIAL_PERKS,
    }),
    maxRank() {
      return this.perk.ranks.length;
    },
    wantedRank() {
      const perk = this.buildSpecialPerks.find(bsp => bsp.name === this.perk.name);
      return perk ? perk.rank : 0;
    },
    isWanted() {
      return this.wantedRank > 0;
    },
  },
  methods: {
    updateWanted(change) {
      const rank = this.wantedRank + change;
      if (rank <= this.maxRank) {
        this.$store.dispatch(BUILD_UPDATE_SPECIAL_PERK, { name: this.perk.name, rank });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.special-perk {
  .special-perk-body {
    width: 225px;
    height: 201px;
    text-align: center;
  }
  .special-perk-tooltip {
    position: absolute;
    z-index: 1;
    visibility: collapse;
    background-color:#000000;
    border: 1px solid #ffffff;
    padding: 10px;
  }
  .special-perk-tooltip:hover {
    visibility: collapse !important;
  }
}

.special-perk-bg {
  -webkit-filter: saturate(50%); /* Safari */
  filter: saturate(50%);
  transition: 0.5s;
}

.special-perk-bg-highlighted {
  -webkit-filter: saturate(150%) !important; /* Safari */
  filter: saturate(150%) !important;
}

.special-perk-bg:hover {
  @extend .special-perk-bg-highlighted;
}

.special-perk:hover {
  .special-perk-tooltip {
    visibility: visible;
  }
}
</style>
