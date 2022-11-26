<template>
  <b-container>
    <div class="row justify-content-center align-items-center min-vh-100">
      <b-form class="col col-lg-4">
        <p class="display-4 text-center">
          <b-icon-person-bounding-box />
        </p>

        <b-form-group>
          <b-form-input
            v-model="formData.email"
            name="email"
            type="email"
            placeholder="email@gmail.com"
            :class="{
              'is-invalid': $v.formData.email.$error,
            }"
          />
          <b-form-invalid-feedback>
            {{
              !$v.formData.email.email
                ? 'Insira um e-mail válido'
                : 'Preencha o campo acima'
            }}
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group class="mb-0">
          <b-form-input
            v-model="formData.password"
            name="password"
            type="password"
            placeholder="******"
            :class="{
              'is-invalid': $v.formData.password.$error,
            }"
          />
          <b-form-invalid-feedback>
            Preencha o campo acima
          </b-form-invalid-feedback>
        </b-form-group>

        <b-button
          block
          variant="primary"
          class="p-2 mt-3"
          :disabled="formSend"
          @click="login"
        >
          <b-spinner v-if="formSend" small type="grow" />
          Entrar
        </b-button>
      </b-form>
    </div>
  </b-container>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';
import { BIconPersonBoundingBox } from 'bootstrap-vue';

export default {
  name: 'Login',

  components: { BIconPersonBoundingBox },

  mixins: [validationMixin],

  data: () => {
    return {
      formSend: false,
      formData: {
        email: null,
        password: null,
      },
    };
  },

  head() {
    return {
      title: `NOME DA PÁGINA |  ${process.env.title}`,

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
      ],
    };
  },

  validations: {
    formData: {
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },

  methods: {
    login() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        // SIMULATION OF A DATA FETCHING REQUEST

        this.formSend = true;
        console.log(this.formData);

        this.promise()
          .then(() => {
            this.formSend = false;
            this.$v.$reset();

            this.formData = {
              email: null,
              required: null,
            };
          })
          .catch((error) => {
            this.formSend = false;

            console.log(error);

            this.toast('danger', 'Erro', error);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
