<template>
  <div id="build">
    <h1>Build</h1>
    <BuildManager />
    <BuildDetails />
    <BuildSpecialPerks />
    <BuildSpecialPerksOrder />
  </div>
</template>

<script>
import BuildManager from '@/components/build/BuildManager.vue';
import BuildDetails from '@/components/build/BuildDetails.vue';
import BuildSpecialPerks from '@/components/build/BuildSpecialPerks.vue';
import BuildSpecialPerksOrder from '@/components/build/BuildSpecialPerksOrder.vue';

export default {
  components: {
    BuildManager,
    BuildDetails,
    BuildSpecialPerks,
    BuildSpecialPerksOrder,
  },
};
</script>

<style lang="scss" scoped>
</style>
