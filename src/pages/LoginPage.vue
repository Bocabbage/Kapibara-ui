<script setup>
import 'tdesign-vue-next/es/style/index.css';
import { reactive } from 'vue';
import { DesktopIcon, LockOnIcon } from 'tdesign-icons-vue-next';
import { sha256 } from 'js-sha256';
// bcrypt from 'bcryptjs'


const login_api_uri = import.meta.env.VITE_LOGIN_API_URI
const login_pwd_salt = import.meta.env.VITE_USER_PASSWORD_SALT

const login_info = reactive({
  account: '',
  password: '',
});


async function onSubmit()
{
  // User_password encryption in front-end
  const salt_rounds = 0
  // let crypto_password = await bcrypt.hash(sha256(login_info.password), login_pwd_salt)
  let crypto_password = sha256(login_info.password + login_pwd_salt)
  // Send form-data of login-info
  let response = await fetch(
      login_api_uri,
      {
        method: 'POST',
        body: JSON.stringify(
            {
              account: login_info.account,
              password: crypto_password
            }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }
  )
  let content = await response.json()
  if(content.code === 200) {
    console.log('Login success!')
  }
  else {
    console.error('Error code:', content.code)
  }
}
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

              <div class="login-form-item" id="inputform" align="center">
                <t-form ref="form" :data="login_info" :colon="true" :label-width="0" @submit="onSubmit">
                  <t-form-item name="account">
                    <t-input v-model="login_info.account" clearable placeholder="Account">
                      <template #prefix-icon>
                        <desktop-icon />
                      </template>

                    </t-input>
                  </t-form-item>

                  <t-form-item name="password">
                    <t-input v-model="login_info.password" type="password" clearable placeholder="Password">
                      <template #prefix-icon>
                        <lock-on-icon />
                      </template>

                    </t-input>
                  </t-form-item>

                  <div class="login-form-item" align="right">
                    <t-space size="small">
                      <t-button
                          theme="danger"
                          size="large">
                        Sign in
                      </t-button>

                      <t-button
                          theme="success"
                          size="large"
                          type="submit"
                      >
                        Log in
                      </t-button>

                    </t-space>
                  </div>
                </t-form>
              </div>
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
  gap: 20px
}

#inputform {
  grid-row: span 2;
}

#kapipra-img-div {
  text-align: center;
}

</style>