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
        <h2 class="headline font-weight-bold mb-3" v-if="isValid && candidate.name">Hello {{candidate.name}}!</h2>
        <h3 v-if="isValid">Position: {{candidate.position}}</h3>
        Enjoy our contents!
      </v-flex>
      <v-flex xs8 offset-xs2 mt-4>
        <v-btn color="info">Add Article</v-btn>&nbsp;&nbsp;<v-btn color="error" @click="clearAndBack()">Get Back</v-btn>
      </v-flex>
      <v-flex xs10 offset-xs1 v-if="isValid">
        
        <v-data-table
          :headers="headers"
          :items="posts"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import apiService from '../services';

export default {
  data: () => ({
    candidate: {
      name: '',
      position: '',
    },
    isValid: false,
    posts: [],
    headers: [
      {
        text: 'Id',
        align: 'right',
        value: 'id',
      },
      { text: 'Title', value: 'title', align: 'left' },
      { text: 'Description', value: 'body', align: 'left' },
    ],

  }),
  mounted() {
    this.$store.dispatch('GET_LOGIN');
    this.isValid = this.$store.getters.isLogin;
    if (this.isValid) {
      this.candidate = this.$store.getters.login;
    } else {
      this.$router.push('/');
    }
    this.listPosts();
  },
  methods: {
    clearAndBack() {
      this.$store.commit('change', '{}');
      this.$router.push('/');
    },
    listPosts() {
      apiService.getPosts()
        .then(response => response.data)
        .then((response) => {
          this.posts = response
        });
    },
  }
};
</script>
