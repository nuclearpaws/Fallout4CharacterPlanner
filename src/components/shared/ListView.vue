<template>
  <div class="list-view">
    <ul>
      <li v-for="(item, index) in value" v-bind:key="index">
        <span>{{ textDecorator(item) }}</span>
        <span>&nbsp;<a href="#" v-on:click.prevent="move(index, 0)">TOP</a>&nbsp;</span>
        <span>&nbsp;<a href="#" v-on:click.prevent="move(index, index - 1)">UP</a>&nbsp;</span>
        <span>&nbsp;<a href="#" v-on:click.prevent="move(index, index + 1)">DOWN</a>&nbsp;</span>
        <span>&nbsp;<a href="#" v-on:click.prevent="move(index, value.length - 1)">BOTTOM</a>&nbsp;</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      required: true,
      default: () => [],
    },
    textDecorator: {
      type: Function,
      required: false,
      default: input => input,
    },
  },
  methods: {
    move(index, targetIndex) {
      if (targetIndex < 0 || targetIndex >= this.value.length) {
        return; // prevent impossible moves
      }

      const data = this.value.splice(index, 1);
      this.value.splice(targetIndex, 0, ...data);

      this.$emit('input', this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
