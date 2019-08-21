<template>
  <div class="build-manager">
    <p>Build Manager</p>
    <a href="#" v-on:click="reset($event)">Reset Build</a>
  </div>
</template>

<script>
import { RESET_BUILD } from '@/store/build.module';

export default {
  methods: {
    reset(event) {
      event.preventDefault();
      this.$store.dispatch(RESET_BUILD);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
