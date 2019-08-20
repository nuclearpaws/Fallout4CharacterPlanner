<template>
  <div class="custom-list-view">
    <ul>
      <li v-for="(item, index) in data" v-bind:key="index">
        <span>{{ textDecorator(item) }}</span>
        <a href="#" v-on:click="move($event, index, -1)"> UP </a>
        <a href="#" v-on:click="move($event, index, 1)"> DOWN </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
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

      if (newIndex < 0 || newIndex >= this.data.length) {
        return;
      }

      const temp = this.data[newIndex];
      this.data[newIndex] = this.data[index];
      this.data[index] = temp;

      this.$emit('orderChanged', 'TODO: Add Event Data');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
