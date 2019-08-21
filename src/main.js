import Vue from 'vue';
import app from '@/App.vue';
import router from '@/router/router';
import store from '@/store/store';
import formatMixin from '@/mixins/format.mixin';

Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    ...formatMixin.methods,
  },
});

new Vue({
  router,
  store,
  render: h => h(app),
}).$mount('#app');
