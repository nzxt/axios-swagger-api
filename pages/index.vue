<template>
<v-app>
  <v-container fill-height>
    <v-layout justify-space-around align-center>
      <v-flex xs3>
        <v-form @submit.stop.prevent='onSubmit'>
          <v-text-field label='Email' v-model='email'/>
          <v-text-field label='Password' v-model='password'/>
          <v-btn type='submit' :loading='isLoading'>Hi, Swagger!</v-btn>
        </v-form>
      </v-flex>
      <v-flex xs6>
        <v-alert :value='!isOk && !isError' type='info' transition="scale-transition">
          <pre>Fill form and push the button!</pre>
        </v-alert>
        <v-alert :value='isOk' type='success' transition="scale-transition">
          <pre>{{ response }}</pre>
        </v-alert>
        <v-alert :value='isError' type='error' transition="scale-transition">
          <pre>{{ error }}</pre>
        </v-alert>
      </v-flex>
    </v-layout>
  </v-container>
</v-app>
</template>

<script>
export default {
  data: () => ({
    email: 'login@email.com',
    password: 'password',
    response: null,
    error: null,
    isLoading: null,
    isOk: null,
    isError: null
  }),

  methods: {
    onSubmit () {
      this.isLoading = true
      this.isOk = false
      this.isError = false
      const { email, password } = this
      this.$api.postApiPartnerLoginCheck({ email, password })
        .then(res => {
          this.response = res
          this.isOk = true
          this.isError = false
        })
        .catch(err => {
          this.error = err
          this.isOk = false
          this.isError = true
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>