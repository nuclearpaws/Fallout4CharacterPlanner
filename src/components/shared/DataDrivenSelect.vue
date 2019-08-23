<template>
  <select class="data-driven-select" v-model="valueModel">
    <option v-bind:value="null" v-bind:disabled="!allowNull" selected="true">{{ placeholder }}</option>
    <option v-for="(option, index) in data" v-bind:key="index" v-bind:value="valueMapper(option)">{{ textDecorated(option) }}</option>
  </select>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
    value: {
      required: false,
      default: null,
    },
    placeholder: {
      type: String,
      required: false,
      default: 'Please Choose...',
    },
    allowNull: {
      type: Boolean,
      required: false,
      default: false,
    },
    textDecorated: {
      type: Function,
      required: false,
      default: input => input,
    },
    valueMapper: {
      type: Function,
      required: false,
      default: input => input,
    },
  },
  computed: {
    valueModel: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
