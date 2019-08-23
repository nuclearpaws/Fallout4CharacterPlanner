<template>
  <div class="list-view">
    <ul>
      <li v-for="(item, index) in value" v-bind:key="index">
        <span>{{ textDecorator(item) }}</span>
        <span>&nbsp;<a href="#" v-on:click="move($event, index, -1)">UP</a>&nbsp;</span>
        <span>&nbsp;<a href="#" v-on:click="move($event, index, 1)">DOWN</a>&nbsp;</span>
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
    move(event, index, difference) {
      event.preventDefault();

      const newIndex = index + difference;

      if (newIndex < 0 || newIndex >= this.value.length) {
        return; // prevent impossible moves
      }

      const temp = this.value[newIndex];
      this.value[newIndex] = this.value[index];
      this.value[index] = temp;

      this.$emit('input', this.value);
      this.$forceUpdate();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
