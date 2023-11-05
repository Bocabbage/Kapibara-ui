<script setup>
import 'tdesign-vue-next/es/style/index.css';
import LoginForm from '@/components/LoginForm.vue'
// import bcrypt from 'bcryptjs'
// import userStoreApis from '@/store/user'
// console.log("test in home:", userStoreApis.getUserSessionData().session)
</script>

<template>
  <t-space direction="vertical">
    <div>
      <t-layout class="same-color-bg">
        <t-header class="same-color-bg" height="200px">Kapibara</t-header>
        <t-content>
          <t-card hoverShadow bordered>
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
        <t-footer height="200px"></t-footer>
      </t-layout>
    </div>
  </t-space>
</template>

<style scoped>

body {
  background-color: #99D798;
}

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

</style>