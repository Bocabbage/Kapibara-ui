<script setup>
import 'tdesign-vue-next/es/style/index.css';
import { reactive } from 'vue';
import { DesktopIcon, LockOnIcon } from 'tdesign-icons-vue-next';
import  AuthApis from '@/api/remote/authApis'
import storeUser from '@/store/user'
import router from '@/router/index'

const login_info = reactive({
  account: '',
  password: '',
  rememberMe: false,
});

async function loginRequest()
{

  try {
    // Current data should provide: username, expires, access_token
    let {data} = await AuthApis.login(login_info.account, login_info.password)
    data.rememberMe = login_info.rememberMe
    storeUser.setUserSessionState(data)
    // [debug]
    // console.info("data: ", data)
    await router.push({name: "home"})

  } catch(e) {
    console.log("Error: ", e.message, e.code)
  }

}
</script>

<template>
  <div class="login-form-item" id="inputform" align="center">
  <t-form ref="form" :data="login_info" :colon="true" :label-width="0">
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

    <div class="rememberme-checkbox" align="right">
      <t-checkbox v-model="login_info.rememberMe">Remember Me</t-checkbox>
    </div>

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
            @click="loginRequest"
        >
          Log in
        </t-button>
      </t-space>
    </div>
  </t-form>
  </div>
</template>

<style scoped>
#inputform {
  grid-row: span 2;
}
</style>