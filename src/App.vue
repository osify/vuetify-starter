<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Resource Centers</span>
        <span class="font-weight-light"></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="dialog = true" target="_blank">
        <span class="mr-2">Capacity Building for IT</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
    <v-layout>
      <v-dialog v-model="dialog" persistent width="800" >
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>
            Training Info
          </v-card-title>

          <v-card-text>
            <p>This is a special training by POSCAR (Cambodia)!</p>
            <p>If you want to join, please contact to DEA.</p>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    dialog: false,
  }),
};
</script>
