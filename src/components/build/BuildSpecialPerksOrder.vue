<template>
  <div class="build-special-perks-order">
    <h2>Build Special Perks Order</h2>
    <c-listview class="mx-3 my-1" v-bind:value="buildSpecialPerks" v-on:input="orderChanged($event)" v-bind:textDecorator="wantedSpecialPerk => `${wantedSpecialPerk.perk.name} Rank ${wantedSpecialPerk.rank}`" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import {
  BUILD_GET_SPECIAL_PERKS,
} from '@/store/getters.type';

import {
  BUILD_UPDATE_SPECIAL_PERKS_ORDER,
} from '@/store/actions.type';

export default {
  computed: {
    ...mapGetters({
      buildSpecialPerks: BUILD_GET_SPECIAL_PERKS,
    }),
  },
  methods: {
    orderChanged(event) {
      this.$store.dispatch(BUILD_UPDATE_SPECIAL_PERKS_ORDER, { specialPerks: event });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
