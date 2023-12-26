<script setup>
import 'tdesign-vue-next/es/style/index.css';
import LoginForm from '@/components/LoginForm.vue'
// import bcrypt from 'bcryptjs'
// import userStoreApis from '@/store/user'
// console.log("test in home:", userStoreApis.getUserSessionData().session)
</script>

<template>

  <t-layout class="same-color-bg">
    <t-header class="same-color-bg login-header" height="200px">Kapibara</t-header>
    <t-content class="login-content">
      <t-card class="login-card" hoverShadow bordered>
        <div class="login-form-container">

          <div class="login-form-item" id="kapipara-img-div" align="center">
            <t-image
                shape="circle"
                id="kapipara-img"
                src="Kapibara-icon.jpg"
                :style="{ width: '120px', height: '120px' }"
            />
          </div>

          <LoginForm />
        </div>
      </t-card>
    </t-content>
    <t-footer height="80px">Bocabbage</t-footer>
  </t-layout>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Oswald');

.same-color-bg {
  background-color: #99D798;
}

.login-form-container {
  display: grid;
  justify-content: center;
  align-items: center;
  /* grid-template-rows: repeat(3, 1fr); */
  grid-gap: 20px;
  gap: 20px;
}

.login-header {
  font-family: 'Oswald';
  font-size: 80px;
  display: grid;
  place-items: center;
}

.login-content {
  height: 800px;
  display: grid;
  align-items: start;
  justify-items: center;
}

.login-card {
  max-width: 400px;
  display: grid;
  align-items: center;
}

</style>