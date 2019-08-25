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
  BUILD_GET_SPECIAL_PERKS,
} from '@/store/getters.type';

export default {
  computed: {
    ...mapGetters({
      specialPerks: BUILD_GET_SPECIAL_PERKS,
    }),
    levelGuide() {
      const perkOrder = [];
      this.specialPerks.forEach(p => p.perk.ranks.filter(r => r.rank <= p.rank).forEach((r) => {
        let late = 0;
        let { level } = r;
        while (level <= 1 || perkOrder.map(g => g.level).includes(level)) {
          level += 1;
          late += 1;
        }

        perkOrder.push({
          level,
          name: p.perk.name,
          rank: r.rank,
          late,
        });
      }));
      const buildGuide = [];
      for (let i = 1; i <= Math.max(...perkOrder.map(p => p.level)); i += 1) {
        const perk = perkOrder.find(p => p.level === i);
        buildGuide.push(perk || {
          level: i,
          name: '--',
          rank: null,
          late: null,
        });
      }

      buildGuide.sort((a, b) => (a.level - b.level));
      return buildGuide;
    },
  },
  methods: {
    getStepText(step) {
      const prefix = `${step.level}: ${step.name}`;
      if (!step.rank) {
        return prefix;
      } if (step.rank === 1) {
        return `${prefix} ${step.rank}`;
      } if (step.late > 0) {
        if (step.late > 1) {
          return `${prefix} ${step.rank} (${step.late} Levels Late)`;
        }
        return `${prefix} ${step.rank} (${step.late} Level Late)`;
      }
      return `${prefix} ${step.rank}`;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
