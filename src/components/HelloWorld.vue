<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">Welcome to DEA Training</h2>
        Your need to input your information to enter into our training room
        <v-alert v-model="alert" color="pink" dark border="top" icon="mdi-keyboard-settings" transition="scale-transition" dismissible>
          <h2>Please provide a valid info!</h2>
        </v-alert>
      </v-flex>
      <v-flex xs8 offset-xs2>
        <v-text-field v-model="form.name" label="Name"></v-text-field>
      </v-flex>
      <v-flex xs8 offset-xs2>
        <v-text-field v-model="form.position" label="Position"></v-text-field>
      </v-flex>
      <v-flex xs8 offset-xs2>
        <v-btn color="primary" @click="storeIt()">Check Training Now</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    form: {
      name: '',
      position: '',
    },
    isLogin: false,
    alert: false,
  }),
  methods: {
    storeIt() {
      this.$store.commit('change', this.form);
      this.isLogin = this.$store.getters.isLogin;
      this.alert = false;
      if (this.isLogin) {
        this.$router.push('/view');
      } else {
        this.alert = true;
      }
    },
  },
};
</script>
