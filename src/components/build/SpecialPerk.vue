<template>
  <div class="special-perk" v-on:click="leftClicked($event)" v-on:contextmenu="rightClick($event)">
    <div class="special-perk-body">
      <div v-bind:class="[`fo4-bg-${normalizeString(perk.name)}`, isWanted ? 'special-perk-bg-highlighted' : 'special-perk-bg']">
        <div v-bind:class="[isWanted ? wantedLevel >= maxLevel ? 'is-success' : 'is-warning' : '']">
          <h3>{{ perk.name }}</h3>
          <h4>{{ wantedLevel }}</h4>
        </div>
      </div>
    </div>
    <div class="special-perk-tooltip">
      <div v-for="rank in perk.ranks" v-bind:key="rank.rank">
        <p v-bind:class="[isWanted ? rank.rank <= wantedLevel ? 'is-success' : 'is-error' : '']">
          <b v-if="isWanted && rank.rank == wantedLevel">{{ rank.rank }} - {{ rank.description }}</b>
          <span v-else>{{ rank.rank }} - {{ rank.description }}</span>
        </p>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { UPDATE_BUILD_PERK } from '@/store/build.module';

export default {
  props: {
    perk: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      wantedLevelStore: 0,
    };
  },
  created() {
    const wantedPerk = this.wantedPerks.find(wp => wp.perkName === this.perk.name);
    if (wantedPerk) {
      this.wantedLevelStore = wantedPerk.perkRank;
    }
  },
  watch: {
    wantedLevelStore() {
      if (this.perk) {
        const payload = {
          perkName: this.perk.name,
          perkRank: this.wantedLevelStore,
        };
        this.$store.dispatch(UPDATE_BUILD_PERK, payload);
      }
    },
  },
  computed: {
    ...mapGetters([
      'wantedPerks',
    ]),
    isWanted() {
      return this.wantedLevel > 0;
    },
    wantedLevel() {
      return this.wantedLevelStore;
    },
    maxLevel() {
      return this.perk.ranks.length;
    },
  },
  methods: {
    leftClicked(event) {
      event.preventDefault();
      if (this.wantedLevelStore < this.maxLevel) {
        this.wantedLevelStore = this.wantedLevelStore + 1;
      }
    },
    rightClick(event) {
      event.preventDefault();
      if (this.wantedLevelStore > 0) {
        this.wantedLevelStore = this.wantedLevelStore - 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.special-perk {
  .special-perk-body {
    width: 225px;
    height: 201px;
    text-align: center;
  }
  .special-perk-tooltip {
    position: absolute;
    z-index: 1;
    visibility: collapse;
    background-color:#000000;
    border: 1px solid #ffffff;
    padding: 10px;
  }
  .special-perk-tooltip:hover {
    visibility: collapse !important;
  }
}

.special-perk-bg {
  -webkit-filter: saturate(50%); /* Safari */
  filter: saturate(50%);
  transition: 0.5s;
}

.special-perk-bg-highlighted {
  -webkit-filter: saturate(150%) !important; /* Safari */
  filter: saturate(150%) !important;
}

.special-perk-bg:hover {
  @extend .special-perk-bg-highlighted;
}

.special-perk:hover {
  .special-perk-tooltip {
    visibility: visible;
  }
}
</style>
