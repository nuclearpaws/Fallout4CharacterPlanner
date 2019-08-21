<template>
  <div id="app">
    <SiteHead />
    <SiteBody />
    <SiteFoot />
  </div>
</template>

<script>
import SiteHead from '@/components/shared/SiteHead.vue';
import SiteBody from '@/components/shared/SiteBody.vue';
import SiteFoot from '@/components/shared/SiteFoot.vue';

export default {
  components: {
    SiteHead,
    SiteBody,
    SiteFoot,
  },
};
</script>

<style lang="scss">
@import './style/fonts.scss';
@import './style/spacing.scss';
@import './style/colors.scss';
@import './style/default.scss';
@import './style/perkicons.scss';

* {
  @extend .m-0;
  font-family: $font-condense;
  text-transform: uppercase;
  padding: 0;
}

body {
  background-color: $dark;
  color: $light;
}

#app {
  width: 1700px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
