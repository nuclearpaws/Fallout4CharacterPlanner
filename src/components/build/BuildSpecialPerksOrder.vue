<template>
  <div class="build-special-perks-order">
    <p>Build Special Perks Order</p>
    <CustomListView class="mx-3 my-1" v-bind:data="buildSpecialPerks" v-bind:textDecorator="buildSpecialPerk => `${buildSpecialPerk.perkName} Rank ${buildSpecialPerk.perkRank}`" v-on:orderChanged="orderChanged($event)" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CustomListView from '@/components/shared/CustomListView.vue';
import { UPDATE_BUILD_PERKS_ORDER } from '@/store/build.module';

export default {
  components: {
    CustomListView,
  },
  computed: {
    ...mapGetters([
      'buildSpecialPerks',
      'buildSpecialPerksDetailed',
      'buildStats',
    ]),
  },
  methods: {
    orderChanged(event) {
      this.$store.dispatch(UPDATE_BUILD_PERKS_ORDER, { buildSpecialPerks: event });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
