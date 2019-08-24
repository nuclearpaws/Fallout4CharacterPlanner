import Vue from 'vue';
import app from '@/App.vue';
import router from '@/router/router';
import store from '@/store/store';

import formatMixin from '@/mixins/format.mixin';

import customSelect from '@/components/shared/CustomSelect.vue';
import listView from '@/components/shared/ListView.vue';

Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    ...formatMixin.methods,
  },
});

Vue.component('c-select', customSelect);
Vue.component('c-listview', listView);

new Vue({
  router,
  store,
  render: h => h(app),
}).$mount('#app');
