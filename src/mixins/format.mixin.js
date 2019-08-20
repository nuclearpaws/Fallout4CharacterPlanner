export default {
  methods: {
    normalizeString(input) {
      return input.replace(/[^a-zA-Z0-9-_]/g, '').toLowerCase();
    },
  },
};
