<template>
  <div class="build-details">
    <h2>Build Details</h2>
    <input type="text" placeholder="Character Name..." v-model="buildName">
    <c-select v-bind:data="genders" v-model="buldGender" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

import {
  GAMEDATA_GET_IS_GENDERS_LOADED,
  GAMEDATA_GET_GENDERS,
  BUILD_GET_NAME,
  BUILD_GET_GENDER,
} from '@/store/getters.type';

import {
  BUILD_SET_NAME,
  BUILD_SET_GENDER,
} from '@/store/mutations.type';

import {
  GAMEDATA_FETCH_GENDERS,
} from '@/store/actions.type';

export default {
  async created() {
    if (!this.gendersLoaded) {
      await this.$store.dispatch(GAMEDATA_FETCH_GENDERS);
    }
  },
  computed: {
    ...mapGetters({
      gendersLoaded: GAMEDATA_GET_IS_GENDERS_LOADED,
      genders: GAMEDATA_GET_GENDERS,
      getBuildName: BUILD_GET_NAME,
      getBuildGender: BUILD_GET_GENDER,
    }),
    buildName: {
      get() {
        return this.getBuildName;
      },
      set(value) {
        this.setBuildName(value);
      },
    },
    buldGender: {
      get() {
        return this.getBuildGender;
      },
      set(value) {
        this.setBuildGender(value);
      },
    },
  },
  methods: {
    ...mapMutations({
      setBuildName: BUILD_SET_NAME,
      setBuildGender: BUILD_SET_GENDER,
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>
