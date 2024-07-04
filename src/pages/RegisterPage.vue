<template>
  <main class="max-w-[1400px] mx-auto px-5 flex items-center justify-center h-[100vh]">
    <form @submit.prevent="register(registerData)" class="flex flex-col items-center justify-between gap-y-5 min-w-[300px] border-2 rounded-[10px] py-5 px-20 shadow-custom">
      <h1 class="text-white text-3xl">Регистрация</h1>
      <div class="flex flex-col gap-y-5">
        <input type="text" v-model="registerData.email" placeholder="Email" class="outline-none bg-transparent border-b-2 px-2 py-1 focus:rounded-[10px] placeholder-white text-white">
        <input type="text" v-model="registerData.password" placeholder="Password" class="outline-none bg-transparent border-b-2 px-2 py-1 focus:rounded-[10px] placeholder-white text-white">
      </div>
      <button class="border-2 px-5 py-1 rounded-[5px] text-white hover:bg-white hover:text-black text-lg font-medium transition">Регистрация</button>
      <div class="flex gap-x-1">
        <p class="text-white font-medium">Есть аккаунт?</p>
        <router-link :to="{name: 'login_page'}" class="text-cyan-950 font-medium hover:text-cyan-700 transition">Вход</router-link>
      </div>
    </form>
  </main>
</template>

<script>
import {mapActions} from "vuex";

export default {
  data() {
    return {
      registerData: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    ...mapActions(['register'])
  }
}
</script>
