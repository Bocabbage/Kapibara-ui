<script setup>
import 'tdesign-vue-next/es/style/index.css';
import { reactive } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import { DesktopIcon, LockOnIcon } from 'tdesign-icons-vue-next';

const formData = reactive({
  account: '',
  password: '',
});

const onReset = () => {
  MessagePlugin.success('重置成功');
};

const onSubmit = ({ validateResult, firstError }) => {
  if (validateResult === true) {
    MessagePlugin.success('提交成功');
  } else {
    console.log('Validate Errors: ', firstError, validateResult);
    MessagePlugin.warning(firstError);
  }
};
</script>

<template>
  <t-space direction="vertical">
    <div>
      <t-layout class="same-color-bg">
        <t-header class="same-color-bg" height="150px">Kapibara</t-header>
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
                <t-form ref="form" :data="formData" :colon="true" :label-width="0" @reset="onReset" @submit="onSubmit">
                  <t-form-item name="account">
                    <t-input v-model="formData.account" clearable placeholder="Account">
                      <template #prefix-icon>
                        <desktop-icon />
                      </template>

                    </t-input>
                  </t-form-item>

                  <t-form-item name="password">
                    <t-input v-model="formData.password" type="password" clearable placeholder="Password">
                      <template #prefix-icon>
                        <lock-on-icon />
                      </template>

                    </t-input>
                  </t-form-item>
                </t-form>
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
                      size="large">
                    Log in
                  </t-button>

                </t-space>
              </div>
            </div>
          </t-card>
        </t-content>
        <t-footer height="150px"></t-footer>
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