import { setTimeout } from 'core-js';
import Vue from 'vue';
Vue.mixin({
  methods: {
    // https://bootstrap-vue.org/docs/components/toast#variants
    toast(variant = 'success', title = 'titulo', message = 'Mensagem') {
      this.$bvToast.toast(message, {
        title,
        variant,
        solid: true,
      });
    },

    // simulation  promise
    promise() {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          const activate = Math.random() < 0.5;

          if (activate === true) {
            resolve("I'm successful");
          } else {
            const errMsg =
              activate === false ? "I'm a failure." : 'Oh this is not good.';
            reject(errMsg);
          }
        }, 2000);
      });
    },
  },
});
