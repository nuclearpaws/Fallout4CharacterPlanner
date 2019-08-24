<template>
  <div class="build-manager">
    <h2>Build Manager</h2>
    <a href="#" v-on:click.prevent="reset()">Reset Build</a>
  </div>
</template>

<script>
import {
  BUILD_RESET,
} from '@/store/actions.type';

export default {
  methods: {
    reset() {
      this.$store.dispatch(BUILD_RESET);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
