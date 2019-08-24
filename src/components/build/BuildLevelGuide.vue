<template>
  <div class="build-level-guide">
    <h2>Build Level Guide</h2>
    <ul class="mx-3 my-1">
      <li v-for="(step, index) in levelGuide" v-bind:key="index">{{ getStepText(step) }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import {
  BUILD_GET_LEVEL_GUIDE,
} from '@/store/getters.type';

export default {
  computed: {
    ...mapGetters({
      levelGuide: BUILD_GET_LEVEL_GUIDE,
    }),
  },
  methods: {
    getStepText(step) {
      const prefix = `${step.level}: ${step.name}`;
      if (!step.rank) {
        return prefix;
      } else if (step.rank === 1) {
        return `${prefix} ${step.rank}`;
      } else if (step.late > 0) {
        if (step.late > 1) {
          return `${prefix} ${step.rank} (${step.late} Levels Late)`
        } else {
          return `${prefix} ${step.rank} (${step.late} Level Late)`
        }
      } else {
        return `${prefix} ${step.rank}`;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
