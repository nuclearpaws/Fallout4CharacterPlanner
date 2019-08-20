<template>
  <div class="build-special-perks-order">
    <p>Build Special Perks Order</p>
    <CustomListView class="mx-3 my-1" v-bind:data="wantedPerks" v-bind:textDecorator="wantedPerk => `${wantedPerk.perkName} Rank ${wantedPerk.perkRank}`" v-on:orderChanged="orderChanged($event)" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CustomListView from '@/components/shared/CustomListView.vue';

export default {
  components: {
    CustomListView,
  },
  computed: {
    ...mapGetters([
      'wantedPerks',
    ]),
  },
  methods: {
    orderChanged(event) {
      console.log(event);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
