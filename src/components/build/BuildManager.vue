<template>
  <div class="build-manager">
    <h2>Build Manager</h2>
    <ul class="mx-3 my-1">
      <li>
        <a href="#" v-on:click.prevent="reset()">Reset Build</a>
      </li>
      <li>
        <a href="#" v-on:click.prevent="save()">Save Build</a>
      </li>
      <li>
        <a href="#" v-on:click.prevent="load()">Load Build</a>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  BUILD_RESET,
  BUILD_SAVE,
  BUILD_LOAD,
} from '@/store/actions.type';

export default {
  methods: {
    reset() {
      this.$store.dispatch(BUILD_RESET);
    },
    load() {
      this.$store.dispatch(BUILD_LOAD, null);
    },
    save() {
      this.$store.dispatch(BUILD_SAVE);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
