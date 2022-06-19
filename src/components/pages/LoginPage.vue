<template>
  <div style="justify-content: center">
    <div class="container">
      <div class="container-top"></div>
      <p>ユーザーネーム</p>
      <div class="input-text">
        <input v-model="username" type="text" />
      </div>
      <p>パスワード</p>
      <div class="input-text">
        <input v-model="password" type="password" />
      </div>
      <div class="buttons">
        <button @click="login">ログインする</button>
        <button @click="signup">登録する</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import axios from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyPage',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      axios
        .post('/api/users/login', {
          id: this.username,
          password: this.password,
        })
        .then((response) => console.log(response.data))
    },
    signup() {
      axios
        .post('/api/users/signup', {
          id: this.username,
          password: this.password,
        })
        .then((response) => console.log(response.data))
    },
  },
})
</script>

<style scoped>
p {
  padding-left: 10px;
  margin-top: 30px;
}
.container {
  margin: 30px auto auto auto;
  width: 300px;
  height: fit-content;
  padding-bottom: 30px;
  border-radius: 10px;
  background-color: whitesmoke;
  box-shadow: var(--standardShadow);
}
.container-top {
  border-top: 6px solid var(--primaryDark);
  background-color: var(--primary);
  height: 40px;
}
button {
  padding: 5px;
  margin: 5px 5px;
  width: 130px;
  border-radius: 5px;
  background-color: var(--primaryLight);
  color: var(--textOnPrimary);
  box-shadow: var(--buttonShadow);
  transition: var(--buttonTransition);
}
button:hover {
  box-shadow: var(--buttonShadowHover);
}
.input-text {
  border-bottom: 2px solid var(--primaryDark);
  padding-bottom: 2px;
  margin: 5px auto 5px 30px;
  width: fit-content;
  background-color: whitesmoke;
}
input {
  background-color: whitesmoke;
}
.buttons {
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;
}
</style>
