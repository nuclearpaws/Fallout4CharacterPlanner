<template>
  <div id="build">
    <h1>Build</h1>
    <hr />
    <BuildManager />
    <hr />
    <BuildCharacter />
    <hr />
    <BuildSpecialPerks />
    <hr />
    <BuildSpecialPerksOrder />
    <hr />
    <BuildStats />
    <hr />
    <BuildLevelGuide />
    <hr />
  </div>
</template>

<script>
import BuildManager from '@/components/build/BuildManager.vue';
import BuildCharacter from '@/components/build/BuildCharacter.vue';
import BuildSpecialPerks from '@/components/build/BuildSpecialPerks.vue';
import BuildSpecialPerksOrder from '@/components/build/BuildSpecialPerksOrder.vue';
import BuildStats from '@/components/build/BuildStats.vue';
import BuildLevelGuide from '@/components/build/BuildLevelGuide.vue';

export default {
  components: {
    BuildManager,
    BuildCharacter,
    BuildSpecialPerks,
    BuildSpecialPerksOrder,
    BuildStats,
    BuildLevelGuide,
  },
};
</script>

<style lang="scss" scoped>
</style>
